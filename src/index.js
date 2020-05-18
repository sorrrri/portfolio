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

inputTime.value = new Date().toISOString().slice(0, 16);
searchTime.value = new Date().toISOString().slice(0, 16);
timeLactate.value = new Date().toISOString().slice(0, 16);
timeGlucose.value = new Date().toISOString().slice(0, 16);
timeHgb.value = new Date().toISOString().slice(0, 16);


function charts() {
    var checkChartCOx = document.getElementById("check-chart-COx");
    var checkChartMAP = document.getElementById("check-chart-MAP");
    var checkChartETCO2 = document.getElementById("check-chart-ETCO2");
    var checkChartRSO2 = document.getElementById("check-chart-RSO2");
    var checkChartPupil = document.getElementById("check-chart-pupil");
    var checkChartNPI = document.getElementById("check-chart-NPI");
    var checkChartSJVO2 = document.getElementById("check-chart-SJVO2");
    var checkChartAJDL = document.getElementById("check-chart-AJDL");
    var checkChartCEO2 = document.getElementById("check-chart-CEO2");
    var checkChartAJDO2 = document.getElementById("check-chart-AJDO2");

    var chartCOxContainer = document.getElementById('chart-COx-container');
    var chartMAPContainer = document.getElementById('chart-MAP-container');
    var chartETCO2Container = document.getElementById('chart-ETCO2-container');
    var chartRSO2Container = document.getElementById('chart-RSO2-container');
    var chartPupilContainer = document.getElementById('chart-pupil-container');
    var chartNPIContainer = document.getElementById('chart-NPI-container');
    var chartSJVO2Container = document.getElementById('chart-SJVO2-container');
    var chartAJDLContainer = document.getElementById('chart-AJDL-container');
    var chartCEO2Container = document.getElementById('chart-CEO2-container');
    var chartAJDO2Container = document.getElementById('chart-AJDO2-container');

    if ($(checkChartCOx).is(":checked") == true) {
        $(chartCOxContainer).addClass('active')
    }

}
