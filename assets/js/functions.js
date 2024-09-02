// remap jQuery to $
(function($){})(window.jQuery);


/* trigger when page is ready */
$(document).ready(function (){

	$('.features ul').cycle({
		fx: 'fade',
		timeout: '7000'
	});

	$('nav li').hover(
		function () {
			//show its submenu
			$('ul', this).slideDown(100);

		}, 
		function () {
			//hide its submenu
			$('ul', this).slideUp(100);			
		}
	);

});


/* optional triggers

$(window).load(function() {
	
});

$(window).resize(function() {
	
});

*/