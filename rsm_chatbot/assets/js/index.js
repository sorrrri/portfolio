$('.faq h4').click(function() {
	$('.faq ul').slideToggle("slow");
})


// Admin List Click Focus
$(".select li").click(function () {
	$(".select li").removeClass("focus");
	$(".select li").removeAttr("class");
	$(this).addClass('focus');
});

$(".select .row").click(function () {
	$(".select .row").removeClass("focus");
	$(this).addClass('focus');
});

$(".message-input").keypress(function () {
	if (window.event.keyCode == 13) {
		var rows = $('.message-input').attr('rows');
		rows = parseInt(rows);
		if(rows < 4) {
			rows++;
		}
		height = rows * 30;
		$(".msg-input").css("height", height);
		$(".message-input").attr("rows", rows);
	}
});


// Radio Button
$("input[type='radio'").click(function () {
	$("input[type='radio'").removeClass("active");
	$("input[type='radio'").removeAttr("class");
	$(this).addClass('active');
});



// Hamburger Button and Slide Menu
$('.menu-01').click(function() {
	$('.aside-01').toggleClass('hide');
	$(this).toggleClass('open');
})

$('.menu-02').click(function() {
	$('.aside-01').toggleClass('open');
	$(this).toggleClass('open');
})

$('.menu-angel').click(function() {
	$('.aside-angel').toggleClass('hide');
	$(this).toggleClass('open');
})



// Bottom Button
var pxScrolled = 200;
var duration = 500;

$('.msg-view').scroll(function() {
if ($(this).scrollTop() > pxScrolled) {
    $('.btn-container').css({'bottom': '50px', 'transition': '.3s'});
} else {
    $('.btn-container').css({'bottom': '0'});
} 
});

$('.top').click(function() {
$('.msg-view').animate({scrollTop: 0}, duration);
})


// .bottom 클릭시 .msg-view의 bottom으로 이동
$('.bottom').click(function() {
	$('.msg-view').animate({
		scrollTop : $('.msg-view')[0].scrollHeight
	}, 'duration');
});

// Modal
function openModalDim(type) {
	$(".mask").addClass("active");
	if (type == "modal1") {
		$("#modal1, .modal-01").show();
	} else if(type == "modal2") {
		$("#modal2, .modal-02").show();
	}
}

function closeModalDim() {
	$(".mask").removeClass("active");
	$(".modal").hide();
}

$(".close, .mask").on("click", function() {
	closeModalDim();
});
$(document).keyup(function(e) {
	if (e.keyCode == 27) {
		closeModalDim();
	}
});

// Selectbox
$(document).ready(
		function() {
			$('.selectbox').each(
					function() {

						var $this = $(this), firstVal = $this.find(
								".selectbox-options span:eq(0)").text();

						// Set first option
						$this.find(".selectbox-current .selected").text(
								firstVal);

						// Show/hide drop down
						$this.find(".selectbox-current").bind("click",
								function() {
									if (!$this.find(".options").is(":visible")) {
										$this.find(".selectbox-options").slideDown(150);
									} else {
										$this.find(".selectbox-options").slideUp(150);
									}
								});

						// Set selected value
						$this.find(".selectbox-options span").bind("click",
								function() {
									val = $(this).text();
									$this.find(".selected").text(val);
									$this.find(".selectbox-options").slideUp(150);
								});
					});
		});

// Tab Menu
$(document).ready(function() {
	$('.tab-menu button').click(function() {
		var tab_id = $(this).attr('data-tab');

		$('.tab-menu button').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	})
})

$(document).ready(function() {
	$('.modal .tab-menu button').click(function() {
		var tab_id = $(this).attr('data-tab');

		$('.modal.tab-menu button').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	})
})



// Chat Tab Menu
$(document).ready(function() {
	$('.tab-menu button').click(function() {
		var tab_id = $(this).attr('data-tab');

		$('.tab-menu button').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#" + tab_id).addClass('current');
	})
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



// Checkbox Select All
function toggle(source) {
	checkboxes = document.getElementsByName('foo');
	for(var i=0, n=checkboxes.length; i<n; i++){
		checkboxes[i].checked = source.checked;
	}
}



// Admin Toggle Button
$('.cb-value').click(function() {
  var mainParent = $(this).parent('.toggle-btn');
  if($(mainParent).find('input.cb-value').is(':checked')) {
    $(mainParent).addClass('active');
  } else {
    $(mainParent).removeClass('active');
  }
})


// Resizable
if($(".admin .container > .panel:first-child")) {
	$(".admin .container > .panel:first-child").resizable({
		handleSelector : ".splitter",
		resizeHeight : false
	});
}


// Input File
var fileInput = document.querySelector('.form-input-file');
var fileInputText = document.querySelector('.form-input--file-text');
fileInputTextContent = fileInputText.textContent;

fileInput.addEventListener('change', function(e) {
	var value = e.target.value.length > 0 ? e.target.value : fileInputTextContent;
	
	fileInputText.textContent = value.replace('C:\\fakepath\\', '');
});