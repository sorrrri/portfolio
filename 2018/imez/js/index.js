function popupOpen(){

var popUrl = "service_apply_pop.html";	//팝업창에 출력될 페이지 URL
var popOption = "width=400, height=600, resizable=no, scrollbars=no, status=no;";    //팝업창 옵션(optoin)

	window.open(popUrl,"",popOption);

}

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if (scroll >= 50) {
        $(".header").addClass("scroll");
    } else {
       // $(".header").removeClass("scroll");
    }
});

$(function(){
    $(".hamburger").click(function()
    {
        $(".lnb").toggleClass("open");
    })
});



$(function(){
	$('.image-slider').slick({
	  dots: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 6000,
	  speed: 800,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});
});

$(function(){
	$('.comment-slider').slick({
	  dots: true,
	  infinite: true,
	  autoplay: true,
	  autoplaySpeed: 6000,
	  speed: 800,
	  slidesToShow: 1,
	  adaptiveHeight: true
	});
});

$(function() {
	$('.gototop').bind('click', function(event) {
		var $anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top
		}, 1500, 'easeInOutExpo');
		event.preventDefault();
	});
});

$(function() {
	$('.dropdown-wrapper').on('click', 'span', function() {
	    $('.dropdown').toggleClass('active');
	    $('.dropdown-wrapper span i').toggleClass('active');
	})
});

(function() {

	function init(item) {
		var items = item.querySelectorAll('li'),
        current = 0,
        autoUpdate = true,
        timeTrans = 4000;
        
		//create nav
		var nav = document.createElement('nav');
		nav.className = 'nav_arrows';

		//create button prev
		var prevbtn = document.createElement('button');
		prevbtn.className = 'prev';
		prevbtn.setAttribute('aria-label', 'Prev');

		//create button next
		var nextbtn = document.createElement('button');
		nextbtn.className = 'next';
		nextbtn.setAttribute('aria-label', 'Next');

		//create counter
		var counter = document.createElement('div');
		counter.className = 'counter';
		counter.innerHTML = "<span>1</span><span>"+items.length+"</span>";

		if (items.length > 1) {
			nav.appendChild(prevbtn);
			nav.appendChild(counter);
			nav.appendChild(nextbtn);
			item.appendChild(nav);
		}

		items[current].className = "current";
		if (items.length > 1) items[items.length-1].className = "prev_slide";

		var navigate = function(dir) {
			items[current].className = "";

			if (dir === 'right') {
				current = current < items.length-1 ? current + 1 : 0;
			} else {
				current = current > 0 ? current - 1 : items.length-1;
			}

			var	nextCurrent = current < items.length-1 ? current + 1 : 0,
				prevCurrent = current > 0 ? current - 1 : items.length-1;

			items[current].className = "current";
			items[prevCurrent].className = "prev_slide";
			items[nextCurrent].className = "";

			//update counter
			counter.firstChild.textContent = current + 1;
		}
    
    item.addEventListener('mouseenter', function() {
			autoUpdate = false;
		});

		item.addEventListener('mouseleave', function() {
			autoUpdate = true;
		});

		setInterval(function() {
			if (autoUpdate) navigate('right');
		},timeTrans);
    
		prevbtn.addEventListener('click', function() {
			navigate('left');
		});

		nextbtn.addEventListener('click', function() {
			navigate('right');
		});

		//keyboard navigation
		document.addEventListener('keydown', function(ev) {
			var keyCode = ev.keyCode || ev.which;
			switch (keyCode) {
				case 37:
					navigate('left');
					break;
				case 39:
					navigate('right');
					break;
			}
		});

		// swipe navigation
		// from http://stackoverflow.com/a/23230280
		item.addEventListener('touchstart', handleTouchStart, false);        
		item.addEventListener('touchmove', handleTouchMove, false);
		var xDown = null;
		var yDown = null;
		function handleTouchStart(evt) {
			xDown = evt.touches[0].clientX;
			yDown = evt.touches[0].clientY;
		};
		function handleTouchMove(evt) {
			if ( ! xDown || ! yDown ) {
				return;
			}

			var xUp = evt.touches[0].clientX;
			var yUp = evt.touches[0].clientY;

			var xDiff = xDown - xUp;
			var yDiff = yDown - yUp;

			if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
				if ( xDiff > 0 ) {
					/* left swipe */
					navigate('right');
				} else {
					navigate('left');
				}
			} 
			/* reset values */
			xDown = null;
			yDown = null;
		};


	}

	[].slice.call(document.querySelectorAll('.cd-slider')).forEach( function(item) {
		init(item);
	});

})();


/* Dropdown Menu */
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});

/* FAQ */
$(".accordion").on("click", ".accordion-header", function() {
 	$(this).toggleClass("active").next().slideToggle();
 });

/* Main Accordion */
$(document).ready(function() {
    if( $('.main-accordion').length > 0 ) {

			// show active box content
			$('.accordion__item.accordion__item--active').find('.accordion__content').show();
			
			$('.main-accordion .accordion__link').click(function() {
				if( !$(this).parent('.accordion__item').hasClass('accordion__item--active') ) {
					$(this).parent('.accordion__item').siblings('.accordion__item--active').each(function() {
						accordionItemClose( $(this) );
					});
					accordionItemOpen( $(this) );
				}
				else {
					accordionItemClose($(this).parent('.accordion__item'));
				}
				
				var indexActive = $(this).parent('.accordion__item').index();
				$('.box-accordion-image').eq(indexActive).addClass('state--active').siblings().removeClass('state--active');
				return false;
			});
			function accordionItemClose(item) {
				$(item).siblings('.accordion__item--active').addBack().find('.accordion__content').slideUp();
				$(item).siblings('.accordion__item--active').addBack().find('.accordion__item--active').removeClass('accordion__item--active');
				$(item).removeClass('accordion__item--active');
				$(item).children('.accordion__content').slideUp();
			}
			function accordionItemOpen(item) {
				$(item).parent('.accordion__item').addClass('accordion__item--active');
				$(item).next('.accordion__content').slideDown();
			}

    }
});