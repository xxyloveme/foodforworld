$(function(){
	
	/* logo部分 */
	$("#btn").mouseenter(function(){
		$(this).css("background-color","#FF5757")
	})
	$("#btn").mouseleave(function(){
		$(this).css("background-color","#999")
	})
	/* 轮播图部分 */
	
	$(".bg_top>ul>li").mouseenter(function(){
		$(this).css("background","#ff6767").children("ul").show();
	})
	$(".bg_top>ul>li").mouseleave(function(){
		$(this).css("background","none").children("ul").hide();
	})
	$(".bg_top>ul>li>ul>li>a ").mouseenter(function(){
		$(this).css("color","#777").children("span").css("color","#FF6767");
	})
	$(".bg_top>ul>li>ul>li>a").mouseleave(function(){
		$(this).css("color","#999").children("span").css("color","#333");
	})
	var index=6;
	var temp=-1;
	var timer=setInterval(show,3000);
	function show(){
		index--;  // 5  4  3  2  1 0
		temp++;    // 0 1  2  3  4 5 
//		console.log(index);		
		$(".list>li").eq(temp).addClass("border").siblings("li").removeClass("border");
		if(index==0){	
			$("#list>li").eq(0).fadeIn(1000).siblings().fadeOut(1000);
			index=6;
			temp=-1;
		}
		else{
			$("#list>li").eq(index).fadeIn(1000).siblings().fadeOut(1000);
		}	
	}
	$(".bg>span").mouseenter(function(){
		$(this).css("background","rgba(0,0,0,0.4)");
	})
	$(".bg>span").mouseleave(function(){
		$(this).css("background","none");
	})
	$("#left").click(function(){
		clearInterval(timer);
		$("#list>li").eq(index+1).fadeIn(1000).siblings().fadeOut(1000);
		$(".list>li").eq(temp-1).addClass("border").siblings("li").removeClass("border");
		index=index+1;
		temp=temp-1;
		setInterval(show,3000);
	})
	$("#right").click(function(){
		clearInterval(timer);
		$("#list>li").eq(index-1).fadeIn(1000).siblings().fadeOut(1000);
		$(".list>li").eq(temp+1).addClass("border").siblings("li").removeClass("border");
		setInterval(show,3000);
	})
	$(".list>li").click(function(){
		clearInterval(timer);
		$(this).addClass("border").siblings("li").removeClass("border");
		var param = 5-$(this).index();
		$("#list>li").eq(param).fadeIn(1000).siblings().fadeOut(1000);
		temp = $(this).index();
		index = param;
		setInterval(show,2000);
	})
	
	/* 内容轮播部分 */
	$(".content").mouseenter(function(){
		$(".content>span").show();
	})
	$(".content").mouseleave(function(){
		$(".content>span").hide();
	})
	$(".content>span").mouseenter(function(){
		$(this).addClass("bg_content");
	})
	$(".content>span").mouseleave(function(){
		$(this).removeClass("bg_content");
	})
	var i=0;
	$(".content>.left").click(function(){
		i++;
		if(i>=5){
			i=5;
			$(".content .content_div ul").animate({"left":-910*5},2000);
		}
		$(".content .content_div ul").animate({"left":-910*i},2000);
		
	})
	$(".content>.right").click(function(){
		i--;
		if(i<=0){
			i=0;
			$(".content .content_div ul").animate({"left":-910*0},2000);
		}
		$(".content .content_div ul").animate({"left":-910*i},2000);
		
	})
	
	/*信息部分*/
	$(".messages .others").mouseenter(function(){
		$(this).css("color","#FF5757")
	})
	$(".messages .others").mouseleave(function(){
		$(this).css("color","#000")
	})
	$(".health>ul>li>a").mouseenter(function(){
		$(this).css("color","#FF5757").children("span").css("border","2px solid #FF5757");
	})
	$(".health>ul>li>a").mouseleave(function(){
		$(this).css("color","#333").children("span").css("border","2px solid #ccc");
	})
	$(".hongbei>ul>li>a").mouseenter(function(){
		$(this).css("color","#FF5757").children("span").css("border","2px solid #FF5757");
	})
	$(".hongbei>ul>li>a").mouseleave(function(){
		$(this).css("color","#333").children("span").css("border","2px solid #ccc");
	})
	$(".for_you>ul>li>a").mouseenter(function(){
		$(this).css("color","#FF5757").children("span").css("border","2px solid #FF5757");
	})
	$(".for_you>ul>li>a").mouseleave(function(){
		$(this).css("color","#333").children("span").css("border","2px solid #ccc");
	})
	$(".messages_left_head>a").eq(1).click(function(){
		$(".health").hide();
		$(".eat_health").children().fadeIn(500);
		$(this).addClass("on").siblings("a").removeClass("on");
	})
	$(".messages_left_head>a").eq(0).click(function(){
		$(".eat_health").children().hide();
		$(".health").fadeIn(500);		
		$(this).addClass("on").siblings("a").removeClass("on");
	})
	$(".messages_center_head>a").eq(1).click(function(){
		$(".hongbei").hide();
		$(".shipu").children().fadeIn(500);
		$(this).addClass("on").siblings("a").removeClass("on");
	})
	$(".messages_center_head>a").eq(0).click(function(){
		$(".shipu").children().hide();
		$(".hongbei").fadeIn(500);		
		$(this).addClass("on").siblings("a").removeClass("on");
	})
	$(".eat_health>ul>li a").mouseenter(function(){
		$(this).addClass("on1");
	})
	$(".eat_health>ul>li a").mouseleave(function(){
		$(this).removeClass("on1");
	})
	$(".shipu>ul>li a").mouseenter(function(){
		$(this).addClass("on1");
	})
	$(".shipu>ul>li a").mouseleave(function(){
		$(this).removeClass("on1");
	})
	
	/*  美食部分  */
	$(".food_head>a").eq(0).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".new_food .uls").fadeIn(1000);
	})
	$(".food_head>a").eq(1).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".hot_food .uls").fadeIn(1000);
	})
	$(".food_head>a").eq(2).click(function(){
		$(this).addClass("on2").siblings("a").removeClass("on2");
		$(".uls").hide();
		$(".popular_food .uls").fadeIn(1000);
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
	/* 话题部分  */
	$(".rizhi>li").mouseenter(function(){
		$(this).children("a").children("img").css("transition","all 1s");
		$(this).children("a").children("img").css("transform","scale(1.2)");
	})
	$(".rizhi>li").mouseleave(function(){
		$(this).children("a").children("img").css("transition","all 1s");
		$(this).children("a").children("img").css("transform","scale(1)");
	})
	$(".rizhi>li>p").mouseenter(function(){
		$(this).css("color","#FF5757");
	})
	$(".rizhi>li>p").mouseleave(function(){
		$(this).css("color","#333");
	})
	$(".rizhi>li>a").mouseenter(function(){
		$(this).siblings("p").css("color","#FF5757");
	})
	$(".rizhi>li>a").mouseleave(function(){
		$(this).siblings("p").css("color","#333");
	})
	$(".rizhi>li>span").mouseenter(function(){
		$(this).css("color","#FF5757");
	})
	$(".rizhi>li>span").mouseleave(function(){
		$(this).css("color","#999");
	})
	/*
	 json 数据
	 */
	
	
	$.ajax({
		url:"js/data.json",
		type:"get",
		async:false,
		dataType:"json",
		success:function(result){
			$.each(result, function(key,val) {
				var uLi = $("<li></li>");
				var div = $("<div class='u'></div>");
				var uA1 = $("<a href='#'></a>");
				var img = $("<img src="+val.head+" />");
				var name = $("<div class='name'></div>");
				var uA2= $("<a href='#'>"+val.name+"</a>");
				var span = $("<span>"+val.time+"</span>");
				uA1.append(img);
				name.append(uA2);
				name.append(span);
				div.append(uA1);
				div.append(name);
				uLi.append(div);
				//创建一个div，里面装内容和图片
				var div1 = $("<div class='c'></div>");
				//创建一个div，里面装标题和文字
				var div2 = $("<div class='p_title'></div>");
				//创建一个a标签，里面放上内容
				var a = $("<a href='#'>"+val.content+"</a>");
				//创建一个strong标签装标题
				var strong = $("<strong>"+val.title+"</strong>");
				//把strong标签插入到a标签的内容前面
				a.prepend(strong);
				//把a标签插入到div里面
				div2.append(a);
				div1.append(div2);
				//再创建a标签放图片
				for(var i=0;i<val.urls.length;i++){
					var a2 = $("<a href='#' class='clear'></a>");
//					console.log(val.urls[i])
					var imgs = $('<img src='+val.urls[i]+' />');
					a2.append(imgs);
					div1.append(a2);
					uLi.append(div1);
				}
//				console.log(val.urls.length);
//				var a2 = $("<a href='#'></a>");
//				uLi.append(div1);
				$(".hot_discuss").append(uLi);
				
			});
		}
	});
	
	/*tab切换*/
	$(".discuss .hot_discuss li img").css("transform","scale(1)");
	$(".discuss_title>a").eq(0).click(function(){
		$(this).addClass("on4").siblings("a").removeClass("on4");
		$(".hot_discuss").fadeIn(1000);
		$(".rizhi").hide();
	})
	$(".discuss_title>a").eq(1).click(function(){
		$(this).addClass("on4").siblings("a").removeClass("on4");
		$(".rizhi").fadeIn(1000);
		$(".hot_discuss").hide();
	})

	
	/*回到顶部*/
	$(document).scroll(function(){
		var scrollTop = $(document).scrollTop();
		if(scrollTop>=50){
			$(".scroll").fadeIn(1000);
			if(scrollTop>=3800){
				$(".bottom .scroll").css("bottom","60px");
			}
			else{
				$(".bottom .scroll").css("bottom","20px");
			}
		}
		else{
			$(".scroll").hide();
		}
		
	})
	$(".scroll").click(function(){
			$("body").animate({scrollTop:0},1000);
			return false;
		})
//	function scrolltop(){
//      if(window.pageYOffset != null){
//          return {
//              top : window.pageYOffset,
//              left : window.pageXOffset
//          }
//
//      } else if(document.compatMode == "CSS1Compat"){
//
//          return {
//              top : document.documentElement.scrollTop,
//              left : document.documentElement.scrollLeft
//          }
//      }
//      return {
//          top : document.body.scrollTop,
//          left : document.body.scrollLeft
//      }
//
//  }
})

