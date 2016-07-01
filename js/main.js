$(window).scroll(function() {
	if($(this).scrollTop()) {
		$('.header-fixed').addClass('header-shadow');
	} else {
		$('.header-fixed').removeClass('header-shadow');
	}
});
