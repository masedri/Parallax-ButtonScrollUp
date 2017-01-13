$(document).ready(function showArrow() {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $("#volver").fadeIn();
    } else {
      $("#volver").fadeOut();
    }
  });

  $('#volver').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 100);
  });
});
