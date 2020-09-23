importScripts("/precache-manifest.ef84b0aff02de8d48e27f76acbe38cf8.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// This code listens for the user's confirmation to update the app.
self.addEventListener('message', (e) => {
    if (!e.data) {
        return;
    }

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

    const options = {
        body: data.body,
        icon: '/img/icons/android-chrome-192x192.png',
        image: '/img/icons/android-chrome-192x192.png',
        vibrate: [300, 200, 300],
        badge: '/img/icons/android-chrome-192x192.png',
    }

    e.waitUntil(self.registration.showNotification(data.title, options))
})
