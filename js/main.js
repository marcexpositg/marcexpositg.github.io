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
	$('#appear3').fadeIn("slow");
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
};


window.onload = function(){
	$('#appear3').fadeOut("slow");
setTimeout(function () {
	$('#appear2').fadeIn("slow");
}, 1000);
//$(document).ready(function () {
	//console.log("loaded");
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

		// set overflow to auto to unblock overflow-y:hidden, because this would impedir que baixessim cap enbaix verticalment i que veiessim el text!
		// Then set overflow-x hidden to block a white empty space on the right
		setTimeout(function () {
			$('html, body').css({
				'overflow':'auto',
				'overflow-x': 'hidden',
				'height': 'auto'
			});
			$('#pleaseScroll').fadeIn("slow");

			//This just works sometimes...
			//setTimeout(function(){
			//	pageScroll();
			//	$(document).mousemove(stopscrolling);
			//},2000);
		}, 5000);



	})
	//}, 3000);

};