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
				autoplaySpeed: 3000,
				speed: 600,
				dots: false,
				arrows: false,
				rtl: true,
				responsive: [
				  {
					breakpoint: 768,
					settings: {
					  slidesToShow: 1
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
				  autoplaySpeed: 3000,
				  speed: 600,
				  dots: false,
				  arrows: false,
				  ltr: true,
				  responsive: [
					{
					  breakpoint: 768,
					  settings: {
						slidesToShow: 1
					  }
					}
				  ]
		  
			  });
			}
		  });
	  }
	};
  })(jQuery, Drupal);