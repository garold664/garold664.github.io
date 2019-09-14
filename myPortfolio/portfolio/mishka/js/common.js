var close = document.querySelector('.page-header__nav-button');
var open = document.querySelector('.page-header__nav-button--closed');
var pageNav = document.querySelector('.page-header__nav');
var pageHeadLine = document.querySelector('.page-header__head-line');
var cartBtn = document.querySelector('.page-header__nav-link--cart');
var productBtn = document.querySelector('.product__btn');
var cart = document.querySelector('.modal');
var buyBtns = document.querySelectorAll('.product-item__buy');
var products = document.querySelector('.page-main__products');
var mapContainer = document.getElementById('map');

var orderForm = document.getElementById('order-form');
var submitBtn = document.getElementById('submit-btn');


submitBtn && submitBtn.addEventListener('click', function() {
  orderForm.classList.add('form--submitted');
});

pageHeadLine.classList.add('page-header__head-line--closed');
pageNav.classList.remove('page-header__nav--nojs');

close.addEventListener('click', function(event) {
  event.preventDefault();
  pageNav.classList.toggle('page-header__nav--closed');
  close.classList.toggle('page-header__nav-button--closed');
  pageHeadLine.classList.toggle('page-header__head-line--closed');
});

if (cart) {
  cartBtn.addEventListener('click', function(event) {
    event.preventDefault();
    cart.classList.remove('modal--closed');
  });

  if (products) {
    products.addEventListener('click', function(event) {
      if (event.target.classList.contains('product-item__buy')) {
         event.preventDefault();
        cart.classList.remove('modal--closed');
      }
    });
  }


  cart.addEventListener('click', function(event) {
    if (event.target === this) {
      cart.classList.add('modal--closed');
    }
  });
}

if (mapContainer) {
  ymaps.ready(init);
  var myMap;
  var myPlacemark;

  function init(){
    myMap = new ymaps.Map("map", {
      center: [59.936182, 30.323032],
      zoom: 17
    });

    myPlacemark = new ymaps.Placemark([59.936182, 30.323032], { hintContent: 'Санкт-Петербург!', balloonContent: 'Мы здесь' }, {
      iconLayout: 'default#image',
      iconImageHref: 'img/icon-map-pin.svg',
      iconImageSize: [67, 100],
      iconImageOffset: [-30, -100]
    });
    myMap.geoObjects.add(myPlacemark);
  }
}

