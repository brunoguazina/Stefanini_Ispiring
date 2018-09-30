
$(document).ready(function(){

	$('.menu').on('click touchstart', function(e){
		$('html').toggleClass('menu-active');
	  	e.preventDefault();
	});
	
})