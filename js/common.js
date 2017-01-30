var close = $('.cabinet__toggle');
var open = $(".cabinet__toggle--closed");
var pageNav = $(".cabinet__links");

close.on("click", function(event) {
  event.preventDefault();
  pageNav.toggleClass("cabinet__links--closed");
  close.toggleClass("cabinet__toggle--closed");
});

