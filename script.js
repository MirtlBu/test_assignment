$(function () {
    $('.rating').on('click', '.rating__image', function () {
        $('.rating__image').removeClass('rating__item--rated');
        $(this).addClass('rating__item--rated');
    });
});