const CACHE_NAME = "pwa-sales-v1";

const ASSETS = [
  "./",
  "./index.html",
  "./app.js",
  "./manifest.json",
  "./assets/css/tailwind.min.css",
  "./assets/js/lucide.min.js"
];

// INSTALACIÓN
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// ACTIVACIÓN
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => key !== CACHE_NAME && caches.delete(key))
      );
    })
  );
  self.clients.claim();
});

// FETCH (cache-first)
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return (
        cached ||
        fetch(event.request)
          .then((resp) => {
            // solo cachea GET
            if (event.request.method === "GET" && resp.ok) {
              const clone = resp.clone();
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, clone);
              });
            }
            return resp;
          })
          .catch(() => cached)
      );
    })
  );
});