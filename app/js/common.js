$(function() {
   
   /*  mobile menu toggle  */   
   $("#navToggle").click(function() {
      $(this).toggleClass("active");
      $(".header__menu").toggleClass("open");
      $("body").toggleClass("locked");
   });
   
   /* menu items bottom-border on hover */   
   $('.header__menu-item a').on('mouseenter', function () {
      $('.header__menu-item a').removeClass('active')
      $(this).addClass('active')
   }).on('mouseleave', function () {
      $('.header__menu-item a').removeClass('active').first().addClass('active')
   })
   
   /* animation on block appear*/   
   $(window).on("load", function() {
      $("#main-right").removeClass('mr1000')
      $("#main-left").removeClass('ml1000')     
   });  
});
