/* =====================================================
   Cursor Effect
   ===================================================== */
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
const overlay = document.querySelector('.overlay')
const modal = document.querySelector('.modal')
const modalClose = document.querySelector('.close')
const openModalAibis = document.querySelector('.open-modal-aibis')
const openModalPtod = document.querySelector('.open-modal-ptod')
const modalAibis = document.querySelector('.modal-content-aibis')
const modalPtod = document.querySelector('.modal-content-ptod')

function openModal() {
    overlay.classList.add('active')
    modal.classList.add('active')
    modal.classList.remove('hide')
}

function closeModal() {
    overlay.classList.remove('active')
    modal.classList.add('hide')
    modal.classList.remove('active')
    modalAibis.classList.remove('active')
    modalPtod.classList.remove('active')
}

$(".close, .overlay").on("click", function() {
    closeModal();
});

if(modal) {

    openModalAibis.addEventListener('click', () => {
        modalAibis.classList.add('active')
        openModal()
    })
    openModalPtod.addEventListener('click', () => {
        modalPtod.classList.add('active')
        openModal()
    })

    overlay.addEventListener('click', () => {
        closeModal();
    })
    modalClose.addEventListener('click', () => {
        closeModal();
    })

    $(document).keyup(function (e) {
        if (e.keyCode == 27) {
            closeModal();
        }
    });
}