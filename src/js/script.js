
var cursor = $(".cursor"),
    follower = $(".cursor-follower");

var posX = 0,
    posY = 0,
    mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat: -1,
    onRepeat: function () {
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;

        TweenMax.set(follower, {
            css: {
                left: posX - 20,
                top: posY - 20
            }
        });

        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }
});

$(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$("#products img").on("mouseenter", function () {
    cursor.addClass("active");
    follower.addClass("active");
});

$("#products img").on("mouseleave", function () {
    cursor.removeClass("active");
    follower.removeClass("active");
});




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


