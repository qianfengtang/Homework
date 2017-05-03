//初始化设置
$(function(){
	$(".pic>li").eq(0).show();
	$(".btn>li").eq(0).addClass("current");
	var i=0,timer;
	var size=$(".pic>li").size();
	//设置按钮点击效果
	$(".btn>li").click(function(){
		i=$(this).index();
		ftn();
	});
	//设置变换函数
	function ftn(){
		$(".btn>li").eq(i).addClass("current").siblings().removeClass("current");
		$(".pic>li").eq(i).stop().fadeIn(300).siblings().stop().fadeOut(300);
	}
	//设置自动播放函数
	function autoplay(){
		timer=setInterval(function(){
			i++;
			i%=size;
			ftn();
		},2000);
	}
	//设置自动播放的条件
	$(".contain").hover(function(){
		clearInterval(timer);
	},function(){
		autoplay();
	});
	setTimeout(autoplay(),1000);
	//设置右侧按钮切换效果
	$(".arrow2").click(function(){
		i++;
		if(i==size){
			i=0
		}
		ftn();
	});
	$(".arrow1").on("click",function(){
		i--;
		if(i==-1){
			i=size-1;
		}
		ftn();
	}
	);
	//设置缩略图显示函数
	$(".btn>li").hover(function(){
		var j;
		j=$(this).index();
		$(".suolue>li").eq(j).stop().fadeIn(300).siblings().stop().fadeOut(300);
	},function(){
		$(".suolue>li").stop().fadeOut(300);
	});
	});
	
	
