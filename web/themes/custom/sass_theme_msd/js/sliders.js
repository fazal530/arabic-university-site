(function ($, Drupal) {
	Drupal.behaviors.backgroundSlider = {
	  attach: function (context, settings) {
		$('.background-slider', context).each(function () {
		  if (!$(this).hasClass('slick-initialized')) {
			$(this).slick({
			  autoplay: true,
			  autoplaySpeed: 3000,
			  arrows: true,
			  dots: true,
			  fade: true,
			});
		  }
		});
	  }
	};
  })(jQuery, Drupal);
  