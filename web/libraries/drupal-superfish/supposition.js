/*
 * Supposition v0.2 - an optional enhancer for Superfish jQuery menu widget.
 *
 * Copyright (c) 2008 Joel Birch - based mostly on work by Jesse Klaasse and credit goes largely to him.
 * Special thanks to Karl Swedberg for valuable input.
 *
 * Dual licensed under the MIT and GPL licenses:
 *  http://www.opensource.org/licenses/mit-license.php
 *  http://www.gnu.org/licenses/gpl.html
 */
/*
 * This is not the original jQuery Supposition plugin.
 * Please refer to the README for more information.
 */

(function($){
  $.fn.supposition = function(){
    var $w = $(window); /*do this once instead of every onBeforeShow call*/

    var _offset = function(dir) {
      return window[dir == 'y' ? 'pageYOffset' : 'pageXOffset']
      || document.documentElement && document.documentElement[dir == 'y' ? 'scrollTop' : 'scrollLeft']
      || document.body[dir == 'y' ? 'scrollTop' : 'scrollLeft'];
    };

    var onHide = function(){
      this.css({bottom:''});
    };

    var onBeforeShow = function(){
      this.each(function(){
        var $u = $(this);
        $u.css('display','block');
        var $mul = $u.closest('.sf-menu');
        var level = $u.parents('ul').length;
        var menuWidth = $u.width();
        var menuParentWidth = $u.closest('li').outerWidth(true);
        var menuParentLeft = $u.closest('li').offset().left;
        var totalRight = $w.width() + _offset('x');
        var menuRight = $u.offset().left + menuWidth;
        var exactMenuWidth = menuRight > (menuParentWidth + menuParentLeft) ? menuWidth - (menuRight - (menuParentWidth + menuParentLeft)) : menuWidth;

        if ($u.parents('.sf-js-enabled').hasClass('rtl')) {
          if (menuParentLeft < exactMenuWidth) {
            if ($mul.hasClass('sf-horizontal') && level == 1 || $mul.hasClass('sf-navbar') && level == 2){
              $u.css({left: 0, right: 'auto'});
            }
            else {
              $u.css({left: menuParentWidth + 'px', right: 'auto'});
            }
            $u.parent().addClass('sf-supposition-active');
          }
        }
        else {
          if (menuRight > totalRight && menuParentLeft > menuWidth) {
            if ($mul.hasClass('sf-horizontal') && level == 1 || $mul.hasClass('sf-navbar') && level == 2){
              $u.css({right: 0, left: 'auto'});
            }
            else {
              $u.css({right: menuParentWidth + 'px', left: 'auto'});
            }
            $u.parent().addClass('sf-supposition-active');
          }
        }

        var windowHeight = $w.height();
        var offsetTop = $u.offset().top;
        var menuParentShadow = $mul.hasClass('sf-shadow') && $u.css('padding-bottom').length > 0 ? parseInt($u.css('padding-bottom').slice(0,-2)) : 0;
        var menuParentHeight = $mul.hasClass('sf-vertical') ? '-' + menuParentShadow : $u.parent().outerHeight(true) - menuParentShadow;
        var menuHeight = $u.height();
        var baseline = windowHeight + _offset('y');
        var expandUp = (offsetTop + menuHeight > baseline) && (offsetTop > menuHeight);
        if (expandUp) {
          $u.css({bottom:menuParentHeight + 'px',top:'auto'});
        }
        $u.css('display','none');
      });
    };

    return this.each(function() {
      var options = $.fn.superfish.optionsList[this.serial]; /* get this menu's options */

      /* if callbacks already set, store them */
      var _onBeforeShow = options.onBeforeShow;
      var _onHide = options.onHide;

      $.extend($.fn.superfish.optionsList[this.serial],{
        onBeforeShow: function() {
          onBeforeShow.call(this); /* fire our Supposition callback */
          _onBeforeShow.call(this); /* fire stored callbacks */
        },
        onHide: function() {
          onHide.call(this); /* fire our Supposition callback */
          _onHide.call(this); /* fire stored callbacks */
        }
      });
    });
  };
})(jQuery);
