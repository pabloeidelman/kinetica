$(function () {
    $('#myCarousel').carousel({
        interval: false  
    });

    $('a.right carousel-control').click(function () {
        $('.carousel').carousel('next')
    });

    $('a.left carousel-control').click(function () {
        $('.carousel').carousel('prev')
    });
});