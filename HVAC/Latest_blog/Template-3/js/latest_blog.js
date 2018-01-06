$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        loop: true,
        margin: 30,
        autoplay: true,
        nav: true,
        dots: true,
        autoplaySpeed: 1000,
        pagination: true,
        navText: ['&#x2039', '&#x203a'],
        navContainer: ".navi",
        dotsContainer: ".dots",
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1170: {
                items: 2
            }
        }
    });

    var wow = new WOW({
        boxClass: 'wow', // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset: 0, // distance to the element when triggering the animation (default is 0)
        mobile: true, // trigger animations on mobile devices (default is true)
        live: true, // act on asynchronously loaded content (default is true)
        callback: function(box) {
            // the callback is fired every time an animation is started
            // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null // optional scroll container selector, otherwise use window
    });
    wow.init();
});