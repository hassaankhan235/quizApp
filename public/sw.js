let cahcheData = 'QuizApp';

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cahcheData).then((data) => {
      data.addAll([
        'index.html',
        '/',
        '/static/js/bundle.js',
        '/static/js/0.chunk.js',
        '/static/js/main.chunk.js',
        '/manifest.json',
        'static / media / stopwatch.9fb404c9.png',
      ])
    }).catch((err) => {
      console.log('err', err)
    })
  )
})



this.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }


        return fetch(event.request);
      }
      )
  );
});