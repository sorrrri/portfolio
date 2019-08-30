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




// Confirm Alert
function confirmSave () {
	if(confirm('저장하시겠습니까?')){
		alert("저장완료되었습니다.");
	} else {
	}
}
function confirmSubmit () {
	if(confirm('상신하시겠습니까?')){
		alert("상신완료되었습니다.");
	} else {
	}
}

// List Item Focus
$('.list-item').click (function() {
	$('.list-item').removeClass('focus');
	$(this).addClass('focus');
	}
);


// Disabling and enabling buttons
$('.search input').on('keyup', function () {
	if ($('button').attr('disabled','disabled')) {
		$('button').removeAttr('disabled');
	}
});



// Hamburger Button and Slide Menu
$('aside.active .menu').click(function() {
	$('aside').removeClass('active');
	//$(this).toggleClass('open');
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
	$('.input-container input, .input-container select, .input-container .selectbox, textarea').click(function() {
		$('.input-container').removeClass('active');
        $(this).parent().addClass('active')
    })
})

$(document).ready(function() {
	$('.modal input').click(function() {
		$('input').removeClass('active');
        $(this).addClass('active')
    })
})


// Fraction
$('.fraction').each(function(key, value) {
    $this = $(this)
    var split = $this.html().split("/")
    if( split.length == 2 ){
        $this.html('<span class="top">'+split[0]+'</span><span class="bottom">'+split[1]+'</span>')
    }    
});



// Radio Button
$("input[type='radio'").click(function () {
	$("input[type='radio'").removeClass("active");
	$("input[type='radio'").removeAttr("class");
	$(this).addClass('active');
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



// Modal
function modal(type) {
	$(".modal-backdrop").addClass("active");
	if (type == "aside") {
		$("aside").toggleClass("active");
	} else if (type == "modal-01") {
		$(".modal-01").toggleClass("active");
	} else if (type == "modal-02") {
		$(".modal-02").toggleClass("active");
	} else if (type == "modal-03") {
		$(".modal-03").toggleClass("active");
	} else if (type == "modal-04") {
		$(".modal-04").toggleClass("active");
	} else if (type == "modal-inside") {
		$(".modal-backdrop2").addClass("active");
		$(".modal-inside").toggleClass("active");
	}
}

$(".modal-backdrop, .close, .cancel, .cancel2, .menu.open").on("click", function() {
	$(".modal-backdrop, aside, .modal").removeClass("active");
});

$(".cancel-inside, .modal-backdrop2").on("click", function() {
	$(".modal-inside, .modal-backdrop2").removeClass("active");
});