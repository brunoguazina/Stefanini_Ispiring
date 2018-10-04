
$(document).ready(function(){

	$('.menu').on('click', function(event){
		$('html').toggleClass('menu-active');
		event.preventDefault();
	});
	
	$('#itens ul li').on('click', function(){
		toggle(this);
	});

	$('ul #doctor').on('click', function(){
		toggle(this);
	});

	function toggle(clickedElement) {
		$(clickedElement).siblings().removeClass('active');
		$(clickedElement).toggleClass('active');
	}

})