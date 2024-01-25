$(function () {
    'use strict';

    // Adjust Slider Height
    var windowH = $(window).height();
    var upperH = $('.upper-bar').innerHeight();
    var navH = $('.navbar ').innerHeight();

    $('.slider,.carousel-item').height(windowH - (upperH + navH));

    $('.fetured-work ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('class') === 'all') {
            $('.img-div .img-div-items').css('opacity', '1');
        }
        else {
            $('.img-div .img-div-items').css('opacity', '.09');
            $($(this).data('class')).css('opacity', '1');
        }
    });


    // $('.img-div .col-sm').on('mousedown',function(){
    //     $('.img-div .col-sm')[0].css('width','100%')
    //             // $('.img-div img').css('width','100%') ;
    // });

    
});
