(function($){
    $(document).ready(function(){
        var monthText = {
            "ru" : [
                " ",
                "Январь",
                "Февраль",
                "Март",
                "Апрель",
                "Май",
                "Июнь",
                "Июль",
                "Август",
                "Сентябрь",
                "Октябрь",
                "Ноябрь",
                "Декабрь"
            ]
        };
        $('.poster-calendar-month-arrow-l').on('click',function(){
            var monthName = $(this).parent().find('.poster-calendar-month-name');
            var month = +monthName.data('month-num');
            var year = +monthName.data('year-num');
            month-- ;
            if (month == 0){
                month = 12;
                year--;
            }
            console.log(month);
            console.log(year);
            if($('.poster-calendar-day[data-month-num='+month+']'+ '[data-year-num='+year+']').length>0){
                monthName.data('month-num',month);
                monthName.data('year-num',year);
                monthName.text(monthText.ru[month]+' '+year);
                $('.poster-calendar-day').hide();
                $('.poster-calendar-day[data-month-num='+month+']'+ '[data-year-num='+year+']').show();
            }

        });
        $('.poster-calendar-month-arrow-r').on('click',function(){
            var monthName = $(this).parent().find('.poster-calendar-month-name');
            var month = +monthName.data('month-num');
            var year = +monthName.data('year-num');
            month++ ;
            if (month == 13){
                month = 1;
                year++;
            }
            console.log(month);
            console.log(year);
            if($('.poster-calendar-day[data-month-num='+month+']'+ '[data-year-num='+year+']').length>0){
                monthName.data('month-num',month);
                monthName.data('year-num',year);
                monthName.text(monthText.ru[month]+' '+year);
                $('.poster-calendar-day').hide();
                $('.poster-calendar-day[data-month-num='+month+']'+ '[data-year-num='+year+']').show();
            }

        });
        $('.header-mobile-menu-item-lang').on('click',function(){
            $('.header-select-lang').fadeToggle();
        });
        $('.js-btn-unsubscription-all').on('click',function(){
            $(this).closest('.subscription-col').find('input').attr('checked',false);
        });
        $('.poster-catalog-item-like').on('click',function(){
            $(this).toggleClass('poster-catalog-item-like-active');
        });
        $('.custom-select-current').on('click',function(){
            $(this).closest('.custom-select').find('.custom-select-options').slideToggle();
            $(this).toggleClass('custom-select-current-active');
        });
        $('.poster-catalog-item-preview-text-open-btn').on('click',function(){
            $(this).parent().find('.poster-catalog-item-preview-text').toggleClass('poster-catalog-item-preview-text-open');
            $(this).toggleClass('poster-catalog-item-preview-text-open-btn-active');
        });
        $('.custom-select-option').on('click',function(){
            var value = $(this).data('value');
            var text = $(this).text();
            var select = $(this).closest('.custom-select').find('select');
            $(this).closest('.custom-select').find('.custom-select-options').slideToggle();
            $(this).closest('.custom-select').find('.custom-select-current').toggleClass('custom-select-current-active').text(text);
            select.find('option').prop('selected',false);
            select.find('option[value="'+value+'"]').attr('selected','selected');
        });
        $(function(){
            $(document).click(function(event) {
                if ($(event.target).closest(".custom-select").length) return;
                $('.custom-select-options').slideUp();
                $('.custom-select-current').removeClass('custom-select-current-active');
                event.stopPropagation();
            });
        });
        $(function(){
            $(document).click(function(event) {
                if ($(event.target).closest(".header-mobile-menu-item-lang").length) return;
                $('.header-select-lang').fadeOut();
                event.stopPropagation();
            });
        });
        $('.header-mobile-menu-open-btn').on('click',function(){
            $(this).toggleClass('header-mobile-menu-close-btn');
            $('.header-mobile-menu-top').fadeToggle();
        });
        $('.bay-ticket-hall-seats-row-item').on('click',function(){
            if(!$(this).hasClass('bay-ticket-hall-seats-row-item-blue') && !$(this).hasClass('bay-ticket-hall-seats-row-item-gray')){
                $(this).toggleClass('bay-ticket-hall-seats-row-item-active');
            }
        });
        $('.header-top-search-open-icon').on('click',function(){
            $('.header-top-search-input-box').fadeIn();
            $('.header-top-search-input').focus();
        });
        $('.review-list-item-text-all').on('click',function(){
            var textItem = $(this).closest('.review-list-item').find('.review-list-item-text');
            var textItemH = 80;
            if(textItem.height() > 80){
                textItem.height(80);
            }else{
                textItem.height('auto');
            }

        });
        $(function(){
            $(document).click(function(event) {
                if ($(event.target).closest(".header-top-search-box,.header-mobile-menu-item-search").length) return;
                $('.header-top-search-input-box').fadeOut();
                event.stopPropagation();
            });
        });
        $(function(){
            $(document).click(function(event) {
                if ($(event.target).closest(".header-mobile-menu-item-menu,.header-mobile-menu-top").length) return;
                $('.header-mobile-menu-top').fadeOut();
                $('.header-mobile-menu-open-btn').removeClass('header-mobile-menu-close-btn');
                event.stopPropagation();
            });
        });
        $('.header-top-search-input-box').on({
            'mouseleave' : function(){
                if(!$('.header-top-search-input').is(":focus")){
                    $('.header-top-search-input-box').fadeOut();
                }

            }
        });
        $('.fancybox').fancybox({
            padding: 60,
            titleShow: true,
            titlePosition: 'inside'
        });
        $(document).on('click','.news-detail-section-title',function(){
            if($(window).width() < 1199){
                $(this).toggleClass('news-detail-section-title-up').parent().next().slideToggle();
            }
        });

        $(window).resize(function(){

        });
        
    });
})(jQuery);

function scroll_to(item,speed,paddingTop) {
    paddingTop = paddingTop || 0;
    speed = speed || 300;
    var top = $(item).offset().top + paddingTop;
    $('html, body').stop().animate({scrollTop: top}, speed);
    return false;
}
function sliderLoader(item,speed,startWidth){
    startWidth = startWidth || 0;
    speed = speed || 5000;
    $(item).stop().css('width',startWidth).animate({width: '100%'}, speed);
}

function link(link){
    window.location = link;
}
