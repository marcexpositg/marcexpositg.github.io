/* 
 _____   _           _         _                        _                  
|_   _| | |         | |       | |                      | |                 
  | |   | |__   __ _| |_ ___  | |_ ___  _ __ ___   __ _| |_ ___   ___  ___ 
  | |   | '_ \ / _` | __/ _ \ | __/ _ \| '_ ` _ \ / _` | __/ _ \ / _ \/ __|
 _| |_  | | | | (_| | ||  __/ | || (_) | | | | | | (_| | || (_) |  __/\__ \
 \___/  |_| |_|\__,_|\__\___|  \__\___/|_| |_| |_|\__,_|\__\___/ \___||___/

Oh nice, welcome to the js file of dreams.
Enjoy responsibly!
@ihatetomatoes

*/

$('#appear1').fadeIn("slow");
setTimeout(function () {
	$('#appear2').fadeIn("slow");
}, 1000);

function pageScroll() {
	window.scrollBy(0, 3);
	scrolldelay = setTimeout(pageScroll, 10);
	scrollposition = $(window).scrollTop();
	if ((scrollposition > 50) || (scrollposition = 0)) {
		clearTimeout(scrolldelay);
	};
};

function stopscrolling() {
	clearTimeout(scrolldelay);
}

$(document).on("load",function () {

	//setTimeout(function(){
	$(document).one("click", function () {
		$('body').addClass('loaded');
		//$('h1').css('color','#222222');
		$('#loader-recommendation').fadeOut();
		//document.getElementById('loader-recommendation').style.display = 'none';

		document.getElementById('missu').play();


		//$('.active').removeClass('active');
		//$('#num1').parent().addClass('active');


		//$('.carousel').carousel({
		//	pause: true,
		//	interval: false
		//}).carousel(0);
		$('.carousel').carousel(0);
		$('.carousel').carousel('pause');

		setTimeout(function () {
			$('.carousel').carousel({
				interval: 2000
			})
		}, 3000);


		setTimeout(function () {
			$('html, body').css({
				'overflow': 'auto',
				'height': 'auto'
			});
			$('#pleaseScroll').fadeIn("slow");
			setTimeout(function(){pageScroll();},2000);
		}, 5000);

		//	console.log($(window).scrollTop());
		//	if ($(window).scrollTop() > "30px") {
		//		console.log("Que gran tio");
		//	}

		$(document).mousemove(stopscrolling);



		//$('.carousel').carousel({
		//			interval: 2000
		//		  })


	})
	//}, 3000);

});