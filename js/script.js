$(document).ready(function () {
    $('.nav__link').click(function (e) {
        e.preventDefault()
        var ind;
        $('.nav__link').removeClass('active')
        $(this).addClass('active')

        $('.nav__link').each(function (i, elem) {
            if ($(elem).hasClass('active')) {
                ind = i
            }
        })

        $(".content-block").removeClass('active-content');

        $(".content-block").each(function (i, elem) {

            if (i === ind) {
                $(elem).addClass('active-content')
            }
        })

    })



    $('.mobile-menu-button').click(function () {
        $(this).toggleClass('opened')
        $('.nav').toggleClass('opened')
    })
});