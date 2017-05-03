//初始化变量
$(function(){
	//导航部分hover效果
	$(".tqf-nav-logo").hover(function(){
		$('em').css("display","block");
	},function(){
		$('em').css("display","none");
	});
	$(".tqf-nav-list ul>li").eq(2).hover(function(){
		$("this").find("span").css("background-position-x","-240px");
		$(".tqf-nav-list-bannar").css("display","block");
	});
	$(".tqf-nav-list-bannar").mouseleave(function(){
		$(this).css("display","none");
	});
	//广告部分切换效果
	var i=0,timer;
	$(".ad-box>li").eq(0).css("display","block");
	$(".btn-box>li").mouseenter(function(){
		i=$(this).index();
		ftn();
	});
	//设置切换函数
	function ftn(){
		$(".btn-box>li").eq(i).addClass("active").siblings().removeClass("active");
		/*$(".ad-box>li").eq(i).css("display","block").siblings().css("display","none");*/
		$(".ad-box>li").eq(i).stop().fadeIn(200).siblings().stop().fadeOut();
	}
	
});
