/*
const body = document.body,
    scrollWrap = document.getElementsByClassName("smooth-scroll-wrapper")[0],
    height = scrollWrap.getBoundingClientRect().height - 1,
    speed = 0.04;

var offset = 0;

body.style.height = Math.floor(height) + "px";

function smoothScroll() {
    offset += (window.pageYOffset - offset) * speed;

    var customScroll = "translateY(-" + offset + "px) translateZ(0)";
    scrollWrap.style.transform = customScroll;

    callScroll = requestAnimationFrame(smoothScroll);
}

smoothScroll();
*/



$(function () {

    var fadeIn = $('section > *').toArray();

    $(window).scroll(function () {
        fadeIn.forEach(function (item) {
            if ($(this).scrollTop() >= $(item).offset().top - 400) {
                $(item).css('opacity', '1')
            }
        });
    });

    fadeIn.forEach(function (item) {
        if ($(this).scrollTop() >= $(item).offset().top - 400) {
            $(item).css('opacity', '1')
        }
    });



    var elements = $(".text, .image").toArray();

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

    $(window).scroll(function() {
        if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            var contactChild = document.querySelector('#contact > *');
            contactChild.style.opacity = "1"
        }
    });

    const contactTitle = document.querySelector("#contact h2")
    const contactContent = document.querySelector("#contact ul")

    if(contactTitle.style.opacity = "1") {
        contactContent.style.opacity = "1"
    }
});


