	//初始化变量
	var pic=document.getElementsByClassName("pic")[0];
	var btn=document.getElementsByClassName("btn")[0];
	var oimg=pic.getElementsByTagName("li");
	var olist=btn.getElementsByTagName("li");
	var btn_left=document.getElementsByClassName("arrow1")[0];
	var btn_right=document.getElementsByClassName("arrow2")[0];
	var contain=document.getElementsByClassName("contain")[0];
	//定义btn的事件
	for(var i=0;i<olist.length;i++){
		olist[i].index=i;
		olist[i].onclick=function(){
			num=this.index;
			ftn();
		}
	}
	//定义动作函数
	oimg[0].style.display="block";
	function ftn(){
		for(var j=0;j<olist.length;j++){
			olist[j].id="";
			oimg[j].style.display="none";
		}
		olist[num].id="current";
		oimg[num].style.display="block";
	}
	//定义定时器自动轮播
	var timer=null;
	var num=0;
	function autoplay(){
		timer=setInterval(function(){
		num++;
		num%=olist.length;
		ftn();
		},2000)
		return num;
	}
	contain.onmouseout=function(){
		autoplay();
	}
	contain.onmouseover=function(){
		clearInterval(timer);
		
	}
	setTimeout(autoplay(),1000);
	//定义按钮动作
	btn_left.onclick=function(){
		num--;
		if(num<0){
			num=9;
		}
		num%=olist.length;
		ftn();
	}
	btn_right.onclick=function(){
		num++;
		num%=olist.length;
		ftn();
	}
