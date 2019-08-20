// Modal
function modal(type) {
	$(".mask").addClass("active");
	if (type == "aside-active") {
		$("aside").toggleClass("active");
	} else if (type == "modal1") {
		$(".modal-01").show();
	} else if (type == "modal2") {
		$(".modal-02").show();
	} else if (type == "modal3") {
		$(".modal-03").show();
	}
}

function closeModal() {
	$(".mask, aside").removeClass("active");
	$(".modal").hide();
}

$(".close, .cancel, .mask, .menu.open").on("click", function() {
	closeModal();
});


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



// Pie Chart
var i = 0 , prec;
var degs = $("#prec").attr("class").split(' ')[1];
var activeBorder = $("#activeBorder");

setTimeout(function(){
    if($("#circle").is(":hover"))
       loopit("c");
    else
       loopit("nc");
},1);

function loopit(dir){
    if (dir == "c")
        i++
    else
        i--;
    if (i < 0)
        i = 0;
    if (i > degs)
        i = degs;
    prec = (100*i)/360;   
    $(".prec").html(Math.round(prec)+"%");
    
    if (i<=180){
        activeBorder.css('background-image','linear-gradient(' + (90+i) + 'deg, transparent 50%, #EEE 50%),linear-gradient(90deg, #EEE 50%, transparent 50%)');
    }
    else{
        activeBorder.css('background-image','linear-gradient(' + (i-90) + 'deg, transparent 50%, #003EB1 50%),linear-gradient(90deg, #EEE 50%, transparent 50%)');
    }
    
    
    setTimeout(function(){
  
            loopit("c");

    },1);
    
}