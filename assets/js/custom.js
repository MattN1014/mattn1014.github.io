$(document).ready(function(){

    //Sidebar functions
    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $('#content').toggleClass('active');
    });

    //Change button icon when clicked
    $("#sidebarCollapse").click(function(){
	    $(this).find("i").toggleClass("fa-bars fa-times");
    });
    
    //Ensure that the active class is being displayed on the menu
    $(".side-nav .side-nav-item").on("click", function(){
        $(".side-nav").find(".active").removeClass("active");
        $(this).addClass("active");
     });
     
    //Add active class to menu item when scrolled to designated section
    $(window).on('scroll', function() {
        $('section').each(function() {
            if($(window).scrollTop() >= $(this).position().top) {
                var id = $(this).attr('id');
                $('.side-nav li a').removeClass('active');
                $('.side-nav li a[href="#'+ id +'"]').addClass('active');
            }
        });
    });

    //Smooth page scrolling
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname){
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                    } 
                    else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    //enable Tooltips for site
    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    });
    
})