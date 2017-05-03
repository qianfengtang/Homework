//入口函数
$(function(){
	//左侧导航hover效果
	$(".nav-left>li").mouseenter(function(){
		var preindex=$(".nav-left>li").filter(".current").index();
		var currentindex=$(this).index();
		play(preindex,currentindex);
	});
	function play(preindex,currentindex){
		$(".nav-left ul").eq(preindex).css("display","none");
		$(".nav-left>li").eq(preindex).removeClass("current");
		$(".nav-left ul").eq(currentindex).css("display","block");
		$(".nav-left>li").eq(currentindex).addClass("current");
	}
	//左侧导航hover移除效果
	$(".nav-left").mouseleave(function(){
		var preindex=$(".nav-left>li").filter(".current").index();
		$(".nav-left ul").eq(preindex).css("display","none");
		$(".nav-left>li").eq(preindex).removeClass("current");
		$(".nav-left ul").eq(0).css("display","block");
		$(".nav-left>li").eq(0).addClass("current");
	});
	//右侧导航hover效果
	$(".nav-right").hover(function(){
		$(".list-contain").show();	
	},
	function(){
		$(".list-contain").hide();
	});
	//左侧广告点击效果
	
	$(".btn>li").click(function(){
		$(this).addClass("btn-style").siblings().removeClass("btn-style");
		var currentindex=$(this).index();
		$(".ad>li").eq(currentindex).css("display","block").siblings().css("display","none");
	});
	//左侧广告子菜单点击效果
	$(".bar>div").click(function(){
		var currentindex=$(this).index();
		$(this).addClass("bar-style").siblings().removeClass("bar-style");
		$(".bar-contain>li").eq(currentindex).show().siblings().hide();
	});
	//右侧轮播开始
	//设置初始化
	var i=0,timer;
	var size=$(".pic>li").size();
	console.log(size);
	$(".pic>li").eq(0).css("display","block");
	//设置按钮切换效果
	$(".ad-btn>li").click(function(){
		i=$(this).index();
		ftn();
	});
	//设置变换函数
	function ftn(){
		$(".ad-btn>li").eq(i).addClass("current").siblings().removeClass("current");
		console.log(i);
		$(".pic>li").eq(i).stop().fadeIn(100).siblings().stop().fadeOut(100);
	}
	//设置自动播放函数
	function autoplay(){
		timer=setInterval(function(){
		i++;
		i%=size;
		ftn();
		},2000);	
	}
	$(".contain").hover(function(){
		clearInterval(timer);
	},function(){
		autoplay();
	});
	setTimeout(autoplay(),1000);
	//设置按钮播放模式
	$(".arrow2").click(function(){
		i++;
		if(i==size){
			i=0;
		}
		ftn();
	});
	$(".arrow1").click(function(){
		i--;
		if(i==-1){
			i=size-1;
		}
		ftn();
	});
});
