import { GA_ID } from '../constant'

export function sendPageView(title = 'childben') {
  let gaId = PRODUCTION ? GA_ID : 'UA-00000000-1'

  gtag('config', gaId, {
    page_path: window.location.pathname,
    page_title: title,
    page_location: window.location.href
  })
}
