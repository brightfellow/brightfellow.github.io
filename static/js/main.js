/* Dancing stuff
--------------------------------------------------------------*/
var imgList = [
	'static/img/drawings/norabf.png',
	'static/img/drawings/amybb.png',
	'static/img/drawings/colleen.png',
	'static/img/drawings/taylor2.png',
	'static/img/drawings/AA_girl.png',
	'static/img/drawings/amy_misfits.png',
	'static/img/drawings/bm_girl.png',
	'static/img/drawings/nicole_stark.png',
	'static/img/drawings/joss.png'
];

var counter = 0;
console.log(counter);

$('.previous-btn').click(function() {
	if (counter == 0) {
		counter = 8;
		$('#img').attr('src', imgList[counter]);
	} else {
		counter =  counter - 1;
		$('#img').attr('src', imgList[counter]);
	}
	console.log(counter);
});

$('.next-btn').click(function() {
	if (counter == 8) {
		counter = 0;
		$('#img').attr('src', imgList[counter]);
	} else {
		counter =  counter + 1;
		$('#img').attr('src', imgList[counter]);
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