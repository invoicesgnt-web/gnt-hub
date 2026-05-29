const CACHE_NAME = 'gnt-hub-v1';

self.addEventListener('install', function(event) {
  self.skipWaiting();
});

self.addEventListener('activate', function(event) {
  event.waitUntil(clients.claim());
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    fetch(event.request).catch(function() {
      if (event.request.mode === 'navigate') {
        return new Response(
          '<html><body style="background:#1a237e;color:white;font-family:sans-serif;display:flex;justify-content:center;align-items:center;height:100vh;text-align:center"><div><p style="font-size:48px">📡</p><h2>Sem ligação</h2><p>Verifica a internet e tenta novamente.</p></div></body></html>',
          { headers: { 'Content-Type': 'text/html' } }
        );
      }
    })
  );
});
