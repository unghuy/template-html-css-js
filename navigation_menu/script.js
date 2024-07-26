$(document).ready(function () {
  $('.icon').hover(
    function () {
      $(this).addClass('animated-hover');
    }, function () {
      $(this).removeClass('animated-hover');
    }
  );
});

// Menu Mobile
$(document).ready(function () {
  const hamburgerMenu = $(".hamburger-menu");
  const nav = $(".nav");
  hamburgerMenu.on("click", function () {
    nav.toggleClass("active");
  });
});
