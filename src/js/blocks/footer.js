$( document ).ready( function () {
    const wrapper = $('.page-wrapper');
    const bumpIt = function() {
        wrapper.css('padding-bottom', $('.footer').innerHeight());
    };

    let didResize = false;

    bumpIt();

    $(window).resize(function() {
        didResize = true;
    });
    setInterval(function() {
        if(didResize) {
            didResize = false;
            bumpIt();
        }
    }, 250);
});
