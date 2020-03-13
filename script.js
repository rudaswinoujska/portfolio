$(function() {
  $(".multiple-items").slick({
    infinite: true,

    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3
  });
});

$(document).ready(function() {
  $(window).scroll(function(){
  if ($(this).scrollTop() > 800) { 
  $('#scroll-top').fadeIn(); 
  } else { 
  $('#scroll-top').fadeOut(); } 
  });
  $('#scroll-top').click(function(){
  $("html, body").animate({ scrollTop: 0 }, 500);
  return false;
  });
  });