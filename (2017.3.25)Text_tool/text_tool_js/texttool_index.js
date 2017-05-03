window.onload=function(){
	var add=document.getElementById("add");
	var remove=document.getElementById("remove");
	var small=document.getElementById("big");
	var big=document.getElementById("small");
	var contain=document.getElementsByClassName("contain")[0];
	function bg() {
				var r = Math.floor(Math.random() * 256);
				var g = Math.floor(Math.random() * 256);
				var b = Math.floor(Math.random() * 256);
				return "rgb(" + r + ',' + g + ',' + b + ")"; //所有方法的拼接都可以用ES6新特性`其他字符串{$变量名}`替换
			}
		//设置随机rgb值
	add.onclick=function(){
		//插入li元素
		var oli=document.createElement("li");
	 	if(contain.children[0]){
	 		contain.insertBefore(oli,contain.children[0]);
	 	}else{
	 		contain.appendChild(oli);
	 	}
		oli.style.backgroundColor=bg();
		//设置时间div
		var time=document.createElement('div');
	 	oli.appendChild(time);
	 	time.setAttribute("class","time");
	 	var date=new Date();
	 	var apm	= "AM";
		if(date.getHours()>12){
			apm	= "PM";
		}
		time.innerHTML	= date.getMonth()+"/"+date.getDay()+"/"+date.getFullYear()+"&nbsp;"
						+date.getHours()+":"+date.getMinutes()+"&nbsp;"+apm;
		//设置文本div
		var txt=document.createElement('div');
		oli.appendChild(txt);
		txt.setAttribute("class","txt");
		txt.innerHTML="Text here...";
		//设置图片img
		var img=document.createElement('img');
		oli.appendChild(img);
		img.setAttribute("class","pin_icon");
		img.src="text_tool_img/pin.png";
		//点击删除一个便签
		var oTab=document.createElement('a');
		oli.appendChild(oTab);
		oTab.href="javascript:;";
		oTab.setAttribute('class', 'close_btn');
		oTab.onclick=function(){
			contain.removeChild(this.parentNode);
		}
	 }
	//移除所有ul子节点
	remove.onclick=function(){
		while(contain.children.length){
			contain.removeChild(contain.children[0]);
		}
	}
	//缩小Ul的子节点
	var txt=document.getElementsByClassName("txt");
	small.onclick=function(){
		for(var i=0; i<txt.length; i++){
			txt[i].style.display='none';	
		}
	}
	//放大ul的子节点
	big.onclick=function(){
		for(var i=0; i<txt.length; i++){
			txt[i].style.display='block';
		}
	}
}
