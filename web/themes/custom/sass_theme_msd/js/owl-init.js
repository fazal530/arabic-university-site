(function ($, Drupal, once) {
  Drupal.behaviors.owlCarouselInit = {
    attach: function (context, settings) {
      once('owlCarouselInit', '.background-slider.owl-carousel', context).forEach(function (el) {
        $(el).owlCarousel({
          loop: true,
          items: 1,
          autoplay: true,
          autoplayTimeout: 5000,
          dots: true,
          autoplayHoverPause: true
        });
      });
    }
  };
})(jQuery, Drupal, once);
