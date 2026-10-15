const CACHE_NAME = 'vasoactivos-uci-v10';
const ASSETS_TO_CACHE = [
  '/vasoactivos/',
  '/vasoactivos/index.html',
  '/vasoactivos/styles.css',
  '/vasoactivos/app.js',
  '/vasoactivos/manifest.json',
  '/vasoactivos/icon.svg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  // Las llamadas a Netlify Functions / API no deben pasar por la caché del Service Worker
  if (event.request.url.includes('/.netlify/functions/') || event.request.url.includes('/api/')) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // Retornar la página principal si está offline
        if (event.request.mode === 'navigate') {
          return caches.match('/vasoactivos/') || caches.match('/vasoactivos/index.html');
        }
      });
    })
  );
});
