$(document).ready(function () {
    $('.video-slider-container').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 300,
        easing: 'linear',
        infinite: false,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        pauseOnHover: true,
        draggable: false,
        swipe: true,
        //touchThreshold: 0,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: true,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
        appendArrows: $('.video-arrow-wrapper'),
        nextArrow: '#arrow-next',
        prevArrow: '#arrow-prev',
    });
});

$(document).ready(function () {
    $('.feedback-slider-container').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 300,
        easing: 'linear',
        infinite: false,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        pauseOnHover: true,
        draggable: false,
        swipe: true,
        //touchThreshold: 0,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: true,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
        appendArrows: $('.video-arrow-wrapper'),
        nextArrow: '#arrow-feedback-next',
        prevArrow: '#arrow-feedback-prev',
    });
});


$(document).ready(function () {
    $('.gallery-slider-container').slick({
        arrows: true,
        dots: false,
        adaptiveHeight: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 300,
        easing: 'linear',
        infinite: false,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnDotsHover: true,
        pauseOnHover: true,
        draggable: false,
        swipe: true,
        //touchThreshold: 0,
        touchMove: true,
        waitForAnimate: true,
        centerMode: false,
        variableWidth: true,
        rows: 1,
        slidesPerRow: 1,
        vertical: false,
        verticalSwiping: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],
        appendArrows: $('.video-arrow-wrapper'),
        nextArrow: '#arrow-galery-next',
        prevArrow: '#arrow-galery-prev',
    });
});