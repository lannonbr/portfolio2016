$(window).scroll(function() {
	if($(this).scrollTop()) {
		$('.header-fixed').addClass('header-shadow');
	} else {
		$('.header-fixed').removeClass('header-shadow');
	}
});

$(function() {
	$(".btn-navdrawer").click(function() {

		$(".navdrawer-open-shadow").css("display", "block").animate({"opacity": 1.0}, 400);
		$(".navdrawer").css("display", "block").animate({"left": "0px"}, 400);

		// $(".navdrawer-open-shadow").show();
		// $(".navdrawer").show();
	});

	$(".navdrawer-open-shadow").click(function() {
		$(".navdrawer-open-shadow").animate({"opacity": 0.0}, 300).css("display", "none");
		$(".navdrawer").animate({"left": "-320px"}, 300);

	});
});
