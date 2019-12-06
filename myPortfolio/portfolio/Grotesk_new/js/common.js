$(document).ready(function() {

   // progressive enhancement

  $('.no-js').each(function() {
    $(this).removeClass('no-js');
  });

  $('.page-section__nav-link').on('click', function() {
    var activeClass = 'page-section__nav-link--active';
    $('.' + activeClass).removeClass(activeClass);
    $(this).addClass(activeClass);

    $('.page-section__nav-hamburger').click();
  });


  if ($('html').niceScroll) {
     $('html').niceScroll({
      cursoropacitymin: 1,
      cursorwidth: 6,
      cursorborderradius: 0,
      boxzoom: true,
      cursorcolor: '#000',
      scrollspeed: 60,
      mousescrollstep: 100,
      cursorborder: '1px solid #484646'
     });

  }


  // background parallax


  $('.inner-page--work .block[data-parallax="scroll"]').css('background', 'transparent');

  // SLY SLIDER
  if (jQuery.fn.sly) {

    var $frame = $('.slider');
    var sly = new Sly($frame, {
        horizontal: 1,
        itemNav: 'basic',
        smart: 1,
        activateOn: 'click',
        mouseDragging: 1,
        touchDragging: 1,
        releaseSwing: 1,
        startAt: 1,
        scrollBy: 0,
        activatePageOn: 'click',
        speed: 300,
        elasticBounds: 1,
        dragHandle: 1,
        dynamicHandle: 1,
        clickBar: 1,
        startAt: 1
      });

    sly.init();


    $(window).on('resize', function() {
      sly.reload();
      sly.toStart(1);
      sly.activate(1);
    });

    if ($('.slider-second').length) {

      var $frame2 = $('.slider-second');
      var sly2 = new Sly($frame2, {
          horizontal: 1,
          itemNav: 'basic',
          smart: 1,
          activateOn: 'click',
          mouseDragging: 1,
          touchDragging: 1,
          releaseSwing: 1,
          startAt: 1,
          scrollBy: 0,
          activatePageOn: 'click',
          speed: 300,
          elasticBounds: 1,
          dragHandle: 1,
          dynamicHandle: 1,
          clickBar: 1,
          startAt: 1
        });

      sly2.init();


      $(window).on('resize', function() {
        sly2.reload();
        sly2.toStart(1);
        sly2.activate(1);
      });
    }

    // $('.inner-page--services .page-section__images-link').on('click', function (e) {
    //   e.preventDefault();
    // })

  }




 //код для открытия/закрытия навигационного меню

  var $body = $('body');
  var bodyWidth;

  $body.on('click', '.page-nav__hamburger, .page-nav__overlay', toggleNav);
  $(window).keydown(closeByEsc);

  // не позволяем body скроллиться и одновременно решаем проблему с тем, что при исчезновении полос прокрутки меняется ширина body

  // function bodyNoScroll() {
  //   bodyWidth = $body.width();
  //   if (!($body.hasClass('no-scroll'))) {

  //     $body.css('width', bodyWidth);

  //     setTimeout(function () {
  //       $body.css('width', 'auto');
  //     }, 1000);

  //     $body.addClass('no-scroll');

  //   } else {

  //     $body.css('width', 'auto');
  //     bodyWidth = $body.width();
  //     $body.removeClass('no-scroll');

  //   }
  // }

  function offScroll () {

    var winScrollTop = $(window).scrollTop();
    $(window).on('scroll',function (e) {
      e.preventDefault();
      $(window).scrollTop(winScrollTop);
    });
  }






  // ф-ия открывающая/закрывающая меню (используется в обработчике)
  function toggleNav() {
    $('.page-nav__hamburger').toggleClass('hamburger--opened');
    $('.page-nav').toggleClass('page-nav--open');

    if (!($body.hasClass('no-scroll'))) {
      $body.addClass('no-scroll');
    } else {
      $body.removeClass('no-scroll');
    }

    // if ($('.page-nav').hasClass('page-nav--open')) {
    //   offScroll ();  //Запустили отмену прокрутки
    // } else {
    //   $(window).off('scroll');
    // }

    // bodyNoScroll();

  }

  // закрытие меню по нажатию на Esc

  function closeByEsc(evt) {
    if ((evt.which == 27) && ($('.page-nav').hasClass('page-nav--open'))) {
      $('.page-nav__hamburger').removeClass('hamburger--opened');
      $('.page-nav').removeClass('page-nav--open');

      // нормализуем ширину body и возвращаем ему возможность скроллиться
      // $body.css('width', 'auto');
      // bodyWidth = $body.width();
      // $body.removeClass('no-scroll');
    }
  }


  // shop-page.html - Открытие товара

  if (!window.location.origin) {
    window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ':' + window.location.port: '');
  }

  if (($('body').hasClass('inner-page--shop')) || ($('body').hasClass('inner-page--services'))) {
    $('.product__link, .page-section__link-bottom--ajax').click(showProduct);
    $('body').on('click', '.go-back, .product-page__overlay', hideProduct);

    var $bodyPosition;

    function showProduct(evt) {
      evt.preventDefault();


      var origin = window.location.origin;
      var page = $(this).attr('href');

      var href = encodeURI(origin + '/' + page);

      $bodyPosition = $(window).scrollTop();

      $body.addClass('no-scroll');
      $body.css('top','-' + $bodyPosition + 'px');



      $('.product-page').load(href + ' ' + '.product-page > *', function () {
        setTimeout(function() {
          $('.product-page').addClass('product-page--open');
        }, 0);

      });



    }

    function hideProduct(evt) {
      evt.preventDefault();
      $('.product-page').removeClass('product-page--open');

      $body.removeClass('no-scroll');
      $body.css('top', 0);

      $(window).scrollTop($bodyPosition);

    }
  }





   // для адаптиного меню категорий в магазине и в работах.
  setDropdownToggle('hamburger', '.page-section__nav');







/*  $('.slider ul').itemslide({
    left_sided: true
  });*/


 // services.html  Smooth Scrolling to anchor
 // uses jquery.scrollTo and jquery.localScroll plugins
 // https://github.com/flesler/jquery.scrollTo
// https://github.com/flesler/jquery.localScroll


  if ($body.hasClass('inner-page--services')) {
    $.localScroll({
      queue:true,
      duration:1000,
      hash:true
    });
  }



 // file uploading script
 var files;

 $('.input-file').on('change', function(){

  if (window.FormData === undefined) {
   var filename = $(this).val().replace(/.*\\/, "");
   $('.input-file-text').val(filename);
   if (filename) {
    fileLoad();
   }
  } else {
    files = this.files;
    if (files.length) {
      $('.input-file-text').val(files[0].name);
      fileLoad();
    }
  }


});


var labelIcon = 'label-file__icon';

 function showLoader() {
  $('.' + labelIcon).removeClass().addClass(labelIcon +  ' ' + labelIcon + '--loader');
 }

 function showSuccessLoading() {
  $('.' + labelIcon).removeClass().addClass(labelIcon +  ' ' + labelIcon + '--success');

 }

 function showErrorMessage() {
  $('.' + labelIcon).removeClass().addClass(labelIcon +  ' ' + labelIcon + '--add');
  $('.input-file-text').val('Произошла ошибка - попробуйте снова');

 }

 function fileLoad(event) {

  showLoader();



  var data = new FormData();
  $.each( files, function( key, value ){
    data.append( key, value );
  });

  var queryString = $('.page-section__form').formSerialize();

  // Отправляем запрос
  $.ajax({
    url: './submit.php?uploadfiles',
    type: 'POST',
    data: data,
    cache: false,
    dataType: 'json',
    processData: false, // Не обрабатываем файлы (Don't process the files)
    contentType: false, // Так jQuery скажет серверу что это строковой запрос
    success: function( respond, textStatus, jqXHR ){
      // Если все ОК
      if( typeof respond.error === 'undefined' ) {

        showSuccessLoading();
        // Файлы успешно загружены, делаем что нибудь здесь

        // выведем пути к загруженным файлам в блок '.ajax-respond'
        var files_path = respond.files;
        var html = '';
        $.each( files_path, function( key, val ){ html += val +'<br>'; } )
        $('.ajax-respond').html( html );
      }
      else{
        showErrorMessage();
      }
    },
    error: function( jqXHR, textStatus, errorThrown ){
      showErrorMessage();
    }
  });

}

$('.input-text--textarea').autogrow({
  vertical: true,
  horizontal: false
});

$('.input-text').on('change', function() {
  if ($(this).val() == '') {
    $(this).siblings('.label-text').removeClass('label-text--up');
  } else {
    $(this).siblings('.label-text').addClass('label-text--up');
  }
});




  // ф-ия которая создает раскрывающиеся меню
  function setDropdownToggle(toggleBtn, delegator) {
    var deleg = delegator || "body";
    var closeBtn = $(deleg).find("." + toggleBtn);
    var dropdownClassname = closeBtn.data("toggle");
    var dropdown = $("." + dropdownClassname);

    $(deleg).on("click", "." + toggleBtn, function(event) {
      event.preventDefault();
      var $this = $(this);
      var dropdownEl = ($this.parent().hasClass(dropdownClassname)) ?
                       ($this.parent()) :
                       ($this.parent().find("." + dropdownClassname));


      dropdownEl.toggleClass(dropdownClassname + "--closed");
      $this.toggleClass(toggleBtn + "--opened");
    });
  }


  // ф-ия создающая панель со вкладками(табами)

function setTabs(tabs, panel) {
    var tabsClass = "." + tabs;
    var panelClass = "." + panel;

    $("body").on("click", tabsClass + " a", function(evt) {
      evt.preventDefault();
      $this = $(this);
      $(panelClass).hide();
      var linkActive = $(tabsClass + " a").attr("class").toString().split(" ")[0] + "--active";
      $(tabsClass + " a." + linkActive).removeClass(linkActive);
      $this.addClass(linkActive).blur();
      var tabsClosed = $(tabsClass).attr("class").toString().split(" ")[0] + "--closed";
      $(tabsClass).addClass(tabsClosed).blur();
      var panel = $this.attr("href");
      $(panel).fadeIn(250);
    });
    if ($(tabsClass + " > li").length) {
      $(tabsClass + " li:first a").click();
    } else {
      $(tabsClass + " a:first").click();
    }
 }

 // for ie8

 $('body').append(' ' + $('span.placeholder').text() + ' ');


});


// Google Maps
var map;
var mapStyles;



mapStyles = [
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {

                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e9e9e9"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#ff0000"
            },
            {
                "invert_lightness": true
            },
            {
                "weight": "0.83"
            },
            {
                "gamma": "10.00"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "47"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#e7e7e7"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#c3c3c3"
            }
        ]
    },
    {
        "featureType": "transit.station",
        "elementType": "labels.icon",
        "stylers": [
            {
                "saturation": "-100"
            },
            {
                "lightness": "-20"
            },
            {
                "gamma": "1.50"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#d0d0d0"
            }
        ]
    }
];
function initMap() {
  var myLatLng = {lat: 55.774539, lng: 49.120200};
  var image = 'img/map-marker.png';

  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 18,
    styles: mapStyles
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image,
    title: 'Гротеск'
  });
}
