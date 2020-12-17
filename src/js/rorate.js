( elems => {

	if(elems.length) {

		if ('IntersectionObserver' in window) {

			const options = {
				root: null,
				rootMargin: '0px',
				threshold: [0.01]
			};

			const callback = (entries, observer) => {

				Array.from(entries, entry => {

					console.log(entry)

				});

			};

			const observer = new IntersectionObserver(callback, options);

			observer.observe(elems);

		}

	}

})(document.querySelectorAll('.rotate'));