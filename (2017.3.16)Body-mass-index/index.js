window.onload=function(){
	var taller=document.getElementById("taller-input");
	var weight=document.getElementById("weight-input");
	var calc=document.getElementById("caculate");
	var clr=document.getElementById("clear");
	var result=document.getElementById("bmi");
	var a=0;
	calc.onclick=function(){
		var taller_value=parseFloat(taller.value);
		var weight_value=parseFloat(weight.value);
		a=weight_value/(Math.pow(taller_value/100,2));
		result.value=a.toFixed(1);
		console.log(result.value);
		if(result.value<18.5){
			alert("体重过轻");
			console.log(a);
		}else if(18.5<=result.value&&result.value<24){
			alert("正常范围");			
		}else if(24<=result.value&&result.value<27){
			alert("过重");
		}else if(27<=result.value&&result.value<30){
			alert("轻度肥胖");
		}else if(30<=result.value&&result.value<35){
			alert("中度肥胖");
		}else if(35<=result.value){
			alert("重度肥胖");
		}
		
	}

	clr.onclick=function(){
		taller.value="";
		weight.value="";
		result.value="";
	}
}
