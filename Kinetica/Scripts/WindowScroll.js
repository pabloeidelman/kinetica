$(function () {
    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        if (scrollPos != 0) {
            $('#header').stop().animate({
                top: '-120px'
            }, 1000);
        }
        else {
            $('#header').stop().animate({
                top: '0px'
            }, 1000);
        }
        
    });

});