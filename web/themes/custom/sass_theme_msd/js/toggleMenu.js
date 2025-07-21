(function ($, Drupal) {
	Drupal.behaviors.collegeMenuFix = {
	  attach: function (context, settings) {
		setTimeout(function () {
		  $('.college-content .college-menu .sf-accordion-toggle.sf-style-none + ul', context)
			.removeClass('sf-hidden')
			.addClass('sf-expanded')
			.css('display', 'block');
		}, 50); // delay to allow Superfish to finish
	  }
	};
  })(jQuery, Drupal);
  