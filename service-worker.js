importScripts("/precache-manifest.c789dca2a6417967ffe4708e46d81302.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
        body: 'UERM ETriage Covid ER Notification',
        icon: '/img/icons/android-chrome-192x192.png',
        image: '/img/icons/android-chrome-192x192.png',
        vibrate: [300, 200, 300],
        badge: '/img/icons/android-chrome-192x192.png',
    }

    e.waitUntil(self.registration.showNotification('UERM ETriage', options))
})
