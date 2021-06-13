const VERSION = '1.0.6';

console.log('Service worker version: ', VERSION);

self.addEventListener('message', function (event) {

  // console.log(event.data.action);

  if (event.data.action === 'skipWaiting') {

    self.skipWaiting();
  }
});