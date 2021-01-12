//service workers
self.addEventListener('install', function(event) {
    console.log('[Service worker] Installing Service worker .. ', event);
})
self.addEventListener('activate', function(event) {
    //make sure to load new tab when changing servirce workers
    console.log('[Service activate] Activating Service worker .. ', event);
    return self.clients.claim();
})
self.addEventListener('fetch', function(event) {
    console.log('[Service worker] Fetching something .. ');
    event.respondWith(fetch(event.request));
})