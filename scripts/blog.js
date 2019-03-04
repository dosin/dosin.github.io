(function() {

  if (!document.getElementsByTagName('template')[0]) return;
  var articles = [{
    title: '今天我的博客开启了 :)',
    href: 'javascript:;',
    time: '2016-04-14 10:00',
    content: '2015年下半年开始接触前端，有志于从事这方面的工作，于是开始在网上找各种教程，w3school、w3schools、慕课，遇到不懂的各种百度、Google，虽然我还很菜，还没有真正从事Front-end Development，还是很开心能走到这一步。<br>其实我一个菜鸟前端开博客也没什么可更新的，就先写这么多吧。'
  }, {
    title: '库里破400',
    href: 'javascript:;',
    time: '2016-04-14 11:46',
    content: '看着他打球都麻木了。'
  }, {
    title: '2019',
    href: 'javascript:;',
    time: '2019-03-04 17:55',
    content: '往事不堪回首，几年前还想转行从事前端工作，哈哈哈，然而还是败给了现实，搞回自己的专业，不管做什么，认真做就对了。'
  }];

  var html = [];
  var temp = document.getElementsByTagName('template')[0].innerHTML;
  for (var i = articles.length - 1; i >= 0; i--) {
    html.push(
      temp
      .replace(/\{title\}/g, articles[i].title)
      .replace(/\{time\}/g, articles[i].time)
      .replace(/\{content\}/g, articles[i].content)
      .replace(/\{href\}/g, articles[i].href)
    );
  }

  var blog = document.getElementById('blog');
  blog.innerHTML = html.join('');

})();
