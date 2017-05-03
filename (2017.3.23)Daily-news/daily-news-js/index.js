window.onload=function(){
	var ad_contant=document.getElementsByClassName("ad-contant")[0];
	var nav_list=document.getElementsByClassName("nav-list")[0];
	var word_list=nav_list.getElementsByTagName("li");
	var pic_list=ad_contant.getElementsByTagName("li");
	var owrap=document.getElementsByClassName("wrap")[0];
	pic_list[0].style.display='block';
	for(var i=0;i<word_list.length;i++){
		word_list[i].num=i;
		word_list[i].onmouseover=function(){
			num=this.num;
			ftn();
		}
	}
	function ftn(){
		for(var j=0;j<word_list.length;j++){
			word_list[j].className="";
			pic_list[j].style.display="none";
		}
		word_list[num].className="active";
		pic_list[num].style.display="block";
	}
	var num=0;
	var timer=null;
	function autoplay(){
		timer=setInterval(function(){
			num++;
			num%=word_list.length;
			console.log(num);
			ftn();
		},2000);
	}
	owrap.onmouseover=function(){
		clearInterval(timer);
	}
	owrap.onmouseout=function(){
		autoplay();
	}
}
