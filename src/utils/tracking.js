import { GA_ID } from '../constant'

export function sendPageView(title = 'childben') {
  let gaId = PRODUCTION ? GA_ID : 'UA-00000000-1'

  window.gtag('config', gaId, {
    page_path: window.location.pathname,
    page_title: title,
    page_location: window.location.href
  })
}

export function sendTrackEvent({
  category,
  action,
  label,
  value,
  nonInteraction = true
}) {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    non_interaction: nonInteraction
  })
}
