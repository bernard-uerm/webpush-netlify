importScripts("/precache-manifest.b2b691e3f41fa353064bbde8a2decc8a.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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

self.addEventListener('install', event => {
  self.skipWaiting();

  event.waitUntil(
    console.log('here')
  );
});

// Listen to Push
self.addEventListener('push', (e) => {
  let data
  if (e.data) {
    data = e.data.json()
  }
  console.log(e)
  console.log(data)
  const options = {
    body: "UERM E-Triage: An employee is tagged for COVID-ER, please check your dashboard for details.",
    icon: '/img/icons/android-chrome-192x192.png',
    image: '/img/icons/android-chrome-192x192.png',
    vibrate: [300, 200, 300],
    badge: '/img/icons/android-chrome-192x192.png',
  }

  e.waitUntil(self.registration.showNotification('UERM ETriage', options))
})

// self.addEventListener('push', function (event) {
//   event.waitUntil(
//     getEndpoint()
//       .then(function (endpoint) {
      
//     return fetch('https://localhost:3443/getPayload?endpoint=' + endpoint);
//       })
//       .then(function (response) {
//         return response.text();
//       })
//       .then(function (payload) {
        
//           self.registration.showNotification('ServiceWorker Cookbook', {
//             body: payload,
//           });
//       })
//   );
// });
