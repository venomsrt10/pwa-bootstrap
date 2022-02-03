self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('v1').then(function(cache) {
      return cache.addAll([
          'index.html',
          'index.js',
          'icone-192x192.png',
          'icone-256x256.png',
          'icone-384x384.png',
          'icone-512x512.png',
          'img/911.jpg',
          'img/FerrariBR20.jpg',
          'img/urus.jpg',
          'bootstrap-5.1.3-dist/css/bootstrap.min.css',
          'icons-1.7.2/font/bootstrap-icons.css',
          'bootstrap-5.1.3-dist/js/bootstrap.bundle.min.js'
      ]);
    })
  );
});


self.addEventListener('fetch', (event) => {
  event.respondWith( caches.match(event.request).then((response) => {
    if (response !== undefined) {
      return response;
    } 
    else {
      return fetch(event.request).then(function (response) {
        let responseClone = response.clone();

        caches.open('v1').then(function (cache) {
          cache.put(event.request, responseClone);
        });

        return response;
      });
    }
  }));
});

this.addEventListener('activate', (e) => {
});

