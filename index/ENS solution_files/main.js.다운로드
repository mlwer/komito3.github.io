$(window).load(function(){
	// 메인비주얼
		var mv = $(".mv").bxSlider({
			auto : true,
			speed : 500,
			pause : 5000,
			pager : false,
			onSlideAfter : function () {
				mv.startAuto();
			}	
		});

		var m01_T = $(".m01-wrap").offset().top;

		$(".scroll a").click(function(){
			$("html, body").stop().animate({
				scrollTop : m01_T
			},300);
		});
	// 메인비주얼

	// m02
		var m02 = $(".m02").bxSlider({ 
			auto : true,
			speed : 500,
			pause : 5000,
			pager : false,
			minSlides : 3,
			maxSlides : 3,
			moveSlides : 1,
			slideWidth : 300,
			slideMargin : 28,
			onSlideAfter : function () {
				m02.startAuto();
			}
		});
	// m02

	// m04
		$("#8c").hide();
		$("#18c").hide();
		$("#28c").hide();

		$("#c1").click(function(){
			$("#8c").show();
			$("#18c").hide();
			$("#28c").hide();
		});
		$("#c2").click(function(){
			$("#8c").hide();
			$("#18c").show();
			$("#28c").hide();
		});
		$("#c3").click(function(){
			$("#8c").hide();
			$("#18c").hide();
			$("#28c").show();
		});
	// m04

	// m05
		$(".m05-btn a").click(function(){
			if ( $(this).hasClass("on") == false )
			{
				$(this).addClass("on");
				$(".m05-con").stop().slideDown();
			} else {
				$(this).removeClass("on");
				$(".m05-con").stop().slideUp();
			}
		});
	// m05

	// m06		
		$(".m06-cont").css({
			'height': 'auto',
			'display': 'none'
		});
		$(".m06-btn a").click(function(){
			if ( $(this).hasClass("on") == false )
			{
				$(this).addClass("on");
				$(".m06-cont").stop().slideDown();
			} else {
				$(this).removeClass("on");
				$(".m06-cont").stop().slideUp();
			}
		});
	// m06
});