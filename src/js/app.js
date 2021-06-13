console.log('ABC...');

window.isUpdateAvailable.then(isAvailable => {

  const elem = document.getElementById('update-status');
		
  if (isAvailable) {

    elem.textContent = 'YES';

    return;
	}

  elem.textContent = 'NO';
});