
(function(){
	
	var isCtrlKeyDown = false;

	addEvent(document, "keydown", keydown);

	addEvent(document, "keyup", function () {
		isCtrlKeyDown = false;
		addEvent(document, "keydown", keydown);
	})

	function addEvent(ele, event, callback) {
		var obj = ele || document;
		if (obj.addEventListener) {
			obj.addEventListener(event, callback, false);
		} else if (obj.attachEvent) { 
			obj.attachEvent("on"+event, callback);
		} else {
			obj["on"+event] = callback;
		}
	}

	function removeEvent(ele, event, callback) {
		var obj = ele || document;
		if (obj.removeEventListener) {
			obj.removeEventListener(event, callback, false);
		} else if (obj.detachEvent) { 
			obj.detachEvent("on"+event, callback);
		} else {
			obj["on"+event] = null;
		}
	}

	function keydown(e) {
		var e = e || document.event;
		if (e.keyCode === 17) {
			isCtrlKeyDown = true;
		}
		console.log(isCtrlKeyDown)
		removeEvent(document, "keydown", keydown);
	};

	bind('a', 'click' , function (e) {
		if (!isCtrlKeyDown) {
			var ifExist = document.getElementById("dosinpreview");
			ifExist && del(ifExist);
			e = e || window.event;
			e.preventDefault();
			e.stopPropagation();
			var w = document.documentElement.clientWidth;
			var h = document.documentElement.clientHeight;
			var preview = document.createElement("div");
			preview.id = "dosinpreview";
			preview.innerHTML = '<iframe onload="parent.focus();" style="width: 100%; height: 100%; border: 2px solid #333;"></iframe><button style="border: 0; outline: 0; width: 50px; height: 50px; line-height: 50px; text-align: center;font-family: Arial; font-size: 30px; color: #fff; background: #333; opacity: 0.8; position: absolute; right: 50px; top: 50px; cursor: pointer;">X</button>';
			preview.style.cssText = "background: #fff; position: fixed; left: 50px; top: 50px";
			preview.style.width = w - 100 + "px";
			preview.style.height = h - 100 + "px";
			document.body.appendChild(preview);
			var frame = preview.getElementsByTagName("iframe")[0];
			frame.src = this.href;
			var button = preview.getElementsByTagName("button")[0];
			button.onclick = function () {
				del(preview);
			}
		}
	})

	function bind(tag, event, callback) {
		addEvent(document, event, function(e){
			if (e.target.tagName === tag.toUpperCase()) {
				callback.call(e.target);
			}
		});
	}

	function del(ele) {
		ele.nodeType === 1 && ele.parentNode.removeChild(ele);
	}

})()
