/* selector */

var get = function(selector) {
  return document.querySelector(selector);
};

/* set target */

(function() {
  var blank = document.getElementsByTagName("a");
  for (var i = blank.length - 1; i >= 0; i--) {
    blank[i].target = "_blank";
  }
  self(document.getElementsByTagName('nav')[0]);
  self(document.getElementById('blog'));

  function self(parent) {
    if (parent) {
      var eles = parent.getElementsByTagName('a');
      for (var i = eles.length - 1; i >= 0; i--) {
        eles[i].target = "_self";
      }
    }
  }
})();

/* nav-menu */

$(function() {
  var i = location.pathname == "/" || location.pathname == "/website/" ? 1 :
    location.pathname == "/articles/" || location.pathname == "/website/articles/" ? 2 :
    location.pathname == "/more/" || location.pathname == "/website/more/" ? 3 :
    location.pathname == "/about/" || location.pathname == "/website/about/" ? 4 :
    null;
  $(".menu").prepend("<ul><li></li><li></li><li></li></ul>")
  $(".quickdelete").prepend("<ul><li></li><li></li></ul>")
  $(".nav-menu").on("click", function() {
    $(this).next().toggle()
  })
})

/* footer */

/*$(function(){
  $("#footer").click(function(){
    $("html,body").animate({"scrollTop":0},300);
  })
  $(window).scroll(function(){
    var fromTop =$(window).scrollTop()
    fromTop>401?$("#gotop").show():$("#gotop").hide();
  })
})*/