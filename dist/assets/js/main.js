$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})



// Font
$(document).ready(function () {
  WebFontConfig = {
    google: {
      families: ['Poppins:300,400,500,600,700', 'Roboto:400,500,700']
    }
  };
  (function () {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') + '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
});
// Menú fixed
// $(window).scroll(function () {
//   if ($(document).scrollTop() > 70 && ($(window).width() >= 768)) {
//     $('.navbar-fixed-js').addClass('fixed');
//     $('.nav-link').addClass('fixed-color');
//     $('.nav-top__header').addClass('nav-top__header--detele');
//     $("#iso").addClass('img-size').attr('src', 'assets/img/logo.jpeg').removeClass('scroll-up');

//   } else {
//     $('.navbar-fixed-js').removeClass('fixed');
//     $('.nav-link').removeClass('fixed-color');
//     $('.nav-top__header').removeClass('nav-top__header--detele');
//     $("#iso").removeClass('img-size').attr('src', 'assets/img/logo.jpeg').removeClass('scroll-up');

//   }
// });