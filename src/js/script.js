
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


$('a').click(function(){
    var $target = $($.attr(this, 'href'));

    if ( ! $target.length ) return;

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);

    return false;
});



$(function () {

    const icoMenu = document.querySelector('.ico-menu');
    const menu = document.querySelector('.menu');
    const menuLink = document.querySelector('.menu a');

    $(window).scroll(function() {

        if($(window).scrollTop() === 0) {
            icoMenu.style.display = "none"
            menu.classList.add("active")
        } else {
            menu.classList.remove("active")
            icoMenu.style.display = "flex"
        }
    });

    $('.menu a').on('click', function () {
        $('.menu').hide();
        icoMenu.classList.remove('active')
    })



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


