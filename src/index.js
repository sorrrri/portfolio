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


// Toggle Button
$('.cb-value').click(function() {
    var mainParent = $(this).parent('.btn-toggle');
    if($(mainParent).find('input.cb-value').is(':checked')) {
        $(mainParent).addClass('dark');
        $(".container").addClass("theme-dark");
    } else {
        $(mainParent).removeClass('dark');
        $(".container").removeClass("theme-dark");
    }
})