/*
	Photon by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:   [ '1141px',  '1680px' ],
			large:    [ '981px',   '1140px' ],
			medium:   [ '737px',   '980px'  ],
			small:    [ '481px',   '736px'  ],
			xsmall:   [ '321px',   '480px'  ],
			xxsmall:  [ null,      '320px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Scrolly.
		$('.scrolly').scrolly();

})(jQuery);

//Fade in from below
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('showup');
		} else {
			entry.target.classList.remove('showup');
		}
	});
});

// Updated selector to target `.softfadeup` instead of `.hidden`
const softFadeUp = document.querySelectorAll('.softfadeup');

softFadeUp.forEach((el) => observer.observe(el));


//Fade in from left
const observer2 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry.target, entry.isIntersecting); // Debugging
		if (entry.isIntersecting) {
			entry.target.classList.add('showright');
		} else {
			entry.target.classList.remove('showright');
		}
	});
});

// Update the selector to target `.faderight`
const fadeRight = document.querySelectorAll('.faderight');

fadeRight.forEach((el) => observer2.observe(el));

// Observer for `.faderight2`
const observer3 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('showright');
		} else {
			entry.target.classList.remove('showright');
		}
	});
});
const fadeRight2 = document.querySelectorAll('.faderight2');
fadeRight2.forEach((el) => observer3.observe(el));

// Observer for `.faderight3`
const observer4 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.classList.add('showright');
		} else {
			entry.target.classList.remove('showright');
		}
	});
});
const fadeRight3 = document.querySelectorAll('.faderight3');
fadeRight3.forEach((el) => observer4.observe(el));

//Fade in from right
const observer5 = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		console.log(entry.target, entry.isIntersecting); // Debugging
		if (entry.isIntersecting) {
			entry.target.classList.add('showright');
		} else {
			entry.target.classList.remove('showright');
		}
	});
});

// Update the selector to target `.faderight`
const fadeLeft = document.querySelectorAll('.fadeleft');

fadeLeft.forEach((el) => observer5.observe(el));
