$(document).ready(function() {


  // SELECTBOX

  if ($().selectBoxIt) {
    $('#tariff').selectBoxIt();
  }


  setDropdownToggle("products__link");

  // Table Tabs


  var tableTab = 'table__head-link';
  var activeTableTab = tableTab + '--active';
  var $tableInner = $('.table__inner');


  $('.' + tableTab).on('click', function( event ) {

    event.preventDefault();
    $('.' + activeTableTab).removeClass(activeTableTab);
    $(this).addClass(activeTableTab);


    var tableWidth = $tableInner.width();
    var tableColWidth = tableWidth/3;

    var id = $(this).attr('href');
    switch(id) {
      case '#standart':
        $tableInner.css('margin-left', 0 + 'px');
        break;

      case '#extended':
        $tableInner.css('margin-left', '-' + tableColWidth + 'px');
        break;

      case '#master':
        $tableInner.css('margin-left', '-' + tableColWidth*2 + 'px');
        break;

    }
  });

  $(window).on('resize', function () {
    var $activeTab = $('.' + activeTableTab);
    console.log($activeTab);

     var tableWidth = $tableInner.width();
    var tableColWidth = tableWidth/3;

    var id = $activeTab.attr('href');
    switch(id) {
      case '#standart':
        $tableInner.css('margin-left', 0 + 'px');
        break;

      case '#extended':
        $tableInner.css('margin-left', '-' + tableColWidth + 'px');
        break;

      case '#master':
        $tableInner.css('margin-left', '-' + tableColWidth*2 + 'px');
        break;

    }

  });






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



  $('form').validate({
    rules: {
      name: 'required',
      agreement: 'required',
      email: {
        email: true
      }
    },
    messages: {
      name: 'Введите ваше имя',
      agreement: 'Вы должны согласиться на обработку персональных данных',
      email: {
        email: 'Указан некорректный адрес e-mail'
      }
    }
  });

  //код для открытия/закрытия навигационного меню

  $('.no-js').each(function() {
    $(this).removeClass('no-js');
  });


  $('.page-nav__hamburger').on('click', function() {
    $('.page-nav__hamburger').toggleClass('hamburger--opened');
    $('.page-nav').toggleClass('page-nav--open');
  });



  // навигационное меню
  $(window).keydown(function(eventObject){
    if (eventObject.which == 27) {
      $('.page-nav__hamburger').removeClass('hamburger--opened');
      $('.page-nav').removeClass('page-nav--open');
      $body.css('width', 'auto');
      bodyWidth = $body.width();
      $body.removeClass('no-scroll');
    }
  });

  setDropdownToggle('hamburger', '.page-section__nav');

  // checkbox for ie8

  $('#agreement:checked + [for="agreement"]').addClass('checked');

  $('[for="agreement"]').on('click', function() {
    $('[for="agreement"]').toggleClass('checked');
  });

  // equel height blocks in index.html

  var $tile = $('.offers__content');

  justifyHeight();

  justifyHeightThrottled = throttle(justifyHeight, 100);


  $(window).on('resize', justifyHeightThrottled);

  function  justifyHeight() {
    if ($('body').width() >= 1300) {
      var arr = [];
      var height;
      var diff;

      $tile.each(function() {
        arr.push($(this).height());
      });
      if ((arr[0] == arr[1]) && (arr[0] == arr[2])) {
        return;
      }
      var maxHeight = Math.max.apply(Math,arr);

      $tile.each(function() {
        $(this).css('height', maxHeight);
      });
    } else {
      $tile.each(function() {
        $(this).css('height', 'auto');
      });
    }
  }
  function throttle(fn, delay) {
    var lastCall = Date.now();

    return function() {
      var now = Date.now();

      if ((now - lastCall) > delay) {
        fn();
        lastCall = now;
      }
    };
  }



















});

