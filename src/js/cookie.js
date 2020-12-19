( cookie => {

	if(cookie && Cookies.get('YourPrivacy') !== 'Accept') {

		cookie.classList.remove('hide');

		cookie.addEventListener('submit', event => {

			event.preventDefault();

			Cookies.set('YourPrivacy', 'Accept');

			cookie.classList.add('hide');

		});

	}

})(document.querySelector('.cookie'));