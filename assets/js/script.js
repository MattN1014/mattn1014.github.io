//Change header color on scroll 
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 10) {
            $(".header-inner").addClass("scrolled");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".header-inner").removeClass("scrolled");
        }
    });
});

//Showcase Counter
$('#showcase').ready(function(){
    $('.websites').animationCounter({
      start: 0,
      step: 1,
      delay: 600
    });
    $('.code').animationCounter({
      start: 0,
      step: 10,
      delay: 400
    });
    $('.hosted').animationCounter({
      start: 0,
      step: 1,
	  end: 60,
      delay: 1200
    });
    $('.clients').animationCounter({
      start: 0,
      step: 1,
      end: 30,
      delay: 1500
    });
});

//Testimonails Carousel
$(document).ready(function(){
     $("#tm-carousel").carousel({
         interval : 8000,
         pause: false
     });
});
