$(document).ready(function() {
    new WOW().init();
    plyr.setup();
    smoothScroll.init();
    $('.image-link').magnificPopup({type: 'image'});
    $('.slick-carousel').slick();
});