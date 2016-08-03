
/* wechat */

(function(){
	if(get("#wechat")){
		var wechat=get("#wechat"),
			trigger=wechat.parentNode.querySelector(".fa-wechat");
		wechat.onclick=function(){
			wechat.style.display="none";
		}
		trigger.onclick=function(){
			wechat.style.display="block";
		}
	}
})();