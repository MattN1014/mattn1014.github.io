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

//Set the .active class for menu
$('.navbar li').click(function(e) {
    $('.navbar li.active').removeClass('active');
    var $this = $(this);
    if (!$this.hasClass('active')) {
        $this.addClass('active');
    }
    e.preventDefault();
});

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
