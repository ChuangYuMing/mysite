importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js'
)

workbox.routing.registerRoute(
  ({ request }) => request.destination === 'document',
  new workbox.strategies.NetworkFirst()
)

workbox.routing.registerRoute(
  new RegExp('.*.(js|css)'),
  new workbox.strategies.NetworkFirst()
)

workbox.routing.registerRoute(
  new RegExp('.*.(jpg|png)'),
  new workbox.strategies.NetworkFirst()
)
