$(function() {
  var headHeight = $('header').outerHeight();
  $('.content').css({'margin-top': headHeight });
});

window.addEventListener('scroll', function () {
  document.body.classList[
    window.scrollY > 20 ? 'add': 'remove'
  ]('scrolled');
});

$(function() {
  var footHeight = $('footer').outerHeight();
  $('footer img').css({'height': footHeight });
});