$(document).ready(function () {
  //navbar-toggler
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler").toggleClass("change");
  });
});

  //adding background and fixed
  $(window).scroll(function () {
    let position = $(this).scrollTop();
    if (position >= 149) {
      $(".navbar").addClass("navbar-background");
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("navbar-background");
      $(".navbar").removeClass("fixed-top");
    }
  });
