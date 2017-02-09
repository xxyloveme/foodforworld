$(function(){
	/* logo部分 */
	$("#btn").mouseenter(function(){
		$(this).css("background-color","#FF5757")
	})
	$("#btn").mouseleave(function(){
		$(this).css("background-color","#999")
	})
	
	/* 头部 */
	$(".top .pics li a span").mouseenter(function(){
		$(this).siblings("img").css("transition","all 1s");
		$(this).siblings("img").css("transform","scale(1.2)");
	})
	$(".top .pics li a span").mouseleave(function(){
		$(this).siblings("img").css("transition","all 1s");
		$(this).siblings("img").css("transform","scale(1)");
	})
	/* 图片滚动部分 */
	var i=0;
	$("#left").click(function(){
		i++;
		if(i>=3){
			i=3;
			$("#pics .pics").animate({"left":-1035*3},2000);
		}
		$("#pics .pics").animate({"left":-1035*i},2000);
		
	})
	$("#right").click(function(){
		i--;
		if(i<=0){
			i=0;
			$("#pics .pics").animate({"left":-1035*0},2000);
		}
		$("#pics .pics").animate({"left":-1035*i},2000);
		
	})
	/*所有菜谱* */
	$(".all").on({
		mouseenter:function(){
			$(this).css("color","#ff5757");
			$(this).children("a").css("color","#ff5757")
			$(".all-menu").slideDown(500);
		},
		mouseleave:function(){
			$(this).css("color","#333");
			$(this).children("a").css("color","#333")
			$(".all-menu").slideUp(500);
		}
	})
//	$(".all-menu").on({
//		mouseenter:function(){
//			$(this).css("color","#ff5757");
//			$(".all-menu").show();
//		},
//		mouseleave:function(){
//			$(".all").css("color","#333");
//			$(this).slideUp(500);
//		}
//	})
	/* 小图标 */
	$(".top .icons li").on({
		mouseenter:function(){
			$(this).find("span").css("color","#ff5757");
		},
		mouseleave:function(){
			$(this).find("span").css("color","#333");
		},
	})
	
	
	/*  主要内容块 tab切换  */
	$(".food_head>a").eq(0).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".new_tj .uls").fadeIn(1000);
	})
	$(".food_head>a").eq(1).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".new_fb .uls").fadeIn(1000);
	})
	$(".food_head>a").eq(2).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".recai .uls").fadeIn(1000);
	})
	$(".food_head>a").eq(3).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".liangcai .uls").fadeIn(1000);
	})
	$(".food_head>a").eq(4).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".tanggeng .uls").fadeIn(1000);
	})
	$(".food_head>a").eq(5).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".zhushi .uls").fadeIn(1000);
	})
	$(".food_head>a").eq(6).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".xiaochi .uls").fadeIn(1000);
	})
	$(".food_head>a").eq(7).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".xican .uls").fadeIn(1000);
	})
	$(".food_head>a").eq(8).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".hongbei .uls").fadeIn(1000);
	})
	$(".food_head>a").eq(9).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".madeself .uls").fadeIn(1000);
	})
	$(".uls li").on({
		mouseenter:function(){
			$(this).find("img").css("transition","all 1s");
			$(this).find("img").css("transform","scale(1.2)");
//			$(this).find("p").css("color","#ff5757");
		},
		mouseleave:function(){
			$(this).find("img").css("transition","all 1s");
			$(this).find("img").css("transform","scale(1)");
//			$(this).find("p").css("color","#333");
		}
	})
	$(".uls li span").on({
		mouseenter:function(){
			$(this).css("color","#ff5757");
		},
		mouseleave:function(){
			$(this).css("color","#999");
		}
	})
	$(".uls li a").on({
		mouseenter:function(){
			$(this).siblings("p").css("color","#ff5757");
		},
		mouseleave:function(){
			$(this).siblings("p").css("color","#333");
		}
	})
	$(".uls li p").on({
		mouseenter:function(){
			$(this).css("color","#ff5757");
		},
		mouseleave:function(){
			$(this).css("color","#333");
		}
	})
	
	/*回到顶部*/
	$(document).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop>=50){
			$(".scroll").fadeIn(1000);
			if(scrollTop>=1570){
				$(".bottom .scroll").css("bottom","60px");
			}
			else{
				$(".bottom .scroll").css("bottom","20px");
			}
		}
		if(scrollTop>=500){
			$(".food_head").addClass("position");
		}
		else{
			$(".scroll").hide();
			$(".food_head").removeClass("position");
		}
		$(".scroll").click(function(){
			$("body").animate({scrollTop:0},1000);
			return false;
		})
	})
})