$(function () {
  var $prevButton = $(".arrow-btn:not(.active)");
  var $nextButton = $(".arrow-btn.active");

  var $sliderInner = $(".img-slider-inner");

  $prevButton.on("click", function () {
    $(this).removeClass("active");
    $nextButton.addClass("active");
    $sliderInner.css("left", "0");
  });

  $nextButton.on("click", function () {
    $(this).removeClass("active");
    $prevButton.addClass("active");
    $sliderInner.css("left", "-100%");
  });
});
