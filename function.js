window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if ($(document).scrollTop() < 103.6 && $(window).width() > 768) {
    $('nav').removeClass('fixed-top');
    $('body').css("padding-top","0px");
    /*$('body').changeStyle('padding-top: 1em') Afegir l'espai que surt de la navbar*/
  } else {  /* ha de ser elseif si la pantalla és mes ample que tal, pq sino afegeix el fixed top i al truereho la lia*/
    $('nav').addClass('fixed-top');
    $('body').css("padding-top","56px");
  }
};

// Una funció perquè quan cliques a un link a index que va a research surti una mica abans d'on aniria, pq sino no es veu el titol.
function offsetAnchor() {
  if(location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 50);
  }
}
// This will capture hash changes while on the page
window.addEventListener("hashchange", offsetAnchor);
// This is here so that when you enter the page with a hash,
// it can provide the offset in that case too. Having a timeout
// seems necessary to allow the browser to jump to the anchor first.
window.setTimeout(offsetAnchor, 1); // The delay of 1 is arbitrary and may not always work right (although it did in my testing).