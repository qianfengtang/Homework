/*//js面向过程写法
//初始化变量
	var pic=document.getElementsByClassName("pic")[0];
	var btn=document.getElementsByClassName("btn")[0];
	var oimg=pic.getElementsByTagName("li");
	var olist=btn.getElementsByTagName("li");
	var btn_left=document.getElementsByClassName("arrow1")[0];
	var btn_right=document.getElementsByClassName("arrow2")[0];
	var contain=document.getElementsByClassName("contain")[0];
	//定义btn的事件
	oimg[0].style.display="block";
	for(var i=0;i<olist.length;i++){
		olist[i].index=i;
		olist[i].onmouseover=function(){
			num=this.index;
			ftn();
		}
	}
	//定义动作函数
	function ftn(){
		for(var j=0;j<olist.length;j++){
			olist[j].id="";
			oimg[j].style.display="none";
			oimg[j].id="";
			
		}
		olist[num].id="current";
		oimg[num].style.display="block";
		oimg[num].id="guodu";
	}
	//定义定时器自动轮播
	var timer=null;
	var num=0;
	contain.onmouseout=function(){
		autoplay();
	}
	contain.onmouseover=function(){
		clearInterval(timer);
		
	}
	setTimeout(autoplay(),1000);
	function autoplay(){
		timer=setInterval(function(){
		num++;
		num%=olist.length;
		ftn();
		},2000)
		return num;
	}
	
	//定义按钮动作函数
	btn_left.onclick=function(){
		num--;
		if(num<0){
			num=6;
		}
		ftn();
		
	}
	btn_right.onclick=function(){
		num++;
		if(num==7){
			num=0;
		}
		ftn();
	}*/
//js面向对象写法
	//赋值新对象
	window.onload=function(){
		var p1=new Lb("contain");
		p1.init();
		p1.autoplay(2000);
	}
	//构造函数申明对象
	function Lb(c_name){
		this.oContain=document.getElementsByClassName(c_name)[0];
		this.oPic=this.oContain.getElementsByClassName("pic")[0];
		this.oImg=this.oPic.getElementsByTagName("li");
		this.oBg=this.oContain.getElementsByClassName("btn")[0];
		this.oBtn=this.oBg.getElementsByTagName("li");
		this.oIndex=0;
		this.timer;
		this.btn_left=this.oContain.getElementsByClassName("arrow1")[0];
		this.btn_right=this.oContain.getElementsByClassName("arrow2")[0];
	}
	//设置初始化对象
	Lb.prototype.init=function(){
		this.oBtn[0].id="current";
		this.oImg[0].id="guodu";
		this.oImg[0].style.display="block";
		var This=this;
		for(var i=0;i<this.oBtn.length;i++){
			this.oBtn[i].index=i;
			this.oBtn[i].onmouseover=function(){
				This.oIndex=this.index;
				This.ftn(This.oIndex);
			}
		}
		this.oContain.onmouseenter=function(){
			This.set_pause();
		}
		this.oContain.onmouseleave=function(){
			This.autoplay(2000);
		}
		this.btn_left.onclick=function(){
			This.oIndex--;
		if(This.oIndex<0){
			This.oIndex=This.oBtn.length-1;
		}
			This.ftn(This.oIndex);
		}
		this.btn_right.onclick=function(){
			This.oIndex++;
		if(This.oIndex==oBtn.length){
			This.oIndex=0;
		}
			This.ftn(This.oIndex);
		}
	}
	//设置动作方法
	Lb.prototype.ftn=function(m_index){
		for(var j=0;j<this.oBtn.length;j++){
			this.oBtn[j].id="";
			this.oImg[j].id="";
			this.oImg[j].style.display="none";
		}
		this.oBtn[m_index].id="current";
		this.oImg[m_index].style.display="block";
		this.oImg[m_index].id="guodu";
	}
	//设置自动播放方法
	Lb.prototype.autoplay=function(s){
		var This=this;
		this.timer=setInterval(function(){
			if(This.oIndex==This.oBtn.length){
				This.oIndex=0;
			}
			This.oIndex++;
			This.ftn(This.oIndex);
		},s)
	}
	//设置暂停方法
	Lb.prototype.set_pause=function(){
		var This=this;
		clearInterval(This.timer);
	}
	//设置点击左键方法
	
	
