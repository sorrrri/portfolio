let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
})


// Disabling and enabling buttons
// $('.search input').on('keyup', function () {
//     if ($('button').attr('disabled','disabled')) {
//         $('button').removeAttr('disabled');
//     }
// });


$(window).resize(function () {
    location.reload();
});

$(".navigation a").mouseup(function () {
    setTimeout(function () {
        location.reload();
    }, 10);
});



// Modal
$(".btn-COx-MAP").on("click", function () {
    $(".modal-COx-MAP, .modal-backdrop").addClass("active")
})

$(".btn-ETCO2").on("click", function () {
    $(".modal-ETCO2, .modal-backdrop").addClass("active")
})

$(".modal-backdrop").on("click", function() {
    $(".modal-backdrop, .modal").removeClass("active");
});



// Toggle Button
/*$('.cb-value').click(function () {
    var mainParent = $(this).parent('.btn-toggle');
    if ($(mainParent).find('input.cb-value').is(':checked')) {
        $(mainParent).addClass('light');
        $(".container").removeClass("theme-dark");
    } else {
        $(mainParent).removeClass('light');
        $(".container").addClass("theme-dark");
    }
})*/

function setMyCookie() {
    myCookieVal = $('.btn-toggle').hasClass('light') ? 'isActive' : 'notActive';
    $.cookie('myCookieName', myCookieVal, {path: '/'});
}

if ($.cookie('myCookieName') == 'isActive') {
    $('.btn-toggle').addClass('light');
    $('.container').removeClass('theme-dark');
} else {
    $('.btn-toggle').removeClass('light');
    $('.container').addClass('theme-dark');
}

$('.cb-value').click(function () {
    var mainParent = $(this).parent('.btn-toggle');
    if ($(mainParent).find('input.cb-value').is(':checked')) {
        $(mainParent).addClass('light');
        $(".container").removeClass("theme-dark");
    } else {
        $(mainParent).removeClass('light');
        $(".container").addClass("theme-dark");
    }
    setMyCookie();
})
