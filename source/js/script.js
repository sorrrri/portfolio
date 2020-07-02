const body = document.body,
    scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var scroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = scroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();

$(function () {
    var elements = $(".text, .img").toArray();
    $(window).scroll(function () {
        elements.forEach(function (item) {
            if ($(this).scrollTop() >= $(item).offset().top - 400) {
                $(item).addClass("reveal");
            }
        });
    });
    elements.forEach(function (item) {
        if ($(this).scrollTop() >= $(item).offset().top - 400) {
            $(item).addClass("reveal");
        }
    });
});



$(document).ready(function () {

    $("a, button, canvas, .slick-slider").on("mouseenter", function () {
        $(".segment").addClass("straighten");

    })

    $("a, button, canvas, .slick-slider").on("mouseleave", function () {

        $(".segment").removeClass("straighten");

    })

    $('a[href^="#"]').click(function () {
        var target = this.hash;
        //console.log(target, $target);
        $('html, body').animate({ 'scrollTop': $(target).offset().top }), 1500;
    });

})