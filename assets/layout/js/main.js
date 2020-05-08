$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 60) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });


    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 800, 'easeInOutExpo');
        return false;
    });

    // Header scroll class
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    if ($(window).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
    }


    var ellipsestext = "...";
    $('.more-120').each(function () {
        var content = $(this).html();
        if (content.length > 139) {
            var c = content.substr(0, 139);
            var html = c + ellipsestext;
            $(this).html(html);
        }
    });

    //Replace carousel images into background images.
    $('img.imgBG').each(function () {
        var imgSrc = $(this).attr('src');
        $(this).parent().css({'background-image': 'url(' + imgSrc + ')'});
        $(this).remove();
    });

    $('.itemheight').matchHeight();


    var swiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

});



