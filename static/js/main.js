/* Dancing stuff
--------------------------------------------------------------*/
var imgList = [
	'static/img/girl_skankin.gif',
	'static/img/skankin.gif',
	'static/img/girl_dancing_kitchen.gif'
];

var counter = 0;
console.log(counter);

$('.previous-btn').click(function() {
	if (counter == 0) {
		counter = 2;
		$('#dancing-img').attr('src', imgList[counter]);
	} else {
		counter =  counter - 1;
		$('#dancing-img').attr('src', imgList[counter]);
	}
	console.log(counter);
});

$('.next-btn').click(function() {
	if (counter == 2) {
		counter = 0;
		$('#dancing-img').attr('src', imgList[counter]);
	} else {
		counter =  counter + 1;
		$('#dancing-img').attr('src', imgList[counter]);
	}
	console.log(counter);
});


/* Video Stuff
-------------------------------------------------------------*/
$('.video-btn').click(function() {
	$(this).addClass('active');
	$('.video-btn').not(this).removeClass('active');
	var videoId = $(this).attr('data-video');
	var videoIframe = 
		'<iframe width="560" height="315" src="https://www.youtube.com/embed/' +
		videoId +
		'?autoplay=1" frameborder="0" allowfullscreen></iframe>'
	;

	$('.videoWrapper').slideDown();
	$('.videoWrapper').html(videoIframe);
	console.log(videoId);
});