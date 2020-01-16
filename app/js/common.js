$(function() {
   
   /*  mobile menu toggle  */   
  /* $("#navToggle").click(function() {
      $(this).toggleClass("active");
      $(".header__menu").toggleClass("open");
      $("body").toggleClass("locked");
   });*/
   
   /* menu items bottom-border on hover */   
   $('.header__menu-item a').on('mouseenter', function () {
      $('.header__menu-item a').removeClass('active')
      $(this).addClass('active')
   }).on('mouseleave', function () {
      $('.header__menu-item a').removeClass('active').first().addClass('active')
   }) 
});
