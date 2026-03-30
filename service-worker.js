const CACHE_VERSION = 'gtcp-v1.0.0';
const CACHE_URLS = ['./', './index.html', './manifest.json'];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_VERSION).then((cache) => cache.addAll(CACHE_URLS)));
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(caches.keys().then((keys) => 
        Promise.all(keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key)))
    ));
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        fetch(event.request)
            .then(response => {
                if (response.status === 200) caches.open(CACHE_VERSION).then(cache => cache.put(event.request, response.clone()));
                return response;
            })
            .catch(() => caches.match(event.request).then(response => response || caches.match('./index.html')))
    );
});
