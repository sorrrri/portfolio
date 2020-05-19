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


// Modal
$(".btn-COx-MAP").on("click", function () {
    $(".modal-COx-MAP, .modal-backdrop").addClass("active")
})

$(".btn-ETCO2").on("click", function () {
    $(".modal-ETCO2, .modal-backdrop").addClass("active")
})

$(".modal-backdrop").on("click", function () {
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


// Set the Current Time
var inputTime = document.getElementById('input-time');
var searchTime = document.getElementById('search-time');
var timeLactate = document.getElementById('time-lactate');
var timeGlucose = document.getElementById('time-glucose');
var timeHgb = document.getElementById('time-hgb');

/*inputTime.value = new Date().toISOString().slice(0, 16);
searchTime.value = new Date().toISOString().slice(0, 16);
timeLactate.value = new Date().toISOString().slice(0, 16);
timeGlucose.value = new Date().toISOString().slice(0, 16);
timeHgb.value = new Date().toISOString().slice(0, 16);*/



// On checkbox click in the color filter
$("#filters-container .checkbox").click(() => {
    // Define constants for length of checked checkboxes array
    const selectedChartLength = $('.filter-charts :checkbox').filter(':checked').length;
    // Hide all items in the list
    $(".chart-container").hide();

    // If checkboxes are selected in the color-filter ONLY
    if (selectedChartLength >= 1) {
        // For each of the checked checkboxes in the color-filter
        $(".filter-charts :checkbox:checked").each((index, element) => {
            // Show items with the class of the value of the checkbox
            $("." + $(element).val()).fadeIn();
        });

        // If checkboxes are selected in color-filter AND type-filter
    }
});