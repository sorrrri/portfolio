function modal() {
    $(".modal, .backdrop").addClass("active");
}

function closeModal() {
    $(".modal, .backdrop").removeClass("active");
}

$(".close, .modal .cancel, .backdrop").on("click", function () {
    closeModal();
});

/*
$(document).keyUp(function(e) {
    if(e.keyCode === 27) {
        closeModal();
    }
});*/

$(document).ready(function () {

    // Selectbox
    $(".selectbox-current").click(function () {
        $(".selectbox-options").addClass("active");
    });

    $(".selectbox-options li").click(function () {
        $(".selectbox-current .selected").text($(this).text());
        $(".selectbox-options").removeClass("active");
    });
});