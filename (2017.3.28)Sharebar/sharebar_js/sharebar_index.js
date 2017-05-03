	var menu2 =document.getElementsByClassName("menu2")[0];
	var sharebar=document.getElementsByClassName("sharebar")[0];
	sharebar.onmouseover=function(){
		move(1646,-1);
	}
	sharebar.onmouseout=function(){
		move(1920,1);
	}
	//封装函数
	var timer=null;
 	function move(a,b){
 		clearInterval(timer);
 		timer=setInterval(function(){
 			if(sharebar.style.left==a+"px"){
 				clearInterval(timer);
 			}else{
 				sharebar.style.left=sharebar.offsetLeft+b+'px';
 			}
 		},1)
 		
 	}

