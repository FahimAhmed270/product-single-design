$(document).ready(function(){
    $('.colors span').click(function(){
        $(this).addClass('active').siblings().removeClass('active');

        let colors = $(this).css('background');
        $('.box-container').css('background', colors);

        let image = $(this).attr('data-image');
        $('.image img').attr('src', image);
    });
});