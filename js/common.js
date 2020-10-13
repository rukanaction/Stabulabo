/* ==========================================================================
   gNav
   ========================================================================== */
$(function () {
	//Nav 
	$("#menuBtn,.fixNav .openBtn").click(function () {
		$("#openMenu").toggleClass("open");
		$(".fixNav").addClass("none");
	});
	$("#openMenu .close").click(function () {
		$("#openMenu").removeClass("open");
		$(".fixNav").removeClass("none");
	});
	$(".fixNav .openBtn").click(function () {
		$(".fixNav").removeClass("none");
	});
});
var ww = $(window).width();
var wh = $(window).height();
var posfix = (wh/2)-265;
$(window).on('load resize', function(){
	ww = $(window).width();
	wh = $(window).height();
	posfix = (wh/2)-265;
	if(767 > ww ){
		$("#openMenu").css('height', wh);
	}else{
		$("#openMenu").css('height', wh);
		$("#flame span.top,#flame span.bottom").css('width', ww);
		$("#flame span.right,#flame span.left").css('height', wh);
	}
});

/* ==========================================================================
   pagetop
   ========================================================================== */
$(window).scroll(function () {

	if ($(this).scrollTop() > posfix) {
		$('.fixNav,#pagetop').addClass("in");
	}else {
		$('.fixNav,#pagetop').removeClass("in");
	}
	if ($(this).scrollTop() > 265) {
		$('#gNavFix').addClass("in");
	}else {
		$('#gNavFix').removeClass("in");
	}
});