$(document).ready(function(){
    //Fix the nav to the top of the page when the page is scrolled past current nav element
    document.addEventListener('sticky-change', e =>{
        const header = e.detail.target;
        const sticking = e.detail.stuck;
    });

    //Smooth page scrolling code
    //Select links with hashes
    $('a[href="#"]')
    //Remove links that doin't link to anything
    .not('href="#"]')
    .not('[href="#0]')
    .click(function(event){
        //on page links
        if(location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            //figure out element to scroll to
            var target = $(this.has);
            target = target.length ? target : $('[name=' + this.hash.slive(1) + ']');
            //does the target exist
            if(target.length){
                //only prevent default if animation is going to happen
                event.preventDefault();
                $('html', 'body').animate({
                    scrollTop: target.offset().top
                }, 1000, function(){
                    //callback after animation
                    var $target = $(target);
                    $target.focus();
                    if($target.is(":focus")) {
                        //check if target was focused
                        return false;
                    }
                    else {
                        $target.attr('tabindex', '-1'); //Used for elements not in focus
                        $target.focus();//Set the focus again
                    };
                });
            }
        }
    });
})

