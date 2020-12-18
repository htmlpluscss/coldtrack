( swiperContainer => {

	if(!swiperContainer.length) {

		return;

	}

	let swiperInit = window.Swiper;

	Array.from(swiperContainer, swipe => {

		let mySwipe = null,
			toggleSwipe = null,
			resetSwipe = null;

		const swipeNav = document.createElement('div'),
			items = swipe.querySelectorAll('.swiper-slide'),
			count = items.length,
			cases = swipe.classList.contains('swiper-container--cases');

		swipeNav.className = 'swiper-pagination';
		swipe.parentNode.appendChild(swipeNav);

		resetSwipe = () => {

			if(mySwipe) {

				mySwipe.destroy(false,true);
				mySwipe = undefined;

			}

			swipeNav.classList.add('hide');

		}

		resetSwipe();

		if (cases) {

			const current = document.querySelector('.cases__process-current');

			toggleSwipe = () => {

				resetSwipe();

				swipeNav.classList.remove('hide');
				current.parentNode.classList.add('hide');
				swipe.parentNode.classList.remove('swiper-container-style');

				if(window.innerWidth < 768) {

					swipe.parentNode.classList.add('swiper-container-style');
					current.parentNode.classList.remove('hide');

					mySwipe = new Swiper(swipe, {
						loop: true,
						autoHeight: true,
						pagination: {
							el: swipeNav,
							bulletClass: 'button',
							bulletActiveClass: 'is-active'
						},
						on: {
							slideChangeTransitionEnd: () => {
								current.textContent = (swipe.swiper.realIndex % count + 1);
							}
						}
					});

				}

			}

		}

		PubSub.subscribe('windowWidthResize', () => {

			if (window.Swiper && toggleSwipe) {

				toggleSwipe();

			}

		});

		if(window.Swiper && toggleSwipe) {

			toggleSwipe();

		}
		else {

			PubSub.subscribe('swiperJsLoad', toggleSwipe);

		}

		if(!swiperInit) {

			swiperInit = true;

			const script = document.createElement('script');

			script.async = true;
			script.src = '/js/swiper.min.js';

			script.onload = () => PubSub.publish('swiperJsLoad');

			setTimeout( () => document.head.appendChild(script), 1);

		}

	});

})(document.querySelectorAll('.swiper-container'));