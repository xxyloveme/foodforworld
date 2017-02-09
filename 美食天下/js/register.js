
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
	
	$(".register_main ul li input").on({
		focus:function(){
			$(this).parent().next().css("visibility","visible");
		},
		blur:function(){
			$(this).parent().next().css("visibility","hidden");
		}
	})
	var tmp1 = true;
	$(".uname").blur(function(){
		$(this).parent().next().css("visibility","visible");
		var text = $(".uname").val();
		var pattern = /^[a-zA-Z0-9\u4e00-\u9fa5]{3,20}$/;
		if(pattern.test(text)){
			$.ajax({
			type:"get",
			url:"js/login.json",
			dataType:"json",
			success:function(data){				
			var flag=false;	
			console.log(data)
				$.each(data,function(key,val){
					console.log(val.username)
					if(val.username==text){					
					// 直接跳转到其他页面
				       flag=true;
					}
				});
				var obj= $.cookie();
				$.each(obj,function(k,v) {
//					var arr = v.split("|");
//					console.log(arr[1]);
					if(k==text){
						flag=true;
					}
				});
				if(flag==true){
				    $(".uname").parent().next().text("用户名被使用过").css("color","red")
					$(".uname").parent().css("border","1px solid red");
					tmp1=false;
				}else{
					tmp1=true;
				 	$(".uname").parent().next().text("用户名合法且未被使用过").css("color","green")
					$(".uname").parent().css("border","1px solid #999");
				}
			}
			
		})
		}
		else{
			$(".uname").parent().next().text("用户名不合法").css("color","red")
			$(".uname").parent().css("border","1px solid red");
			tmp1=false;
		}
	})
	tmp2=true;
	$(".pwd").blur(function(){
		$(this).parent().next().css("visibility","visible");
		 pwd = $(this).val();
		var pattern = /^[a-zA-Z0-9]{6,20}$/;
		if(pattern.test(pwd)){
			tmp2=true;
			$(".pwd").parent().next().text("密码合法").css("color","green")
			$(".pwd").parent().css("border","1px solid #999");
		}
		else if(pwd==""){
			$(".pwd").parent().next().text("密码不能为空").css("color","red")
			$(".pwd").parent().css("border","1px solid red");
			tmp2=false;
		}
		else{
			$(".pwd").parent().next().text("密码不合法").css("color","red")
			$(".pwd").parent().css("border","1px solid red");
			tmp2=false;
		}
	})
	tmp3=true;
	$(".pwd2").blur(function(){
		$(this).parent().next().css("visibility","visible");
		var pwd2 = $(this).val();
		if(pwd2==pwd&&pwd!=""){
			tmp3=true;
			$(".pwd2").parent().next().text("两次密码一致").css("color","green")
			$(".pwd2").parent().css("border","1px solid #999");
		}
		else{
			$(".pwd2").parent().next().text("两次密码不一致").css("color","red")
			$(".pwd2").parent().css("border","1px solid red");
			tmp3=false;
		}
	})
	tmp4=true;
	$(".tel").blur(function(){
		$(this).parent().next().css("visibility","visible");
		var tel = $(this).val();
		var pattern = /^1[3|5|8][0-9]{9}$/;
		if(pattern.test(tel)){
			tmp4=true;
			$(".tel").parent().next().text("手机号码合法").css("color","green")
			$(".tel").parent().css("border","1px solid #999");
		}
		else{
			$(".tel").parent().next().text("手机号码不合法").css("color","red")
			$(".tel").parent().css("border","1px solid red");
			tmp4=false;
		}
	})
	$(".get").click(function(){
		var str = "";
		while(str.length<4){
			str += parseInt(Math.random()*10);
		}
		$(".get").addClass("on5");
		$(".get").text(str);
	})
	tmp5=true;
	$(".yzm").blur(function(){
		$(this).parent().next().css("visibility","visible");
		var yzm = $(this).val();
		
		if(yzm==$(".get").text()){
			tmp5=true;
			$(".yzm").parent().next().text("验证码正确").css("color","green")
			$(".yzm").parent().css("border","1px solid #999");
		}
		else{
			$(".yzm").parent().next().text("验证码不正确").css("color","red")
			$(".yzm").parent().css("border","1px solid red");
			tmp5=false;
		}
	})
	$(".register-btn").click(function(){	
		if($(".uname").val()==""||$(".pwd").val()==""||$(".tel").val()==""){
			alert("请填写完整的用户信息");
			
		}
		else{
			if(tmp1&&tmp2&&tmp3&&tmp4&&tmp5){
				var name = $(".uname").val();
				var vals =""+$(".uname").val()+"|"+ $(".pwd").val()+"|"+$(".tel").val();
				$.cookie(name,vals,{expires: 7});
				alert("注册成功");
				window.location.href="login.html";
//				console.log($.cookie("aaa"));
			}
			else{
				alert("注册失败，注册信息填写不合法");
			}
		}
	})
})
