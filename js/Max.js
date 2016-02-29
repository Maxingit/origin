//懒加载
//图片格式<img data-original="images/009.jpg" src="js/grey.gif"/>
$(function() {
	$("img").lazyload({
		effect : "fadeIn"
	});
});

