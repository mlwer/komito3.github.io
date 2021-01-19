$(window).load(function(){
	// 탑버튼
		$("#topbtn a").click(function(){
			$("html, body").stop().animate({
				scrollTop : 0
			},300);
		});
	// 탑버튼

	// gnb 네비
		var w_s = $(window).scrollTop();
		var m02_T = $(".m02-wrap").offset().top;
		var m03_T = $(".m03-wrap").offset().top;
		var m04_T = $(".m04-wrap").offset().top;
		var m05_T = $(".m05-wrap").offset().top;
		var m06_T = $(".m06-wrap").offset().top;

		if ( w_s < 100 )
		{
			$("#topbtn").stop().fadeOut("fast");
		} else {
			$("#topbtn").stop().fadeIn("fast");
		}

		$("#gnb01").click(function(){
			$("html, body").stop().animate({
				scrollTop : m02_T
			},300);
		});
		$("#gnb02").click(function(){
			$("html, body").stop().animate({
				scrollTop : m03_T
			},300);
		});
		$("#gnb03").click(function(){
			$("html, body").stop().animate({
				scrollTop : m04_T
			},300);
		});
		$("#gnb04").click(function(){
			$("html, body").stop().animate({
				scrollTop : m05_T
			},300);
		});
		$("#gnb05").click(function(){
			$("html, body").stop().animate({
				scrollTop : m06_T
			},300);
		});
		$("#f_nav01").click(function(){
			$("html, body").stop().animate({
				scrollTop : m04_T
			},300);
		});

		$(window).scroll(function(){
			var sw_s = $(window).scrollTop();
			var sm02_T = $(".m02-wrap").offset().top;
			var sm03_T = $(".m03-wrap").offset().top;
			var sm04_T = $(".m04-wrap").offset().top;
			var sm05_T = $(".m05-wrap").offset().top;
			var sm06_T = $(".m06-wrap").offset().top;

			$("#gnb01").click(function(){
				$("html, body").stop().animate({
					scrollTop : sm02_T
				},300);
			});
			$("#gnb02").click(function(){
				$("html, body").stop().animate({
					scrollTop : sm03_T
				},300);
			});
			$("#gnb03").click(function(){
				$("html, body").stop().animate({
					scrollTop : sm04_T
				},300);
			});
			$("#gnb04").click(function(){
				$("html, body").stop().animate({
					scrollTop : sm05_T
				},300);
			});
			$("#gnb05").click(function(){
				$("html, body").stop().animate({
					scrollTop : sm06_T
				},300);
			});
			$("#f_nav01").click(function(){
				$("html, body").stop().animate({
					scrollTop : sm04_T
				},300);
			});

			if ( sw_s < 100 )
			{
				$("#topbtn").stop().fadeOut("fast");
			} else {
				$("#topbtn").stop().fadeIn("fast");
			}
		});
	// gnb 네비
});