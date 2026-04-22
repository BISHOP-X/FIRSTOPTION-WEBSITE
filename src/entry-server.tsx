import { renderToString } from 'react-dom/server'
import App from './App'

export function render(url: string) {
  const target = new URL(url, 'https://www.thefirstoption.com.ng')
  return renderToString(
    <App initialPath={target.pathname} initialSearch={target.search} />,
  )
}