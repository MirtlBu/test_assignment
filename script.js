$(function () {
    $('.rating').on('click', '.rating__image', function () {
        $('.rating__image').removeClass('rating__item--rated');
        $(this).addClass('rating__item--rated');
        //передёрнуть рлительский класс для ie8
        $(this).parent().addClass('hui').removeClass('hui');
    });
    $('input, textarea').placeholder();
});