$(function () {
    $('.rating').on('click', '.rating__image', function () {
        $('.rating__image').removeClass('rating__item--rated');
        $(this).addClass('rating__item--rated');
        //костыль для ie8
        $(this).parent().addClass('hui').removeClass('hui');
    });
    //плэйсхолдер плагин для ie8
    $('input, textarea').placeholder();
});