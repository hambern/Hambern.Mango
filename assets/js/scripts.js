$(document).ready(function() {
    new WOW().init();
    plyr.setup();
    smoothScroll.init();
    gumshoe.init();
    $('.image-link').magnificPopup({type: 'image'});
    $('.slick-carousel').slick();
});
