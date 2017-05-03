window.onload=function(){
	/*nav begin*/
	var mallh=document.getElementsByClassName("mall-h")[0];
	var shequh=document.getElementsByClassName("shequ-h")[0];
	var seclist1=document.getElementsByClassName("sec-list1")[0];
	var seclist2=document.getElementsByClassName("sec-list2")[0];
	var arrow1=document.getElementsByClassName("arrow1")[0];
	var arrow2=document.getElementsByClassName("arrow2")[0];
	mallh.onmouseover=function(){
		arrow1.style.transform="rotateZ(180deg)";
	}
	mallh.onmouseout=function(){
		arrow1.style.transform="rotateZ(0deg)";
	}
	shequh.onmouseover=function(){
		arrow2.style.transform="rotateZ(180deg)";
	}
	shequh.onmouseout=function(){
		arrow2.style.transform="rotateZ(0deg)";
	}
	/*nav end*/
	/*bannar begin*/
	var bannar=document.getElementsByClassName("bannar")[0];
	var piclist=document.getElementsByClassName('pic-list')[0];
	var piclist_li=piclist.getElementsByTagName('li');
	var wordlist=document.getElementsByClassName("word-list")[0];
	var wordlist_li=wordlist.getElementsByTagName("li");
	piclist_li[0].style.display="block";
	for(var i=0;i<wordlist_li.length;i++){
		wordlist_li[i].index=i;
		wordlist_li[i].onclick=function(){
			num=this.index;
			ftn();
		}
	}
	function ftn(){
		for(var j=0;j<wordlist_li.length;j++){
			wordlist_li[j].className="";
			piclist_li[j].style.display="none";
			wordlist_li[num].className="active";
			piclist_li[num].style.display="block";
		}
	}
	num=0;
	timer=null;
	function autoplay(){
		timer=setInterval(function(){
			num++;
			num%=wordlist_li.length;
			ftn();
		},2000)
	}
	bannar.onmouseover=function(){
		clearInterval(timer);
	}
	bannar.onmouseout=function(){
		autoplay();
	}
	/*bannar end*/
}
