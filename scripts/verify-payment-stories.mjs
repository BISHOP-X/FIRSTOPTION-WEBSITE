import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { mkdir } from 'node:fs/promises';
import path from 'node:path';
import os from 'node:os';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.PREVIEW_URL || 'http://127.0.0.1:5173';
const output = path.join(os.tmpdir(), 'firstoption-payment-stories-qa');
await mkdir(output, { recursive: true });
const browser = await chromium.launch({ headless: true, ...(process.env.PLAYWRIGHT_CHANNEL ? { channel: process.env.PLAYWRIGHT_CHANNEL } : {}) });
const errors = [];
const context = await browser.newContext({ reducedMotion: 'reduce' });
const page = await context.newPage();
page.on('pageerror', error => errors.push(error.message));
const routes = ['/', '/personal', '/business', '/payments', '/groups', '/how-it-works', '/wallet-funding', '/services', '/services/airtime', '/services/data-bundles', '/services/electricity', '/services/crypto', '/services/gift-cards'];

async function assertLayout(label) {
  await page.waitForFunction(() => getComputedStyle(document.body).margin === '0px');
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => new Promise(resolve => requestAnimationFrame(() => requestAnimationFrame(resolve))));
  const issues = await page.evaluate(() => {
    const failures = [];
    if (document.documentElement.scrollWidth > window.innerWidth + 1) {
      const outside = [...document.querySelectorAll('main *')].filter(node => node.getBoundingClientRect().right > innerWidth + 1).slice(0, 5).map(node => `${node.tagName}.${node.className}`);
      failures.push(`Page overflow: ${document.documentElement.scrollWidth} / ${innerWidth}: ${outside.join(', ')}`);
    }
    document.querySelectorAll('.pd-chat, .pd-review, .pd-selector, .pd-receipt, .pd-funding-stage, .pd-service-preview').forEach(node => {
      const r = node.getBoundingClientRect();
      if (r.width && (r.left < -1 || r.right > innerWidth + 1)) failures.push(`${node.className}: outside viewport`);
      if (node.scrollWidth > node.clientWidth + 2) failures.push(`${node.className}: horizontal content overflow`);
    });
    document.querySelectorAll('.pd-chat-phone, .pd-device-flat .pd-chat, .pd-service-example .pd-chat').forEach(chat => {
      if (chat.querySelector('.pd-review')) {
        const review = chat.querySelector('.pd-review');
        if (review.scrollHeight > review.clientHeight + 2) failures.push('Review content clipped');
      } else {
        const content = chat.querySelector('.pd-thread');
        if (content.scrollHeight > content.clientHeight + 2) failures.push(`Chat content clipped by composer: ${content.scrollHeight} > ${content.clientHeight}`);
      }
    });
    document.querySelectorAll('.pd-original-phone .product-phone').forEach(device => {
      const r = device.getBoundingClientRect();
      const ratio = device.offsetHeight / device.offsetWidth;
      if (ratio < 2.1 || ratio > 2.2) failures.push(`Distorted phone proportions: ${ratio.toFixed(3)}`);
      if (!device.querySelector('.phone-hardware') || !device.querySelector('.product-phone-screen')) failures.push('Original phone hardware missing');
      const hero = device.closest('.hero');
      if (hero && r.bottom > hero.getBoundingClientRect().bottom) failures.push('Phone clipped by hero');
    });
    return failures;
  });
  if (issues.length) await page.screenshot({ path: path.join(output, 'failure.png'), fullPage: false });
  assert.deepEqual(issues, [], label);
}

