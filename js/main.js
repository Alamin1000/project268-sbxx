(function ($) {
  "use strict";

  var wind = $(window);
  var sticky = $("#sticky-header");
  wind.on("scroll", function () {
    var scroll = wind.scrollTop();
    if (scroll < 20) {
      sticky.removeClass("sticky");
    } else {
      sticky.addClass("sticky");
    }
  });
  $(window).on("load resize", function () {
    $(".header-section").height($(".header-in").outerHeight());
    $("body").css("--header-height", $(".header-in").outerHeight() + "px");
  });

  // offcanvas-js
  $(".offcanvas-open").click(function () {
    $(".offcanvas-menu").addClass("active");
    $(".offcanvas-overlay").addClass("active");
  });
  $(".offcanvas-menu a").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(".close-offcanvas").click(function () {
    $(".offcanvas-menu").removeClass("active");
    $(".offcanvas-overlay").removeClass("active");
  });
  $(document).mouseup(function (e) {
    var container = $(".offmenu");

    // If the target of the click isn't the container
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $(".offcanvas-menu").removeClass("active");
      $(".offcanvas-overlay").removeClass("active");
    }
  });

  // owl-carousel
  $(".more-slider-active").owlCarousel({
    loop: true,
    margin: 12,
    responsiveClass: true,
    autoWidth: true,
    dots: false,
    nav: false,
    navText: [
      '<span class="fas fa-chevron-left fa-2x"></span>',
      '<span class="fas fa-chevron-right fa-2x"></span>',
    ],
    responsive: {
      0: {
        margin: 10,
      },
      1199: {
        margin: 20,
        // loop: false,
      },
    },
  });

  $(window).on("load resize", function () {
    $(".footer-section").height($(".footer-in").outerHeight());
    $("body").css("--footer-height", $(".footer-in").outerHeight() + "px");
  });
})(jQuery);

$(document).ready(function () {
  // preloader
  $("#preloader").fadeOut(500);
});
