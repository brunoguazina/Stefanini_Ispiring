
$(document).ready(function(){

	$('.menu').on('touchstart', function(e){
		$('html').toggleClass('menu-active');
	  	e.preventDefault();
	});
	
	$('#itens ul li').on('touchstart', function(){
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
	});

	$('ul #doctor').on('touchstart', function(){
		$(this).siblings().removeClass('active');
		$(this).toggleClass('active');
	});

})