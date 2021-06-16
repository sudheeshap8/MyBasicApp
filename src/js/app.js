window.isUpdateAvailable.then(isAvailable => {

  const elem = document.getElementById('update-status');
		
  if (isAvailable) {

    elem.textContent = 'YES';

    return;
	}

  elem.textContent = 'NO';
});

// The click event on the notification
document.getElementById('btn-reload').addEventListener('click', function(){

  myInstallingWorker.postMessage({ action: 'skipWaiting' });
});
