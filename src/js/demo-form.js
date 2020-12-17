( form => {

	if(!form) {

		return;

	}

	form.addEventListener('change', event => {

		if(event.target.classList.contains('demo-form__drop-input')) {

			if(event.target.value.length) {

				document.body.classList.add('uploading');
				form.classList.add('is-uploading');

			}

		}

	});

})(document.querySelector('.demo-form'));