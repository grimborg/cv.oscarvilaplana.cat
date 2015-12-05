var callback = function(){
	$('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
        console.log(newWidth);
        $(this).css('width', newWidth);
/*		$(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1);*/
	});
	$('.icons-red').each(function(){
		height = $(this).height();
    $(this).animate({
        height: 14,
    }, 1);
	});
};
callback();
$(document).ready(callback);
var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};
