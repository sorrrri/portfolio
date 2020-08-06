window.onload = function () {
    var addButton = document.getElementById("button-add-drug"); // 작동 중지
    if (addButton) {
        addButton.addEventListener("click", function () {
            addDrugs()
        });
    }

    // Select Language
    var kr = document.querySelector('.lang-kr')
    var en = document.querySelector('.lang-en')

    if (kr) {
        kr.addEventListener('click', function () {
            kr.classList.add('active');
            en.classList.remove('active')

        })

    }
    if (en) {
        en.addEventListener('click', function () {
            en.classList.add('active');
            kr.classList.remove('active')

        })
    }

    /*    if (kr.classList.contains('active')) {
        }

        if (en.classList.contains('active')) {
        }*/

    //
    // Language Cookie
    var index = Cookies.get('active');
    $('.language').find('small').removeClass('active');
    $(".language").find('small').eq(index).addClass('active');
    $('.language').on('click', 'small', function (e) {
        e.preventDefault();
        $('.language').find('small').removeClass('active');
        $(this).addClass('active');
        Cookies.set('active', $('.language small').index(this));
    });

}

function addDrugs() {
    var drugs = document.getElementById("drugs");
    var clone = drugs.firstElementChild.cloneNode(true);
    drugs.appendChild(clone);
}

function removeParentElement(child) {
    var inputDrugContainer = document.querySelectorAll(".input-drug-container")

    if (inputDrugContainer.length > 1) {
        let parent = child.parentNode;
        parent.parentNode.removeChild(parent);
    }
}


//Scroll back to top
(function ($) {
    "use strict";

    //Switch dark/light
    $(document).ready(function () {
        "use strict";

        //Scroll back to top

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
            var scroll = $(".content").scrollTop();
            var height = $(".content").height()
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(".content").on('scroll', function () {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function (event) {
            event.preventDefault();
            jQuery('.content').animate({scrollTop: 0}, duration);
            return false;
        })


    });

})(jQuery);

// const toggleButton = document.querySelector('.dark-light');
//
// toggleButton.addEventListener('click', () => {
//   document.body.classList.toggle('dark-mode');
// });


function setMyCookie() {
    myCookieVal = $("body").hasClass('dark-mode') ? 'isActive' : 'notActive';
    $.cookie('myCookieName', myCookieVal, {path: '/'});
}

if ($.cookie('myCookieName') == 'isActive') {
    $('body').addClass('dark-mode');
    $('footer .partners').addClass('dark');
} else {
    $('body').removeClass('dark-mode');
    $('footer .partners').removeClass('dark');
}

$('.dark-light').click(function () {
    document.body.classList.toggle('dark-mode');
    $('footer .partners').toggleClass('dark');
    setMyCookie();
})

const goResult = document.querySelector('.go-result')

if (goResult) {
    goResult.addEventListener('click', () => {
    })
}


$('.button').click(function (e) {
    e.preventDefault();
    $(this).toggleClass('loading');
});