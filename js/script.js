$(function () {
	$(".FAQ_text> ul> li").click(function () {
		$(this).children(".A1").slideToggle();
		$(this).siblings().children(".A1").slideUp();
	});
	

	

});






