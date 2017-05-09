	//获取id
	var $=function(id){
		return document.getElementById(id);
	}
	//监听input值的变化
	var changed=function(id,fn){
		$(id).onchange=fn;
	}
	var val=function(id){
		return $(id).value;
	}
	//设置span里面的内容
	var setspan=function(id,html){
		$(id).nextSibling.innerHTML=html;
	}
	//匹配账户
	changed('ipt1',function(){
		if(/[\u4e00-\u9fa5_a-zA-Z0-9_]{3,16}/.test(val('ipt1'))){
			setspan('ipt1','OK');
		}else{
			setspan('ipt1','请输入正确账号');
		}
	})
	//匹配密码
	changed('ipt2',function(){
		if(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/.test(val('ipt2'))){
			setspan('ipt2','OK');
		}else{
			setspan('ipt2','请输入正确密码');
		}
	})
	//确认密码
	changed('ipt3',function(){
		if(val('ipt2')!==val('ipt3')){
			setspan('ipt3','两次密码不一致');
		}else{
			setspan('ipt3','OK');
		}
	})
	//匹配QQ号码
	changed('ipt4',function(){
		if(/^[1-9][0-9]{5,10}$/.test(val('ipt4'))){
			setspan('ipt4','OK');
		}else{
			setspan('ipt4','请输入正确的QQ号码');
		}
	})
	//匹配邮箱
	changed('ipt5',function(){
        if(/^[\w\-\.]+@[\w]+\.[\w]{2,4}/.test(val('ipt5'))){
            setspan('ipt5','OK');
        }else{
            setspan('ipt5','请输入正确的邮箱格式');
        }
    });