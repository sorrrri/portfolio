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


