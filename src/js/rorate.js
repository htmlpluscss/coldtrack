( elems => {

	if(elems.length) {

		window.addEventListener("scroll", () => {

			window.requestAnimationFrame( () => {

				Array.from(elems, el => {

					let deg = 0;
					const rect = el.getBoundingClientRect();

					if (rect.bottom >= 0 && rect.top <= window.innerHeight){

						deg = 360 * ( 1 - rect.bottom / (rect.bottom - rect.top + window.innerHeight) );

					}

					console.log(deg)

					el.querySelector('img').style.transform = "rotate(" + deg + "deg)";

				});

			});

		});

	}

})(document.querySelectorAll('.rotate'));