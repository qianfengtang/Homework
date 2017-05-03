//初始化变量
	var i=0,timer;
	//为pic追加第一张图片到末尾
	var clone=$(".pic li").first().clone();
	$(".pic").append(clone);
	var size=$(".pic>li").size();
	console.log(size);
	//动态增加按钮列表
	for(var j=0;j<size-1;j++){
		$(".btn").append("<li></li>");
	}
	$(".btn>li").eq(0).addClass("current");
	//实现按钮点击切换效果
	$(".btn>li").click(function(){
		i=$(this).index();
		$(".btn>li").eq(i).addClass("current").siblings().removeClass("current");
		$(".pic").stop().animate({"left":-i*520},200);
	});
	//设置播放函数
	function play(){
		if(i==size){
			$(".pic").css({"left":0});
			i=1;
		}
		if(i==-1){
			$(".pic").css({"left":-(size-1)*520},200);
			i=size-2;
		}
		$(".pic").stop().animate({"left":-i*520},200);
		if(i==size-1){
			$(".btn>li").eq(0).addClass("current").siblings().removeClass("current");	
		}else{		
			$(".btn>li").eq(i).addClass("current").siblings().removeClass("current");	
		}
	}
	//设置自动播放
	function autoplay(){
		timer=setInterval(function(){
			i++;
		play();
		},1000);
	}
	$(".contain").hover(function(){
		clearInterval(timer);
	},function(){
		autoplay();
	});
	setTimeout(autoplay(),1000);
	//设置左侧点击按钮事件
	$(".arrow1").click(function(){
		i++;
		play();
	});
	$(".arrow2").click(function(){
		i--;
		play();
	});
	
	
