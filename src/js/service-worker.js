const VERSION = '1.1.8';

console.log('Service worker version: ', VERSION);

self.addEventListener('message', function (event) {

  // console.log(event.data.action);

  if (event.data.action === 'skipWaiting') {

    self.skipWaiting();
  }
});