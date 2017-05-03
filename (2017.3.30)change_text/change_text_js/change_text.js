	var p1=document.getElementsByClassName("pragraph")[0];
	var p2=document.getElementsByClassName("text")[0];
	var str1=p1.innerHTML;
	/*var str_array=str1.split("");*/
	var timer=null;
	var i=0;
	function autoplay(){
		timer=setInterval(
			function(){
				if(i<str1.length){
					p2.innerHTML+=str1.charAt(i).fontcolor("red");
				}else{
					clearInterval(timer);
				}
				i++;
				console.log(i);
			},100)
	}
	setTimeout(autoplay(),1000);
