"""Render synthetic website examples with the backend's actual receipt code.

Run from website/: python scripts/render-demo-receipts.py
Verify existing assets: python scripts/render-demo-receipts.py --check
No credentials, customer records, network or payment providers are used.
"""

import argparse
import json
import sys
from dataclasses import asdict
from io import BytesIO
from pathlib import Path

from PIL import Image

WEBSITE = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument("--backend-root", type=Path, default=WEBSITE.parent)
parser.add_argument("--check", action="store_true")
args = parser.parse_args()
BACKEND = args.backend_root.resolve()
sys.path.insert(0, str(BACKEND))

from services.receipt_adapter import build  # noqa: E402
from services.receipt_renderer import VERSION, render  # noqa: E402

OUTPUT = WEBSITE / "public" / "demo-receipts"
if not args.check:
    OUTPUT.mkdir(parents=True, exist_ok=True)
OWNER = "08000000000"
RECIPIENT = "08000000001"
DATE = "2026-09-18T08:41:00+00:00"


def transaction(service, amount, reference, **meta):
    return dict(
        type=service, amount=amount, fee=0, reference=reference,
        user_phone=OWNER, status="success", created_at=DATE, meta=meta,
    )


examples = {
    "send": (
        transaction("firstoption_pay", 500000, "DEMO-SEND-104", direction="outgoing"),
        dict(status="paid", creator_phone=RECIPIENT, payer_phone=OWNER,
             description="For Ada", paid_at=DATE, metadata={"flow": "send"}),
    ),
    "collect": (
        transaction("firstoption_pay", 2500000, "DEMO-ORDER-104", direction="incoming"),
        dict(status="paid", creator_phone=OWNER, payer_phone=RECIPIENT,
             description="Order 104", paid_at=DATE, metadata={"flow": "collect"}),
    ),
    "airtime": (
        transaction("airtime", 100000, "DEMO-AIRTIME-104", recharge_phone=OWNER, network_name="MTN"),
        None,
    ),
    "data": (
        transaction("data", 100000, "DEMO-DATA-104", data_phone=OWNER, network_name="MTN", plan_name="Example data plan"),
        None,
    ),
    "electricity": (
        transaction("electricity", 500000, "DEMO-BILL-104", meter_number="00000000001", customer_name="Ada Okafor", meter_type="Prepaid"),
        None,
    ),
}

manifest = {}
for name, (tx, intent) in examples.items():
    receipt = build(tx, phone=OWNER, contact="09060689011", intent=intent)
    artwork = Image.open(BytesIO(render(receipt)))
    # Lossless: preserve the original paper, type, logo and surrounding margins.
    target = OUTPUT / f"{name}.webp"
    if args.check:
        with Image.open(target) as saved:
            assert saved.size == artwork.size, f"{name}: receipt dimensions changed"
            assert saved.convert("RGB").tobytes() == artwork.convert("RGB").tobytes(), f"{name}: differs from actual renderer"
    else:
        artwork.save(target, format="WEBP", lossless=True, method=6)
    manifest[name] = dict(
        src=f"/demo-receipts/{name}.webp", width=artwork.width, height=artwork.height,
        renderer=VERSION, sample=True, receipt=asdict(receipt),
    )
    print(f"{name}: {artwork.width}x{artwork.height}")

serialized = json.loads(json.dumps(manifest))
if args.check:
    assert json.loads((OUTPUT / "manifest.json").read_text(encoding="utf-8")) == serialized, "Receipt metadata is out of date"
    print("PASS: all five website receipts exactly match the backend renderer.")
else:
    (OUTPUT / "manifest.json").write_text(json.dumps(manifest, indent=2, ensure_ascii=True) + "\n", encoding="utf-8")
