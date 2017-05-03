//导航部分hover效果
$(function(){
	$(".set").hover(function(){
		$(".tqf-set-btn").stop().slideDown(200);
	},function(){
		$(".tqf-set-btn").stop().slideUp(200);
	});
	$(".tqf-more").hover(function(){
		$(".tqf-more-list").stop().slideDown(200);
	},function(){
		$(".tqf-more-list").stop().slideUp(200);
	});
	//登录点击遮罩效果
	$(".lg").click(function(){
		$(".tqf-mask").css("display","block");
		$(".tqf-login-bar").css("display","block");
	});
	//获取对象和事件偏移
	$(".zhanghao").bind("mousedown",function(event){
		var offset_x=$(".tqf-login-bar").offset().left;
		var offset_y=$(".tqf-login-bar").offset().top;
		var mouse_x = event.pageX;
        var mouse_y = event.pageY;
        //绑定拖动事件
		$(document).bind("mousemove",function(ev){
			var x=ev.pageX-mouse_x;
			var y=ev.pageY-mouse_y;
			var now_x = (offset_x +x ) + "px";
          	var now_y = (offset_y +y ) + "px";
          	$(".tqf-login-bar").css({
          		"left":now_x,
          		"top":now_y
          	});
		});
	});
	//设置鼠标松开的效果
	$(document).bind("mouseup",function(){
		$(this).unbind("mousemove");
	});
	//登录条关闭效果
	$(".tqf-close").click(function(){
		$(".tqf-mask").css("display","none");
		$(".tqf-login-bar").css("display","none");
	});
});
//http://www.jb51.net/Special/430.htm