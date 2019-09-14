$(document).ready(function(){
  $("#nav").on("click","a", function (event) {
    event.preventDefault();

    var id  = $(this).attr('href'),

        top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1500);
  });

  var controller = new ScrollMagic.Controller();

  var ourScene = new ScrollMagic.Scene({
    triggerElement: '#portfolio'
  })
  .setClassToggle('#portfolio', 'fade-in')
  .addTo(controller);

});