
$(function(){
	/* 页面动态*/ 
	//1.头部
	$(".act_a_btn").on("mouseover",function(){
		$(this).find("i").css("left","-15px");
		setTimeout(function(){
			$(".act_a_btn").find("i").css("left","-13px");
		},100);
	});
	//2.导航栏
	$(".act_top_btn a").each(function(index,item){
		$(item).on("mouseover",$(".act_top_btn"),function(){
			$(this).find("span").addClass("spanMove");
			$(this).find(".i_move").addClass("iMove1");
			$(this).find(".i_color").addClass("iMove2");
			$(this).addClass("act_top_btn_a");
		});
		$(item).on("mouseout",$(".act_top_btn"),function(){
			$(this).find("span").removeClass("spanMove");
			$(this).find(".i_move").removeClass("iMove1");
			$(this).find(".i_color").removeClass("iMove2");
			$(this).removeClass("act_top_btn_a");
		});
	});
	$(".act_top_nav_mid > a").each(function(index,item){
		$(item).on("mouseover",function(){
			$(this).find("strong").addClass("nav_strong");
			$(this).find("span").addClass("nav_span");
			$(this).find("i").addClass("nav_i");
		});
		$(item).on("mouseout",function(){
			$(this).find("strong").removeClass("nav_strong");
			$(this).find("span").removeClass("nav_span");
			$(this).find("i").removeClass("nav_i");
		});
	});
	//3.图片切换
	function switchPic(){
		var flag = true;
		setInterval(function(){
			if(flag){
				$(".hd-box1").css("display","none");
				$(".hd-box2").css("display","block");
				flag = false;
			}
			else {
				$(".hd-box2").css("display","none");
				$(".hd-box1").css("display","block");
				flag = true;
			}
		},4000);
	}
	switchPic();
	//4.获奖人员通告
	function getPrize(){
		var timeOver = ($("ul.huojiang li").length-1)*20;
		var top = 0;
		setInterval(function(){
			top -= 20;
			if(top + timeOver == 0){
				top = 0;
				$("ul.huojiang").css("transition","0s");
			}else {
				$("ul.huojiang").css("transition","0.3s");
			}
			$("ul.huojiang").css("top",top+"px");
		},600);
	}
	getPrize();
	//图片轮播
	function slidePic(){
		var picLength = $(".allPic img").length;
		var divWidth = (picLength+1)*427;
		$(".allPic").css({"width":divWidth+"px","left":(-picLength*427)+"px"});
		$(".allPic").append($(".allPic img:first").clone());
		for(var i = 0; i < picLength; i++){
			$(".circle").append("<li></li>");
		}
		var left = 0;
		var oLi = $(".circle li:first");
		oLi.addClass("color");
		setInterval(function(){
			var $pic = $(".allPic");
			oLi.removeClass("color");
			oLi = oLi.next();
			if(oLi.length == 0){
				oLi = $(".circle li:first");
			}
			oLi.addClass("color");
			if(parseInt($pic.css("left")) <= -picLength*427){
				left = 0;
				$pic.css({"transition":"0s","left":left+"px"});
				setTimeout(function(){
					left -= 427;
					$pic.css({"transition":"0.3s","left":left+"px"});
				},10);
			}else {
				left -= 427;
				$pic.css({"transition":"0.3s","left":left+"px"});
			}
		},4000);
	}
	slidePic();
	/*页面载入，登录*/
	$(".load_login").css("height",$("body").height());

	//1.关闭窗口
	$(".close").on("click",function(){
		$(".big").css("display","none");
	});
	//2.显示登录窗口
	//2.1 页面载入，自动显示
	$(".big").css("display","block");
	//2.2 点击登录
	$(".use_login .login").on("click",function(){
		$(".big").css("display","block");
	});
	//3.数据
	var data = [{
			qq:"1060852049",
			psd:"666666"
		},{
			qq:"1309887096",
			psd:"666666"
		},{
			qq:"1361716757",
			psd:"666666"
		}];
	//4.输入数据
	//4.1输入qq号时显示按钮x
	$(".qq input").on("input",function(){
		if($(this).val().length > 0){
			$(".qq p").css("display","block");
		}else {
			$(".qq p").css("display","none");
		}
	});
	//4.2点击按钮x，清空qq数据
	$(".clear").on("click",function(){
		$(".qq input").val("");
	})
	//4.3判断是否输入qq号正确
	$(".qq input").on("blur",function(){
		for(var item = 0; item < data.length; item++){
			if($(".qq input").val() == data[item].qq){
				$(".alert").css("visibility","hidden");
				break;
			}
			$(".alert").css("visibility","visible");
		};
	});
	//4.4提交，判断是否输入密码正确
	function submit(){
		var flag = false;
		data.forEach(function(item){
			if($(".qq input").val() == item.qq && $(".psd input").val() == item.psd){
				flag = true;
				$(".psd_alert").css("display","none");
			}else {
				$(".psd_alert").css("display","block");
			}
		});
		//登录成功
		if(flag){
			$(".big").css("display","none");
			$(".login_before").css("display","none");
			$(".login_after").css("display","block");
			$("#login_qq_span").html($(".qq input").val());
		}
	}
	$(".button").on("click",function(){
		submit();
	});
	$("body").on("keydown",function(e){
		if(e.keyCode == 13){
			 submit();
		}
	});
	//5.注销登录
	$(".login_after .back").on("click",function(){
		$(".big").css("display","block");
		$(".login_before").css("display","block");
		$(".login_after").css("display","none");
		$(".psd input").val("");
	});

	/*切换GIF图片*/
	$(".fc-find").on("mouseover",function(){
		$(".gif1").css("display","inline");
		$(".down3").css("display","inline");
		$(".pic1").css("display","none");
	});
	$(".fc-find").on("mouseout",function(){
		$(".gif1").css("display","none");
		$(".down3").css("display","none");
		$(".pic1").css("display","inline");
	});
})	