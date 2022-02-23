/**********************************************
* 選單效果&卷軸控制
* Doorbell, 2015-10-15
**********************************************/
$(document).ready(function(e)
{
	var $body = $('body,html'),
		$menu = $('ul.menu'),
		$list = $menu.children('li');
		
	var initPos = $menu.position(),
		speed = 500,
		dis	= 30;	//慣性移動距離
	
	$list.click(function(e)
	{
		var str	= "." + $(this).attr('data-scroll-to');
		var $target = $(str);
		var nowTop = $body.scrollTop(),
			toTop = $target.position().top;

		
		$body.stop(true).animate({scrollTop: toTop}, speed, 'easeOutCubic');
		
		console.log(1);
		
		if(nowTop < toTop)
		{
			//向下時
			$menu.stop(true).animate({top:initPos.top - dis}, speed, 'easeOutCubic', resetMenu);
			console.log(2);
		}
		else if(nowTop > toTop)
		{
			//向上時
			$menu.stop(true).animate({top:initPos.top + dis}, speed, 'easeOutCubic', resetMenu);
			console.log(3);
		}
		
	});
	
	function resetMenu()
	{
		$menu.stop(true).animate({top:initPos.top}, 'slow', 'easeOutBack');
	}
	
});