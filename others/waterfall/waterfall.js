// 初始设定
var init={
	num:24,                         //初始加载图片数量
	width:188,                      //图片宽度
	cols:null,                      //由width和浏览器窗口可见宽度决定
}
// Bing图片数组
document.write('<script type="text/javascript" src="http://dosin.github.io/scripts/wallpaper.js"></script>');
var resolution=[
	"360x480",
	"480x640",
	"480x800",
	"768x1024",
	"768x1366",
	"1366x768",
	"1920x1080",
];
// 加载图片
function loadImages(num){
	var container=document.getElementById("container");
	for(var i=0;i<num;i++){
		var wrap=document.createElement("div"),
			pic=document.createElement("div"),
			img=document.createElement("img");
		pic.appendChild(img);
		pic.className="pic";
		wrap.appendChild(pic);
		wrap.className="wrap";
		container.appendChild(wrap);
	}
	var imgs=document.getElementsByTagName("img");
	for(j=0,jLen=imgs.length;j<jLen;j++){
		imgs[j].src="http://dosin.github.io/images/wallpaper/"+getRandom(wallpaper.filename)+"_"+getRandom(resolution)+".jpg";
		imgs[j].width=init.width;
	}
}
// 传入一个数组，返回随机一个值
function getRandom(arr){
	return arr[Math.floor(Math.random()*arr.length)];
}
function setContainer(){
	// 获取wrap
	var wrap=getByClassName("container","wrap");
	var width=wrap[0].offsetWidth;
	// 获取列数
	init.cols=Math.floor(document.documentElement.clientWidth/width);
	// 设置container宽度和居中
	var container=document.getElementById("container");
	container.style.cssText="width:"+init.cols*width+"px;margin:0 auto;";
}
// 定位
function waterfall(){
	// 获取wrap
	var wrap=getByClassName("container","wrap");
	var hArr=[];
	for(var j=0,jLen=wrap.length;j<jLen;j++){
		// 获取第一行图片高度，加入数组
		if(j<init.cols){
			hArr.push(wrap[j].offsetHeight)
		}else{
			var minHIndex=getMinIndex(hArr);
			wrap[j].style.position="absolute";
			wrap[j].style.top=hArr[minHIndex]+"px";
			wrap[j].style.left=wrap[minHIndex].offsetLeft+"px";
			hArr[minHIndex]+=wrap[j].offsetHeight;
		}
	}
}
// 通过class获取元素，返回一个数组
function getByClassName(rootID,className){
	var root=document.getElementById(rootID);
	var elements=root.getElementsByTagName("*"),
		arr=[];
	for(var i=0,iLen=elements.length;i<iLen;i++){
		if(elements[i].className==className){
			arr.push(elements[i]);
		}
	}
	return arr;
}
// 传入一个数组，返回其最小值的Index
function getMinIndex(arr){
	var nArr=[];
	for(var i=0,len=arr.length;i<len;i++){
		nArr[i]=arr[i]
	}
	nArr.sort(function (a,b){return a-b;});
	for(var j=0;j<len;j++){
		if(arr[j]==nArr[0]){
			return j
		}
	}
}
// 升序排列数组所需函数

// 判断是否可以加载
function load(){
	// 获取wrap
	var wrap=getByClassName("container","wrap");
	var maxH=wrap[wrap.length-1].offsetTop+Math.floor(wrap[wrap.length-1].offsetHeight/2);
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	var documentH=document.documentElement.clientHeight;
	return (maxH<scrollTop+documentH)?true:false;
}
window.onload=function(){
	loadImages(init.num);
	setContainer();
	// waterfall();
	window.setInterval("waterfall()",50);
	window.onscroll=function(){
		if(load()){
			loadImages(init.cols);
			waterfall();
		}
	}
}