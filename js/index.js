// Hamburger Button and Slide Menu
$('.menu').click(function() {
	$('.aside').toggleClass('hide');
	//$(this).toggleClass('open');
})



// Accordion Menu
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		// more then one submenu open?
		this.multiple = multiple || false;

		var dropdownlink = this.el.find('.dropdownlink');
		dropdownlink.on('click', {
			el : this.el,
			multiple : this.multiple
		}, this.dropdown);
	};

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el, $this = $(this),
		// this is the ul.submenuItems
		$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			// show only one menu at the same time
			$el.find('.submenuItems').not($next).slideUp().parent()
					.removeClass('open');
		}
	}

	var accordion = new Accordion($('.accordion-menu'), false);
})



// Tab Menu
$(document).ready(function() {
	$('.tab-menu li').click(function() {
		var tab_id = $(this).attr('data-tab');

		$('.tab-menu li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	})
})




$(document).ready(function() {
	$('.input-container input, .search .selectbox, .search input').click(function() {

		$('.input-container, .search').removeClass('active');
        $(this).parent().addClass('active')
    })
})


// Modal
function modal(type) {
	$(".mask").addClass("active");
	if (type == "modal1") {
		$(".modal-01").show();
	} else if(type == "modal2") {
		$(".modal-02").show();
	}
}

function closeModal() {
	$(".mask").removeClass("active");
	$(".modal").hide();
}

$(".close, .cancel, .mask").on("click", function() {
	closeModal();
});
$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		closeModal();
	}
});



// Tooltip
$(document).ready(function() {
    $(".tooltip").click(function () {
    var $title = $(this).find(".title");
    if (!$title.length) {
      $(this).append('<span class="title">' + $(this).attr("title") + '</span>');
    } else {
      $title.remove();
    }
  })
})