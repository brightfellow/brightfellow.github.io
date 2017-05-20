$(document).ready(function() {

	$('#all-btn').click(function() {
		$(this).toggleClass('active');
		$('.dropdown-btn').not(this).removeClass('active');

		$('#all-carousel').slideDown();
		$('.dropdown').not('#all-carousel').slideUp();
	});

	$('#prg-btn').click(function() {
		$(this).toggleClass('active');
		$('.dropdown-btn').not(this).removeClass('active');

		$('#prg-carousel').slideToggle();
		$('.dropdown').not('#prg-carousel').slideUp();
	});


	$('#moto-btn').click(function() {
		$(this).toggleClass('active');
		$('.dropdown-btn').not(this).removeClass('active');

		$('#moto-carousel').slideDown();
		$('.dropdown').not('#moto-carousel').slideUp();
	});






	$('.close').click(function() {
		$('.dropdown').slideUp();
		$('.dropdown-btn').removeClass('active');
	});


	$(".owl-carousel").owlCarousel({
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem: true
	});
});