//Smooth Page Scrolling Function
$(function(){
	$('.page-scroll a').bind('click', function(){
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1000, 'easeInOutExpo');
		event.preventDefault();
	});
});

//Change header color on scroll 
$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 100) {
            $("header").addClass("scrolled");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $("header").removeClass("scrolled");
        }
    });
});

//Change the menu button FA on click


//Showcase Counter
$('#showcase').ready(function(){
    $('.websites').animationCounter({
      start: 0,
      step: 1,
      delay:400
    });
    $('.code').animationCounter({
      start: 0,
      step: 10,
      delay: 400
    });
    $('.hosted').animationCounter({
      start: 0,
      step: 1,
	  end: 500,
      delay: 800
    });
    $('.clients').animationCounter({
      start: 0,
      step: 1,
      delay: 1000
    });
});

//Testimonails Carousel
$(document).ready(function(){
     $("#tm-carousel").carousel({
         interval : 8000,
         pause: false
     });
});
