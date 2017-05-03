window.onload=function(){
	//contain-left开始
	var headul=document.getElementsByClassName("header-list")[0];
	var headnav=document.getElementsByClassName("header-nav")[0];
	var headli=headul.getElementsByTagName("li");
	var adul=document.getElementsByClassName('ad')[0];
	var adli=adul.getElementsByTagName("li");
	for(var i=0;i<headli.length;i++){
		headli[i].index=i;
		headli[i].onmouseover=function(){
			num=this.index;
			ftn();
		}
	}
	adli[0].style.display="block";
	function ftn(){
		for(var j=0;j<headli.length;j++){
		headnav.style.backgroundPositionY="-1000px";
		adli[j].style.display="none";
		headnav.style.backgroundPositionY=-num*38+"px";
		adli[num].style.display="block";
		}
	}
	//contain-left结束
	//contain-right开始
	var user=document.getElementsByClassName("userchoose")[0];
	var chooseli=user.getElementsByTagName("li");
	var logincon=document.getElementsByClassName("logincon")[0];
	var loginli=logincon.getElementsByTagName("li");
	for(var i=0;i<chooseli.length;i++){
		chooseli[i].index=i;
		chooseli[i].onclick=function(){
			num=this.index;
			logincheck();
		}
	}
	loginli[0].style.display="block";
	function logincheck(){
		for(var j=0;j<chooseli.length;j++){
			chooseli[j].id="";
			loginli[j].style.display="none";
		}
		chooseli[num].id="current";
		loginli[num].style.display="block";
	}
	//contain-right结束
}
