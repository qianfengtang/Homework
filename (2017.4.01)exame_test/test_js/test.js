var nav=document.getElementsByClassName("nav")[0];
var list=document.getElementsByClassName("list")[0];
var navli=nav.getElementsByTagName("li");
var odiv=list.getElementsByTagName("div");
	for(var i=0;i<navli.length;i++){
		navli[i].index=i;
		navli[i].onmouseover=function(){
			num=this.index;
			ftn();
		}
	}
	odiv[0].style.display="block";
	console.log(odiv[0])
	function ftn(){
		for(var j=0;j<navli.length;j++){
			odiv[j].style.display="none";
		}
		odiv[num].style.display="block";
	}
