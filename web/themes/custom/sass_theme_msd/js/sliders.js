(function ($, Drupal) {
	Drupal.behaviors.backgroundSlider = {
	  attach: function (context, settings) {
		$('.background-slider', context).each(function () {
		  if (!$(this).hasClass('slick-initialized')) {
			$(this).slick({
			  autoplay: false,
			  autoplaySpeed: 1000,
			  arrows: true,
			  dots: true,
			  fade: true,
			});
		  }
		});
	  }
	};
  })(jQuery, Drupal);
  