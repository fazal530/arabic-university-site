(function ($, Drupal) {
	Drupal.behaviors.backgroundSlider = {
		attach: function (context, settings) {
			// LTR background sliders
			$('[dir="ltr"] .background-slider', context).each(function () {
				if (!$(this).hasClass('slick-initialized')) {
					$(this).slick({
						autoplay: true,
						autoplaySpeed: 4000,
						arrows: true,
						dots: true,
						fade: true,
						rtl: false
					});
				}
			});

			// LTR make-carosel sliders
			$('[dir="rtl"] .make-carosel', context).each(function () {
				if (!$(this).hasClass('slick-initialized')) {
					$(this).slick({
						slidesToShow: 3,       // 👈 Number of slides (cards) shown at once
						slidesToScroll: 1,     // 👈 Number of slides to move when scrolling/clicking arrow
						arrows: true,          // 👈 Show previous/next arrows
						infinite: true,       // 👈 Loop back to first slide when reaching the end (false = no loop)
						autoplay: true,       // 👈 Automatically scroll through slides
						autoplaySpeed: 3000,   // 👈 Time between auto scrolls (ms), only works if autoplay is true
						speed: 500,   
						rtl: true,         // 👈 Transition speed (ms) between slides
					  
						responsive: [          // 👈 Media query breakpoints for responsiveness
						  {
							breakpoint: 1024,  // 👈 If screen is 1024px or less
							settings: {
							  slidesToShow: 2  // 👈 Show 2 slides
							}
						  },
						  {
							breakpoint: 780,   // 👈 If screen is 768px or less
							settings: {
							  slidesToShow: 1, // 👈 Show 1 slide
							  arrows: false    // 👈 Hide arrows on small screens
							}
						  }
						]

					});
				}
			});
			$('[dir="ltr"] .make-carosel', context).each(function () {
				if (!$(this).hasClass('slick-initialized')) {
					$(this).slick({
						slidesToShow: 3,       // 👈 Number of slides (cards) shown at once
						slidesToScroll: 1,     // 👈 Number of slides to move when scrolling/clicking arrow
						arrows: true,          // 👈 Show previous/next arrows
						infinite: true,       // 👈 Loop back to first slide when reaching the end (false = no loop)
						autoplay: true,       // 👈 Automatically scroll through slides
						autoplaySpeed: 3000,   // 👈 Time between auto scrolls (ms), only works if autoplay is true
						speed: 500,            // 👈 Transition speed (ms) between slides

						responsive: [          // 👈 Media query breakpoints for responsiveness
							{
								breakpoint: 1440,  // 👈 If screen is 1024px or less
								settings: {
									slidesToShow: 2  // 👈 Show 2 slides
								}
							},
							{
								breakpoint: 780,   // 👈 If screen is 768px or less
								settings: {
									slidesToShow: 1, // 👈 Show 1 slide
									arrows: false    // 👈 Hide arrows on small screens
								}
							}
						]

					});
				}
			});
		}
	};
})(jQuery, Drupal);