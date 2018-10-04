
$(document).ready(function(){

	$('.menu').on('touchstart', function(e){
		$('html').toggleClass('menu-active');
	  	e.preventDefault();
	});
	
	$('#itens ul li').on('touchstart', function(){
		toggle(this);
	});

	$('ul #doctor').on('touchstart', function(){
		toggle(this);
	});

	function toggle(clickedElement) {
		$(clickedElement).siblings().removeClass('active');
		$(clickedElement).toggleClass('active');
	}

})