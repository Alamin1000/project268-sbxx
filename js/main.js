(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
  });


  $('input[type="checkbox"]').closest('label').css('cursor','pointer');
  $('input[type="radio"]').closest('label').css('cursor','pointer');
  

        // owl-carousel
        $('.brand-active').owlCarousel({
          loop:true,
          margin:50,
          responsiveClass:true,
          nav:false,
          navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
          responsive:{
              0:{
                  items:1,
                  nav:false
              },
              600:{
                  items:3,
                  nav:false
              },
              1000:{
                  items:4,
                  nav:false,
                  loop:false
              }
          }
        });

        //magnificPopup
        $('.popup-img').magnificPopup({
          type: 'image'
        });
        $('.popup-video').magnificPopup({
        type: 'iframe'
        });
        // magnific-popup-img-gallery
        $('.album-img a').magnificPopup({
          type: 'image',
          gallery: {
            enabled: true,
          }
        });
        //multiple-img-gallery
        $('.image-box').each(function() { // the containers for all your galleries
          $(this).magnificPopup({
              delegate: '.img', // the selector for gallery item
              type: 'image',
              gallery: {
                enabled:true
              }
          });
        });


        

})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // nice-select
  $('.nice-select').niceSelect();

  // preloader
  $("#preloader").fadeOut(500);

})











