'use strict';

(function () {
  var Navigation = (function () {
    var config = {
      nav: $('#mainNavigation'),
      openTrigger: $('#openMainNavigation'),
      closeTrigger: $('#closeMainNavigation'),
      desktopBreakpoint: 992,
      win: $(window),
      backdrop: $('<div />', {
        class: 'backdrop'
      })
    };

    var open = function (e) {
      e.preventDefault();

      // avoiding possible issues by making sure the navigation reacts to the click event only on mobile
      if (config.win.width() <= config.desktopBreakpoint) {
        // add the backdrop
        config.backdrop.hide().appendTo('body').fadeIn(300);

        // once the backdrop got added to the DOM, attach a click event to it to close the navigation
        config.backdrop.on('click', function () {
          close();
        });

        // open the navigation
        config.nav.addClass('show');

        // disable body scroll
        $('body').addClass('scroll-disabled');
      }
    };

    var close = function () {
      // enable the scroll back
      $('body').removeClass('scroll-disabled');

      // close the navigation
      config.nav.removeClass('show');

      // remove the backdrop
      config.backdrop.remove();
    };

    var init = function () {
      // attach click event to the navigation's open button
      config.openTrigger.on('click', function (e) {
        open(e);
      });

      // attach click event to the navigation's close button
      config.closeTrigger.on('click', function () {
        close();
      });

      // when window gets resized over the desktopBreakpoint and the navigation is open, close the navigation
      config.win.on('resize', function () {
        if (config.win.width() > config.desktopBreakpoint && config.nav.hasClass('show')) {
          close();
        }
      });
    };

    return {
      init: init
    };
  })();

  Navigation.init();
})();
