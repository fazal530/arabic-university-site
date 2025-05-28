(function ($, Drupal) {
	Drupal.behaviors.backgroundSlider = {
	  attach: function (context, settings) {
		$('[dir="rtl"] .background-slider', context).each(function () {
		  if (!$(this).hasClass('slick-initialized')) {
			$(this).slick({
			  autoplay: true,
			  autoplaySpeed: 4000,
			  arrows: true,
			  dots: true,
			  fade: true,
			  rtl: true,
			});
		  }
		});

		$('[dir="ltr"] .background-slider', context).each(function () {
			if (!$(this).hasClass('slick-initialized')) {
			  $(this).slick({
				autoplay: false,
				autoplaySpeed: 3000,
				arrows: true,
				dots: true,
				fade: true,
				ltr: true,
			  });
			}
		  });


	  }
	};
  })(jQuery, Drupal);
  