$(document).ready(() => {
    if($(window).width() < 426)
    {
        $('section').removeClass('uk-container');
        $('.tagline td').removeClass('uk-text-large');
        $('.uk-card').removeClass('uk-card');
        $('.uk-card-default').removeClass('uk-card-default');
        $('.uk-card-body').removeClass('uk-card-body');
        $('a.uk-position-fixed').css({
            "top" : "0px",
            "padding" : "5px 10px",
            "left" : "0px"
        });
        $('p.description').removeClass('uk-text-large');
    }
});