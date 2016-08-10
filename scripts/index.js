/* processbar */

(function() {
	var progressbar = document.querySelector('#progressbar');
	if (progressbar) {
		var homepage = document.querySelector('#homepage');
		var progress = progressbar.querySelector('.progress');
		var counter = 0;
		var duration = 500;
		var steps = 50;
		var timer = setInterval(function() {
				if (counter === 0) {
					progressbar.style.display = "block";
				}
				if (counter > steps) {
					clearInterval(timer);
					homepage.style.display = "block";
					progressbar.style.display = "none";
					return;
				}
				progress.style.width = ++counter / steps * document.documentElement.clientWidth + "px";
			},
			duration / steps)
	}
})();

/* wallpaper */

(function() {
	if (get("#wallpaper")) {

		// data in wallpaper.js
		wallpaper.set();

		// wallpaper-mode wallpaper-random
		if (get("#wallpaper-mode") && get("#wallpaper-random")) {
			var m = get("#wallpaper-mode"),
				r = get("#wallpaper-random"),
				f = get("#wallpaper-filter"),
				h = new Date().getHours();
			if (h >= 19 || h <= 7) {
				m.innerHTML = "D";
				f.style.opacity = 0.5;
			} else {
				m.innerHTML = "N";
			}
			m.onclick = function() {
				if (m.innerHTML == "N") {
					f.style.opacity = 0.5;
					m.innerHTML = "D";
				} else if (m.innerHTML == "D") {
					f.style.opacity = 0;
					m.innerHTML = "N";
				}
			}
			r.onclick = function() {
				wallpaper.change();
			}
		}
	}
})();

/* search-bar */

(function() {
	if (get("#search-bar")) {
		var search = {
			closed: true,
			toggle: function() {
				if (search.closed) {
					search.closed = false;
					get("#search-sub-menu").style.display = "block";
				} else {
					search.closed = true;
					get("#search-sub-menu").style.display = "none";
				}
			},
			submit: function(link, action, name) {
				search.toggle();
				if (get("#search-keyword").value == "") {
					window.open(link);
				} else {
					get("#search-form").action = action;
					get("#search-keyword").name = name;
					get("#search-form").submit();
				}
			},
			direct: function(link, action) {
				search.toggle();
				if (get("#search-keyword").value == "") {
					window.open(link);
				} else {
					window.open(action + get("#search-keyword").value);
				}
			}
		}
		get("#search-keyword").tabIndex = "1";
		get("#search-keyword").placeholder = "search...";
		get("#search-keyword").onmouseover = function() {
			get("#search-keyword").select()
		};
		get(".search-menu").onclick = search.toggle;
		get("#baidu").onclick = function() {
			search.submit("https://www.baidu.com/", "https://www.baidu.com/s", "wd")
		}
		get("#bing").onclick = function() {
			search.submit("http://www.bing.com/", "https://www.bing.com/search", "q")
		}
		get("#google").onclick = function() {
			search.submit("https://www.google.com/", "https://www.google.com/search", "q")
		}
		get("#douban").onclick = function() {
			search.submit("http://www.douban.com/", "http://www.douban.com/search", "q")
		}
		get("#dictionary").onclick = function() {
			search.submit("http://www.bing.com/dict/", "http://cn.bing.com/dict/dict", "q")
		}
		get("#map").onclick = function() {
			search.direct("http://map.baidu.com/", "http://map.baidu.com/?s=s%26wd%3D")
		}
		get(".search-quickdelete").onmouseover = function() {
			search.btn = false;
			get("#search-sub-menu").style.display = "none";
			get("#search-form").reset();
			get("#search-keyword").focus();
		}
	}
})();

/* ripple effect */

$(function() {
	$("#search-sub-menu a").mouseenter(function(e) {
		var parent = $(this).parent();
		if (parent.find(".ripple-ink").length == 0) {
			parent.prepend('<span class="ripple-ink"></span>');
		}
		var ink = parent.find(".ripple-ink");
		ink.removeClass("ripple-animate");
		if (!ink.width() && !ink.height()) {
			var d = Math.max(parent.outerWidth(), parent.outerHeight());
			ink.css({
				"width": d,
				"height": d
			})
		}
		var x = e.pageX - parent.offset().left - ink.width() / 2;
		var y = e.pageY - parent.offset().top - ink.height() / 2;
		ink.css({
			"left": x,
			"top": y
		}).addClass("ripple-animate");
	})
	$("#search-sub-menu a").mouseleave(function() {
		var parent = $(this).parent();
		if (parent.find(".ripple-ink").length != 0) {
			setTimeout(function() {
				var ink = parent.find(".ripple-ink");
				ink.remove();
			}, 500);
		};
	})
});