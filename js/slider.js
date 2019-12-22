$('.carousel').carousel();
setInterval(function() {
  $('.carousel').carousel('next');
}, 5000); // every 2 seconds

  // Or with jQuery

  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  });