jQuery(document).ready(function ($) {
    
  
    // Loop through each menu item that has a sub-indicator
    $('.college-menu .sf-menu li:has(.sf-sub-indicator)').each(function () {
      const $menuItem = $(this);
      const $link = $menuItem.children('a');
      const $indicator = $menuItem.find('.sf-sub-indicator');
  
      $link.on('click', function (e) {
        console.log('Link clicked');
          e.preventDefault();
          $indicator.toggleClass('rotate-flip');
          console.log('✅ rotate-flip');
      });
    });
  });
  