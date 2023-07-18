// var splide = new Splide( '.splide', {
//     direction: 'ttb',
//     height   : '100vh',
//     transition : '0.5s',
//     // wheel    : true,
// } );
  
// splide.mount();

// document.addEventListener( 'DOMContentLoaded', function () {
//     new Splide( '#image-carousel' ).mount();
//   } );

var splide = new Splide( '.splide' );
  var bar    = splide.root.querySelector( '.my-carousel-progress-bar' );
  
  splide.on( 'mounted move', function () {
    var end  = splide.Components.Controller.getEnd() + 1;
    var rate = Math.min( ( splide.index + 1 ) / end, 1 );
    bar.style.width = String( 100 * rate ) + '%';
  } );
  
  splide.mount();
