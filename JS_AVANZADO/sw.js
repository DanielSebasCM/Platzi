self.addEventListener('install', event => {
  event.waitUntil(precache());
});

async function precache() {
  const cache = await caches.open('v1');
  return cache.addAll([
    '/',
    '/index.html',
    '/assets/index.js',
    '/assets/MediaPlayer.mjs',
    '/assets/plugins/AutoPlay.mjs',
    '/assets/plugins/AutoPause.mjs',
    '/assets/index.css',
    '/assets/BigBuckBunny.mp4',
  ])
}

async function cacheResponse(request) {
  const cache = await caches.open('v1');
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open('v1');
  const response = await fetch(request);
  return cache.put(request, response);
}

self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') {
    return;
  }

  event.respondWith(cacheResponse(request));

  event.waitUntil(updateCache(request));
});