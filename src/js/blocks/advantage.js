import Swiper from 'swiper';

$( document ).ready( function () {
    const toursSlider = new Swiper('.advantage__content .swiper-container', {
        direction: 'vertical',
        slidesPerView: 'auto',
        freeMode: true,
        scrollbar: {
            el: '.swiper-scrollbar',
            dragSize: 8
        },
        mousewheel: true,
    });
});
