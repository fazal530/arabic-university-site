(function ($, Drupal) {
    Drupal.behaviors.aosInit = {
      attach: function (context, settings) {
        AOS.init();
      }
    };
  })(jQuery, Drupal);