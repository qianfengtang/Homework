$(function(){
	var arr=["首页","新房","二手房","租房","商铺写字楼","海外地产","安居头条","房价","问答"];
	var i=0;
	//创建li函数
	$(".addli").click(function(){
		var $li=$("<li></li>");
		if($("ul>li").eq(i).size()){
			i=i+1;
		}
		if(i<9&&i>=0){
			$("ul").append($li);
			$("ul>li").eq(i).html(arr[i]);
			i++;
		}else if(i>=9){
			alert("不能再添加导航列表了！");
			i=8;
		}
	});
	//删除li函数
	$(".removeli").click(function(){
		if(!$("ul>li").eq(i).size()){
			i=i-1;
		}
		if(i<9&&i>=0){
			$("ul>li").eq(i).remove();
			i--;
		}else if(i<0){
			alert("已经删除所有的li列表了！");
			i=0;
		}
	});
	
});
