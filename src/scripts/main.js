
$(document).ready(function(){

	$('.menu').on('touchstart', function(e){
		$('html').toggleClass('menu-active');
	  	e.preventDefault();
	});
	
	$('#itens ul li').on('touchstart', function(){
		$(this).parent().removeClass('active');
		$(this).toggleClass('active');
		console.log($(this).parent().parent());
	});

})