// JavaScript Document
//jQuery.noConflict();
(function($){})(jQuery);//This wraps everything into a privatized scope so can use $ sign within it

//$(document).ready(function () {
    //site code goes here

	$.fn.jacc = function(options){
		
		options = $.extend({
		header: 'h3',
		content: 'div',
		duration:400,
		easing: 'swing',
		show:0,
		multi: false
	}, options);
	
	return this.each(function(){
		
	var that = $(this),
	heads = that.children(options.header),//this refers to the h3 which is a child of accordion	
	content = that.children(options.content)
	;
	if(options.show === false){
		content.hide();
		}else if(options.show !== true){
			content.not(':eq(' + options.show + ')').hide();//this hides all except the first one
			}
	
	
	heads.bind('click', function(){
		var block = $(this).next(options.content);
		if(!block.is(':animated')){
			if(block.multi === true){	
	block.slideToggle(options.duration, options.easing);
			}else{
				block
				.slideDown(options.duration, options.easing)
				.siblings(options.content)
				.slideUp(options.duration, options.easing)
				;
				};
		}
	return false;
	});
	
});
	
};



//})(jQuery);//this is the end of the privatized scope wrapper