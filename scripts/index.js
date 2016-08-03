
/* processBar */

(function(){
	if(location.pathname=="/"){
		var process={
			counter:0,
			duration:1000,
			steps:50
		}
		process.speed=process.duration/process.steps/2;
		process.interval=window.setInterval(function(){
			if(process.counter==0&&get("#entry")){
				get("#entry").style.display="block";
			}
			if(process.counter>process.steps){
				window.clearInterval(process.interval);
				get("#blocked").style.display="block";
				get("#entry").style.display="none";
				return;
			}
			if(get("#process-bar")==null){
				window.clearInterval(process.interval);
			}
			else{
				get("#process-bar").style.width=parseInt(++process.counter/process.steps*window.innerWidth)+"px";
			}
		},process.speed)
	}
	else if(get("#blocked")){
		get("#blocked").style.display="block";
	}
})();

/* wallpaper */

(function(){
	if(get("#wallpaper")){
		
		// data in wallpaper.js
		wallpaper.set();

		// wallpaper-mode wallpaper-random
		if(get("#wallpaper-mode")&&get("#wallpaper-random")){
			var m=get("#wallpaper-mode"),
				r=get("#wallpaper-random"),
				f=get("#wallpaper-filter"),
				h=new Date().getHours();
			if(h>=19||h<=7){
				m.innerHTML="D";
				f.style.opacity=0.5;
			}else{
				m.innerHTML="N";
			}
			m.onclick=function(){
				if(m.innerHTML=="N"){
					f.style.opacity=0.5;
					m.innerHTML="D";
				}else if(m.innerHTML=="D"){
					f.style.opacity=0;
					m.innerHTML="N";
				}
			}
			r.onclick=function(){
				wallpaper.change();
			}
		}
	}
})();

/* search-bar */

(function(){
	if(get("#search-bar")){
		var search={
			trigger:true,
			toggle:function(){//get("#search-menu").value="∧∨×";
				if(search.trigger){
					search.trigger=false;
					get("#search-sub-menu").style.display="block";
				}else{
					search.trigger=true;
					get("#search-sub-menu").style.display="none";
				}
			},
			submit:function(link,action,name){
				if(get("#search-keyword").value==""){
					search.toggle();
					window.open(link);
				}
				else{
					search.toggle();
					get("#search-form").action=action;
					get("#search-keyword").name=name;
					get("#search-form").submit();
				}
			},
			direct:function(link,string){
				if(get("#search-keyword").value==""){
					window.open(link);
				}
				else{
					get("#search-sub-menu").style.display="none";
					window.open(string+get("#search-keyword").value);
				}
			}
		}
		get("#search-keyword").tabIndex="1";
		get("#search-keyword").placeholder="search...";
		get("#search-keyword").onmouseover=function(){get("#search-keyword").select()};
		get(".search-menu").onclick=search.toggle;
		get("#baidu").onclick=function(){search.submit("https://www.baidu.com/","https://www.baidu.com/s","wd")}
		get("#bing").onclick=function(){search.submit("http://www.bing.com/","https://www.bing.com/search","q")}
		get("#google").onclick=function(){search.submit("https://www.google.com/","https://www.google.com/search","q")}
		get("#douban").onclick=function(){search.submit("http://www.douban.com/","http://www.douban.com/search","q")}
		get("#dictionary").onclick=function(){search.submit("http://www.bing.com/dict/","http://cn.bing.com/dict/dict","q")}
		get("#map").onclick=function(){search.direct("http://map.baidu.com/","http://map.baidu.com/?s=s%26wd%3D")}
		get(".search-quickdelete").onmouseover=function(){
			search.btn=false;
			get("#search-sub-menu").style.display="none";
			get("#search-form").reset();
			get("#search-keyword").focus();
		}
	}
})();

/* ripple effect */

$(function(){
	$("#search-sub-menu a").mouseenter(function(e){
		var parent=$(this).parent();
		if(parent.find(".ripple-ink").length==0){
			parent.prepend('<span class="ripple-ink"></span>');
		}
		var ink=parent.find(".ripple-ink");
		ink.removeClass("ripple-animate");
		if(!ink.width()&&!ink.height()){
			var d=Math.max(parent.outerWidth(),parent.outerHeight());
			ink.css({"width":d,"height":d})
		}
		var x=e.pageX-parent.offset().left-ink.width()/2;
		var y=e.pageY-parent.offset().top-ink.height()/2;
		ink.css({"left":x,"top":y}).addClass("ripple-animate");
	})
	$("#search-sub-menu a").mouseleave(function(){
		var parent=$(this).parent();
		if(parent.find(".ripple-ink").length != 0){
			setTimeout(function(){
				var ink=parent.find(".ripple-ink");
				ink.remove();
			},500);
		};
	})
});
