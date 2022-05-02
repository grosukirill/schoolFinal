$(function() {
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 4,
        variableWidth: true,
        prevArrow: '<img src="images/arrow-left.svg" class="arrow arrow-left" alt="">',
        nextArrow: '<img src="images/arrow-right.svg" class="arrow arrow-right" alt="">',
        responsive: [{
            breakpoint: 321,
            settings: {
                variableWidth: false,
                slidesToShow: 1
            }
        }]
    });
});