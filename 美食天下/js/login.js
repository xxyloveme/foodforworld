$(function(){
	/* 轮播背景图部分  */
	var index = 5;
	setInterval(function(){
			index--;  // 5  4  3  2  1 0
			if(index==0){	
				$(".box>img").eq(0).fadeIn(1000).siblings().fadeOut(1000);
				index=5;
			}
			else{
				$(".box>img").eq(index).fadeIn(1000).siblings().fadeOut(1000);
			}	
		},2000);
	
	/* 登录验证 */
	$(".login-btn").click(function(){
		var user = $(".username").val();
		var pwd = $(".passwd").val();
//		var $data = $("input").serialize();
		$.ajax({
			type:"get",
			url:"js/login.json",
			dataType:"json",
			success:function(data){				
			var flag=false;
				$.each(data,function(key,val){
				
					if(val.username==user&&val.passwd==pwd){
					
					// 直接跳转到其他页面
				      
				       flag=true;
					}
				});
				
				var obj= $.cookie();
				$.each(obj,function(k,v) {
					var arr = v.split("|");
//					console.log(arr[1]);
					if(k==user&&arr[1]==pwd){
						flag=true;
					}
				});
				if(flag!=true){
				        alert("用户名或密码不正确");
				}else{
				 window.location.href="index.html";
				}
			}
			
		})
	})
})
