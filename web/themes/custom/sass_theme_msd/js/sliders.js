(function ($, Drupal) {
	Drupal.behaviors.backgroundSlider = {
	  attach: function (context, settings) {
		$('.background-sliders', context).each(function () {
		  if (!$(this).hasClass('slick-initialized')) {
			$(this).slick({
			  autoplay: true,
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
  