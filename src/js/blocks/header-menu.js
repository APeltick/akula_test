$( document ).ready( function () {
    $('.burger-menu ').on('click', '.bar', function(){
        $('.header__menu').slideToggle();
        $('.bar').toggleClass('change');
    });

    $('.header__menu-item').on('click', function () {
        $(this).children('.header__menu-dropdown-list').slideToggle();
    });
});

