
( () => {

	let resizeTimeout = null,
		windowWidthOLd = window.innerWidth;

	window.addEventListener("resize", () => {

		window.requestAnimationFrame( () => {

			if (!resizeTimeout) {

				resizeTimeout = setTimeout( () => {

					resizeTimeout = null;

					if(windowWidthOLd !== window.innerWidth) {

						windowWidthOLd = window.innerWidth;

						PubSub.publish('windowWidthResize');

					}

				}, 100);

			}

		});

	});

	// btn header

	document.addEventListener('click', event => {

		if(event.target.closest('.btn-menu-toggle')) {

			document.body.classList.toggle('menu-show');

		}

		if(event.target.closest('.menu__link')) {

			let href = event.target.closest('.menu__link').getAttribute('href');

			href = href.split('#');

			if(document.querySelector('#'+href[1])) {

				document.body.classList.remove('menu-show');

			}

		}

	});

})();