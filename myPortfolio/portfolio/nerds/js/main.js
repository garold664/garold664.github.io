(function() {
  var btnOpenModal = document.querySelector('.contacts__info-btn');
  var btnCloseModal = document.querySelector('.modal__btn--cancel');
  var modal = document.querySelector('.modal');

  btnOpenModal.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.remove('modal--closed');
  });

  btnCloseModal.addEventListener('click', function(evt) {
    evt.preventDefault();
    modal.classList.add('modal--closed');
  });

// Owl Carousel
  $(document).ready(function() {

    $( function() {
      $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 20000,
        values: [0, 15000],
        slide: function( event, ui ) {
          $( "#min-price" ).val(ui.values[0]);
          $( "#max-price" ).val(ui.values[1]);
        }
      });

      $( "#min-price" ).val( $("#slider-range").slider("values", 0));
      $( "#max-price" ).val( $("#slider-range").slider("values", 1));
    });

    if ($('.owl-carousel').owlCarousel) {
      $('.owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true
      });
    }
  });

})();

// Google Maps
var map;
function initMap() {
  var myLatLng = {lat: 45.043271, lng: 38.946314};
  var image = 'img/map-marker.png';

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 18
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: 'Hello World!'
});
}