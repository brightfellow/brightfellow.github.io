$(document).ready(function() {
	$('#prg-btn').click(function() {
		$('#prg-carousel').slideToggle();
		$('.dropdown').not('#prg-carousel').slideUp();
	});


	$('#moto-btn').click(function() {
		$('#moto-carousel').slideDown();
		$('.dropdown').not('#moto-carousel').slideUp();
	});


	$('.close').click(function() {
		$('.dropdown').slideUp();
	});


	$(".owl-carousel").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true
	});
});