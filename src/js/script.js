/* =====================================================
   Trigger
   ===================================================== */
$(document).on("mousemove", function (e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});


$('.menu a').click(function () {
    var $target = $($.attr(this, 'href'));

    if (!$target.length) return;

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);

    return false;
});


/* =====================================================
   Menu Trigger & Image/Text Reveal Effects
   ===================================================== */
$(function () {

    const icoMenu = document.querySelector('.ico-menu');
    const menu = document.querySelector('.menu');
    const menuLink = document.querySelector('.menu a');

    $(window).scroll(function () {

        if ($(window).scrollTop() === 0) {
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


    $(window).scroll(function () {
        if ($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
            var contactChild = document.querySelector('#contact > *');
            contactChild.style.opacity = "1"
        }
    });

    const contactTitle = document.querySelector("#contact h2")
    const contactContent = document.querySelector("#contact ul")

    if (contactTitle.style.opacity = "1") {
        contactContent.style.opacity = "1"
    }
});


/* =====================================================
   Modal Effect
   ===================================================== */
const modal = document.querySelector('.modal')
const openModalAibis = document.querySelector('.open-modal-aibis')
const openModalPtod = document.querySelector('.open-modal-ptod')
if (openModalAibis) {

    openModalAibis.addEventListener('click', () => {
        $('.open-modal-aibis').toggleClass('active')
    })
    openModalPtod.addEventListener('click', () => {
        $('.open-modal-ptod').toggleClass('active')
    })
}


//background
let images = [
    'src/images/background/11.jpg',
    'src/images/background/12.jpg',
    'src/images/background/13.jpg',
    'src/images/background/14.jpg',
    'src/images/background/16.jpg',
];
let i = 0;

const slider = () => {
    document.getElementById('images').src = images[i];

    if (i < images.length - 1) {
        i++;
    } else {
        i = 0;
    }
}

setInterval(slider, 4000);