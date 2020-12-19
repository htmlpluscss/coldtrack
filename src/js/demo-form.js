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

	// accordion table

	form.addEventListener('click', event => {

		if(event.target.closest('.demo-table__open')) {

			event.target.closest('tr').classList.toggle('is-open');

		}

	});

})(document.querySelector('.demo-form'));