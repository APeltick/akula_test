import Swiper from 'swiper';

const responseControl = function () {
    if ( window.innerWidth > 992 ) {
        this.autoplay.start();
    }
    if ( window.innerWidth < 992 ) {
        this.autoplay.stop();
    }
};

const toursSlider = new Swiper('.hero__slider .swiper-container', {
    slidesPerView: 1,
    lazy: true,
    loadPrevNext: true,
    loadOnTransitionStart: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    on: {
        resize: responseControl,
        init: responseControl
    }
});

