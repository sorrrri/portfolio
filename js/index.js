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