$(function () {
    $('a[href!="#myCarousel"]').click(function () {
        var target = $(this.hash);
        $('body').animate({
            scrollTop: target.offset().top -70
        }, 3000);
    });

});