try {
  for (const width of [320, 390, 768, 1440]) {
    await page.setViewportSize({ width, height: width >= 1000 ? 900 : 844 });
    for (const route of routes) {
      await page.goto(base + route);
      await page.locator('h1').waitFor();
      await assertLayout(`${width}px ${route}`);
      if (route === '/') {
        assert.equal(await page.locator('.hero .pd-selector').count(), 0, 'Homepage has one focused story');
        assert.match(await page.locator('.hero .pd-bubble').innerText(), /Send ₦5,000 to Ada/);
        assert.match(await page.locator('.hero .pd-receipt img').getAttribute('src'), /send.webp$/);
      }
      if (route === '/business') {
        const phone = page.locator('.pd-merchant .product-phone');
        assert.equal(await phone.count(), 1, 'Business uses one phone');
        const originalPhone = await phone.elementHandle();
        assert.match(await phone.innerText(), /FirstOption[\s\S]*Collect ₦25,000 for order 104[\s\S]*Payment request ready/);
        assert.equal(await phone.locator('.pd-composer').count(), 1, 'WhatsApp composer remains visible');
        if ([390, 1440].includes(width)) await page.locator('.pd-merchant').screenshot({ path: path.join(output, `${width}-business-request-phone.png`) });
        await page.getByRole('button', { name: 'Payment received', exact: true }).click();
        await assertLayout(`${width}px Business received in WhatsApp`);
        assert.equal(await originalPhone.evaluate(node => node === document.querySelector('.pd-merchant .product-phone')), true, 'Switching state preserves the same phone');
        assert.equal(await phone.locator('.pd-thread .pd-receipt img').count(), 1, 'Receipt stays inside the WhatsApp conversation');
        await phone.locator('.pd-receipt img').evaluate(image => image.decode());
        if ([390, 1440].includes(width)) await page.locator('.pd-merchant').screenshot({ path: path.join(output, `${width}-business-received-phone.png`) });
        await page.getByRole('button', { name: 'Request', exact: true }).click();
        await assertLayout(`${width}px Business request restored`);
        await originalPhone.dispose();
      }
      if (['/services/airtime', '/services/data-bundles', '/services/electricity'].includes(route)) {
        await page.getByRole('button', { name: 'Your receipt', exact: true }).click();
        await assertLayout(`${width}px ${route} receipt`);
        const receiptImage = page.locator('.pd-receipt img');
        await receiptImage.scrollIntoViewIfNeeded();
        await receiptImage.evaluate(image => image.decode());
        assert.equal(await receiptImage.evaluate(image => image.naturalWidth), 840, 'Actual renderer artwork loaded');
      }
      const file = `${width}-${route === '/' ? 'home' : route.slice(1).replaceAll('/', '-')}.png`;
      if ([390, 1440].includes(width)) {
        const target = route === '/' ? page.locator('.hero') : page.locator('.product-story, .how-lead, .service-detail-lead, .collection-demo').first();
        if (await target.count()) await target.screenshot({ path: path.join(output, file) });
      }
    }
  }
  await page.setViewportSize({ width: 1366, height: 650 });
  await page.goto(base);
  await assertLayout('Short desktop phone proportions');
  await page.locator('.hero').screenshot({ path: path.join(output, '1366-short-home.png') });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  assert.match(await page.locator('.pd-playback-state').innerText(), /Money sent/);
  await assertLayout('Reduced motion send');
  assert.equal(await page.locator('.service-grid .service-card').count(), 10, 'All service cards retained');
  assert.match(await page.locator('.pd-snippet').innerText(), /Send five thousand naira to Ada/);
  await page.getByRole('button', { name: 'Play voice note' }).click();
  await page.waitForFunction(() => { const audio = document.querySelector('audio'); return audio && !audio.paused && audio.currentTime > 0; });
  await page.getByRole('button', { name: 'Pause voice note' }).click();

  await page.goto(base + '/business');
  const before = await page.locator('.pd-merchant-stage').boundingBox();
  await page.getByRole('button', { name: 'Payment received', exact: true }).click();
  assert.match(await page.locator('.pd-receipt img').getAttribute('alt'), /Order 104/);
  assert.match(await page.locator('.pd-receipt img').getAttribute('src'), /collect.webp$/);
  await page.locator('.pd-receipt img').evaluate(image => image.decode());
  await assertLayout('Business full receipt');
  await page.locator('.pd-merchant').screenshot({ path: path.join(output, '390-business-receipt.png') });
  const after = await page.locator('.pd-merchant-stage').boundingBox();
  assert.equal(Math.round(before.height), Math.round(after.height), 'Merchant stage height stays fixed');
  const trigger = page.getByRole('button', { name: 'View payment received receipt' });
  await trigger.click();
  assert.equal(await page.getByRole('dialog').count(), 1, 'Receipt opens at full size');
  const fullReceipt = page.locator('.pd-receipt-viewer > img');
  assert.equal(await fullReceipt.evaluate(image => image.naturalHeight), 1270);
  await fullReceipt.scrollIntoViewIfNeeded();
  await page.screenshot({ path: path.join(output, '390-receipt-full.png') });
  await page.keyboard.press('Escape');
  assert.equal(await page.getByRole('dialog').count(), 0, 'Escape closes receipt');
  assert.equal(await trigger.evaluate(node => node === document.activeElement), true, 'Focus returns to receipt');
  assert.notEqual(await page.evaluate(() => document.body.style.overflow), 'hidden', 'Scroll is restored');
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.locator('.product-story').screenshot({ path: path.join(output, '1440-business-receipt.png') });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + '/payments');
  await page.getByRole('button', { name: 'Let the payer choose' }).click();
  assert.match(await page.locator('.pd-link-stage').innerText(), /Your amount/);
  await page.goto(base + '/wallet-funding');
  await page.getByRole('button', { name: 'Continue payment' }).click();
  assert.match(await page.locator('.pd-funding-stage').innerText(), /₦5,000 to Ada Okafor/);
  for (const service of ['crypto', 'gift-cards']) {
    await page.goto(base + '/services/' + service);
    await page.getByRole('button', { name: 'Sell', exact: true }).click();
    assert.match(await page.locator('.pd-service-cta').innerText(), /Sell/);
  }
  await page.goto(base + '/how-it-works');
  for (const label of ['Message', 'Reply', 'Review', 'Receipt']) {
    await page.getByRole('button', { name: new RegExp(label + '$') }).click();
    await assertLayout(`Walkthrough ${label}`);
  }
  await page.setViewportSize({ width: 320, height: 568 });
  await page.addStyleTag({ content: '.pd-bubble p, .pd-bubble > strong, .pd-review dl { font-size: 16px !important; }' });
  await assertLayout('Enlarged demo text');

  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base);
  await page.locator('.payment-demo').scrollIntoViewIfNeeded();
  await page.getByRole('button', { name: 'Pause demonstration' }).click();
  const pausedState = await page.locator('.pd-playback-state').innerText();
  await page.waitForTimeout(2000);
  assert.equal(await page.locator('.pd-playback-state').innerText(), pausedState, 'Pause holds');
  await page.getByRole('button', { name: 'Replay demonstration' }).click();
  await page.waitForFunction(() => document.querySelector('.pd-playback-state')?.textContent.includes('FirstOption replies'));
  await assertLayout('Animated reply');
  await page.waitForFunction(() => document.querySelector('.pd-playback-state')?.textContent.includes('Review & approve'));
  await assertLayout('Animated review');
  await page.locator('.product-phone').screenshot({ path: path.join(output, '390-send-review.png') });
  await page.waitForFunction(() => document.querySelector('.pd-playback-state')?.textContent.includes('Money sent'));
  await assertLayout('Animated receipt');
  await page.waitForTimeout(2000);
  assert.match(await page.locator('.pd-playback-state').innerText(), /Money sent/, 'Final frame holds');
  await page.locator('.product-phone').screenshot({ path: path.join(output, '390-send-receipt.png') });
  await page.getByRole('button', { name: 'View payment sent receipt' }).click();
  assert.equal(await page.getByRole('dialog').count(), 1, 'Phone receipt can be opened');
  await page.getByRole('button', { name: 'Close receipt' }).click();
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto(base);
  await page.locator('.payment-demo').scrollIntoViewIfNeeded();
  await page.waitForFunction(() => document.querySelector('.pd-playback-state')?.textContent.includes('Review & approve'));
  await assertLayout('Desktop animated review');
  await page.locator('.hero').screenshot({ path: path.join(output, '1440-send-review.png') });
  await page.waitForFunction(() => document.querySelector('.pd-playback-state')?.textContent.includes('Money sent'));
  await assertLayout('Desktop animated receipt');
  assert.deepEqual(errors, [], 'No browser errors');
  console.log(`PASS: ${routes.length} routes at four widths, demo states, audio, controls, reduced motion, enlarged text. Screenshots: ${output}`);
} finally {
  await context.close();
  await browser.close();
}
