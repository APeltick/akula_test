import Swiper from 'swiper';

$( document ).ready( function () {
    const toursBlock = $('.tours');
    const toursNavLink = $('.tours__nav-link');

    const tabSwitch = function (link) {
        if ( $(link).hasClass('tours__nav-link_active') ) {
            return false;
        }

        const activeBlock = toursBlock.find('.tours__tab_active');

        toursBlock.find('.tours__nav-link_active').removeClass('tours__nav-link_active');
        $(link).addClass('tours__nav-link_active');

        activeBlock.removeClass('tours__tab_active');
        $( $(link).attr('href') ).addClass('tours__tab_active');
    };

    toursNavLink.on('click', function (event) {
        event.preventDefault();
        tabSwitch(event.target);
    });

    toursNavLink.on('touch', function (event) {
        event.preventDefault();
        tabSwitch(event.target);
    });

    const slidesCount = function () {
        if ( window.innerWidth > 1280 ) {
            this.params.slidesPerView = 3;
            this.update();
        }
        if ( window.innerWidth < 1280 ) {
            this.params.slidesPerView = 2;
            this.update();
        }
        if ( window.innerWidth < 640 ) {
            this.params.slidesPerView = 1;
            this.update();
        }
    };

    const toursSlider = new Swiper('.tours__tab .swiper-container', {
        spaceBetween: 30,
        navigation: {
            nextEl: '.tours__card-next',
            prevEl: '.tours__card-prev',
        },
        on: {
            resize: slidesCount,
            init: slidesCount
        }
    });
} );