(function ($, Drupal) {
	Drupal.behaviors.backgroundSlider = {
	  attach: function (context, settings) {
		// RTL sliders
		$('[dir="rtl"] .background-slider', context).each(function () {
		  if (!$(this).hasClass('slick-initialized')) {
			$(this).slick({
			  autoplay: true,
			  autoplaySpeed: 4000,
			  arrows: true,
			  dots: true,
			  fade: true,
			  rtl: true
			});
		  }
		});
  
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
				slidesToShow: 3,
				slidesToScroll: 1,
				infinite: true,
				autoplay: true,
				autoplaySpeed: 1000,
				speed: 600,
				dots: false,
				arrows: false,
				rtl: true,
				responsive: [
					{
					  breakpoint: 1024,   // below 1024px (tablet)
					  settings: {
						slidesToShow: 2   // show 2 slides on tablet
					  }
					},
					{
					  breakpoint: 768,    // below 768px (mobile)
					  settings: {
						slidesToShow: 1   // show 1 slide on mobile
					  }
					}
				  ]
		
			});
		  }
		});
		$('[dir="ltr"] .make-carosel', context).each(function () {
			if (!$(this).hasClass('slick-initialized')) {
			  $(this).slick({
				  slidesToShow: 3,
				  slidesToScroll: 1,
				  infinite: true,
				  autoplay: true,
				  autoplaySpeed: 1000,
				  speed: 600,
				  dots: false,
				  arrows: false,
				  ltr: true,
				  responsive: [
					{
					  breakpoint: 1024,   // below 1024px (tablet)
					  settings: {
						slidesToShow: 2   // show 2 slides on tablet
					  }
					},
					{
					  breakpoint: 768,    // below 768px (mobile)
					  settings: {
						slidesToShow: 1   // show 1 slide on mobile
					  }
					}
				  ]
		  
			  });
			}
		  });
	  }
	};
  })(jQuery, Drupal);