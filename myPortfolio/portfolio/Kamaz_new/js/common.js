$(document).ready(function() {
  function setDropdownToggle(toggleBtn, delegator) {
    var closeBtn = $("." + toggleBtn);
    var dropdownClassname = closeBtn.data("toggle");
    var dropdown = $("." + dropdownClassname);
    var deleg = delegator || "body";

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

  setDropdownToggle("nav-button--menu");
  setDropdownToggle("page-header__menu-btn");
  setDropdownToggle("nav__btn");
  setDropdownToggle("page-header__search-btn");
  setDropdownToggle("page-footer__nav-link");
  setDropdownToggle("page-header__flags-btn");
  setDropdownToggle("matches__dropdown-btn");

  setDropdownToggle("dropdown-select__btn");

  setDropdownToggle("dropdown-nav__btn");

  setDropdownToggle("nav__btn", "table");

 // club-history.html

  var nextBtn = $(".main__history-nav-btn--next");
  var prevBtn = $(".main__history-nav-btn--prev");
  var historyList = $(".main__history-nav-list");
  var historyItem = $(".main__history-nav-item");

  prevBtn.addClass("hidden");
  nextBtn.on("click", function(event) {
    historyList.animate({
      marginLeft: "-=150"
    }, function(){
      var ml = historyList.css("margin-left");
      if (ml == "-150px") {
        prevBtn.removeClass("hidden");
      }
      if (ml == "-450px") {
        nextBtn.addClass("hidden");
      }
    });

  });
  prevBtn.on("click", function(event) {
    historyList.animate({
      marginLeft: "+=150"
    }, function() {
      var ml = historyList.css("margin-left");
      if (ml == "0px") {
        prevBtn.addClass("hidden");
      }
      if (ml == "-300px") {
        nextBtn.removeClass("hidden");
      }

    });

  });

  // blocks slider - matches-sostav.html, main-page.html

  function setSlider(id) {

    var $btn = $( "#" + id + " .custom-slider__control");
    var $btnRight = $( "#" + id + " .right.custom-slider__control");
    var $btnLeft = $( "#" + id + " .left.custom-slider__control");

    var $blockLeft = $( "#" + id + " .custom-slider__item--left");
    var $blockRight = $( "#" + id + " .custom-slider__item--right");

    function hideControl() {
      if ($blockLeft.hasClass("active")) {
        $btnLeft.fadeOut(100);
        $btnRight.fadeIn(100);
      } else {
        $btnRight.fadeOut(100);
        $btnLeft.fadeIn(100);
      }
    }

    hideControl();

    $btn.on("click", function () {

      setTimeout(hideControl, 1000);

    });
  }

  setSlider("custom-slider");
  setSlider("custom-slider2");

  // tabbedPanel

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



 setTabs("tabs","panel");
 setTabs("dropdown-nav__list--forecast","forecast__score");
 setTabs("matches__header","main-page__tables-carousel");
 setTabs("dropdown-nav__list--poll","poll__table-wrapper");

 setTabs("main__history-nav-list","main__article");

 // carouselTabs

 function setCarouselTabs(sliderID, panel, tab, animationDuration) {
   $("body").on("slid.bs.carousel", sliderID, function () {
     $(panel).hide();
     var activePanel = $(tab + ".active").attr("data-switch");
     var duration = (animationDuration) ? animationDuration : 250;
     $(activePanel).fadeIn(duration);
   });
   $(sliderID).trigger("slid.bs.carousel");
 }

 setCarouselTabs("#table-header", ".tour-table__panel", ".tour-table__tab");
 setCarouselTabs("#birthday-slider", ".birthday__panel", ".birthday__tab");
 setCarouselTabs("#alumni-slider", ".alumni__panel", ".alumni__tab");

  // tableDropdown

  $(".table__mobile-block").hide();
  $("body").on("click", ".table__btn", function (evt) {
    evt.preventDefault();
    $this = $(this);
    var block = $this.attr("href");
    $(block).fadeToggle(400);
  });


  // main-page.html

  if ($('.content-slider').slick) {
    $('.content-slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.main-slider__imgs',
      speed: 0
    });

    $(".main-slider__imgs").slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      centerMode: true,
      centerPadding: '0px',
      asNavFor: '.content-slider',

      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
          }
        },
      ]
    });


    $('.main-slider__imgs').on('click', '.slick-active:not(.slick-center)', function() {
      if($(this).prev('.slick-center').length) {

        $('.slick-next').trigger('click');
      } else {
        $('.slick-prev').trigger('click');
      }

    });
  }





    // player-profile.html




   function setCarouselAjax(sliderID, panel, tab, animationDuration) {

    $("body").on("slide.bs.carousel", sliderID, function () {
      $(".player-page__slider-pic").removeClass("nextSlide");
    });


    $("body").on("slid.bs.carousel", sliderID, carouselLoad);

    $(".main").on("click", ".dropdown-nav__link", dropdownLoad);

    function carouselLoad() {

      var src = $(tab + ".active").attr("data-switch") || $(tab + ".active").attr("href");
      var duration = (animationDuration) ? animationDuration : 250;

      $(".dropdown-nav__link").removeClass("dropdown-nav__link--active");
      $(".dropdown-nav__link[href=\"" + src + "\"]").addClass("dropdown-nav__link--active");


      $(".player-page__player-number").load(src + " " + ".player-page__player-number > *");
      $(".player-page__data").load(src + " " + ".player-page__data > *").hide().fadeIn(duration);
      $(panel).load(src + " " + panel + " > *").hide().fadeIn(duration, function() {
        $("body").find(".table__mobile-block").hide();
        setTabs("tabs","panel");
      });

      $(".player-page__slider-pic.active + .player-page__slider-pic").addClass("nextSlide");
    }

    function dropdownLoad() {

      var src = $(this).attr("href");
      var duration = (animationDuration) ? animationDuration : 250;

      $(".player-page__slider-pic").removeClass("active nextSlide");
      $(".player-page__slider-pic[data-switch=\"" + src + "\"]").addClass("active");
      $(".player-page__slider-pic[data-switch=\"" + src + "\"] + .item").addClass("nextSlide");


      $(".player-page__player-number").load(src + " " + ".player-page__player-number > *");
      $(".player-page__data").load(src + " " + ".player-page__data > *").hide().fadeIn(duration);
      $(panel).load(src + " " + panel + " > *").hide().fadeIn(duration, function() {
        $("body").find(".table__mobile-block").hide();
        setTabs("tabs","panel");
      });

      $(".player-page__slider-pic.active + .player-page__slider-pic").addClass("nextSlide");
    }


    $(sliderID).trigger("slid.bs.carousel");
   }
   setCarouselAjax("#player-slider", ".player-page__sections", ".player-page__slider-pic", 1000);



   // matches.html
   $(".matches--stats").hide();
   $(".matches-main-page__wrapper").hover(function() {
      $(".matches--stats").stop(true, true);
      $(this).find(".matches").addClass("matches--top");
      $(this).find(".matches--stats").slideDown();
   },
   function() {
    $(".matches--stats").stop(true, true);
    $(this).find(".matches").removeClass("matches--top");
    $(this).find(".matches--stats").slideUp();
   });


   // mastering nav

   //    $('.nav').on('click', '.nav__btn',


   $(window).resize(setNavigation);
   setNavigation();


    function setNavigation() {
    var containerWidth;
    var navWidth = 0;
    var $nav = $('.nav:first');

    var $navList = $nav.find('.nav__list');
    var $navItem = $navList.find('.nav__item');
    var $navBtn = $nav.find('.nav__btn');

    function getNavWidth() {
      navWidth = 0;
      $navItem.each(function() {
        navWidth = navWidth + $(this).width();
      });

    }
    
    function getContainerWidth() {
      containerWidth = $('.page-header__container:first-child').width();

    }

    getContainerWidth();
    getNavWidth();

    if ((containerWidth >= 750) && !($('.nav').hasClass('tabs'))) {
      if (navWidth > containerWidth) {
        $navList.css('width', 1240 + 'px');
        $navBtn.show();
      } else {
        $navList.css('width', containerWidth + 'px');
        $navBtn.hide();
      }
    } else {
      $navList.attr('style', '');
      $navBtn.show();
    }

   }



});
