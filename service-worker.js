importScripts("/precache-manifest.b10465728a1e4e38d8dd17f0c8d87061.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// custom service-worker.js
if (workbox) {
  // apply precaching. In the built version, the precacheManifest will
  // be imported using importScripts (as is workbox itself) and we can 
  // precache this. This is all we need for precaching
  workbox.precaching.precacheAndRoute(self.__precacheManifest);

  // Make sure to return a specific response for all navigation requests.
  // Since we have a SPA here, this should be index.html always.
  // https://stackoverflow.com/questions/49963982/vue-router-history-mode-with-pwa-in-offline-mode
  workbox.routing.registerNavigationRoute('/index.html')

  // Setup cache strategy for Google Fonts. They consist of two parts, a static one
  // coming from fonts.gstatic.com (strategy CacheFirst) and a more ferquently updated on
  // from fonts.googleapis.com. Hence, split in two registerroutes
}

// This code listens for the user's confirmation to update the app.
self.addEventListener('message', (e) => {
  if (!e.data) {
    return;
  }
  console.log(e)
  switch (e.data) {
    case 'skipWaiting':
      self.skipWaiting();
      break;
    default:
      // NOOP

      break;
  }
})

// Listen to Push
self.addEventListener('push', (e) => {
  let data
  if (e.data) {
    data = e.data.json()
  }
  console.log(e)
  console.log(data)
  const options = {
    body: "UERM ETriage Covid ER",
    icon: '/img/icons/android-chrome-192x192.png',
    image: '/img/icons/android-chrome-192x192.png',
    vibrate: [300, 200, 300],
    badge: '/img/icons/android-chrome-192x192.png',
  }

  e.waitUntil(self.registration.showNotification('UERM ETriage', options))
})

