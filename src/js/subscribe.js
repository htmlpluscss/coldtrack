( forms => {

	if(!forms.length) {

		return;

	}

	const eventModalShow = new CustomEvent("modalShow", {
		detail: {
			selector: "done"
		}
	});

	window.readySubscribe = data => {

		console.log(data);

		const form = document.querySelector('.form-subscribe.is-send');

		form.reset();
		form.classList.remove('is-send');

		form.querySelector('.form-subscribe__submit').disabled = false;

		if(data.result === "success"){

		}

		if(data.result === "error"){

		}

		document.querySelector('#modal-done__messange').innerHTML = data.msg;

		document.querySelector('.modal').dispatchEvent(eventModalShow);

	};

	const getQueryString = formData => {

		let pairs = [];

		for (let [key, value] of formData.entries()) {

			pairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));

		}

		return pairs.join('&');

	}

	Array.from(forms, form => {

		form.addEventListener('submit', event => {

			event.preventDefault();

			let url = form.getAttribute('action');

			url = url.replace("/post?u=", "/post-json?u=");
			url = url + '&c=window.readySubscribe';
			url = url + '&' + getQueryString(new FormData(form));

			form.classList.add('is-send');
			form.querySelector('.form-subscribe__submit').disabled = true;

			const script = document.createElement('script');

			script.async = true;
			script.src = url;

			document.head.appendChild(script);

		});

	});

})(document.querySelectorAll('.form-subscribe'));