function modal() {
    jQuery(".modal, .backdrop").addClass("active");
}

function closeModal() {
    jQuery(".modal, .backdrop").removeClass("active");
}

jQuery(".close, .modal .cancel, .backdrop").on("click", function() {
    closeModal();
});

/*
jQuery(document).keyUp(function(e) {
    if(e.keyCode === 27) {
        closeModal();
    }
});*/
