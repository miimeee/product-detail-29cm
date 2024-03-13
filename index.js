$(function () {
  const $prevButton = $(".arrow-btn:not(.active)");
  const $nextButton = $(".arrow-btn.active");
  const $sliderInner = $(".img-slider-inner");
  const $firstPage = $(".pagenation-btn.active");
  const $secondPage = $(".pagenation-btn:not(.active)");

  $prevButton.on("click", function () {
    $(this).removeClass("active");
    $nextButton.addClass("active");
    $secondPage.removeClass("active");
    $firstPage.addClass("active");
    $sliderInner.css("left", "0");
  });

  $nextButton.on("click", function () {
    $(this).removeClass("active");
    $prevButton.addClass("active");
    $firstPage.removeClass("active");
    $secondPage.addClass("active");
    $sliderInner.css("left", "-100%");
  });

  $firstPage.click(function () {
    $secondPage.removeClass("active");
    $(this).addClass("active");
    $prevButton.removeClass("active");
    $nextButton.addClass("active");
    $sliderInner.css("left", "0");
  });

  $secondPage.click(function () {
    $firstPage.removeClass("active");
    $(this).addClass("active");
    $nextButton.removeClass("active");
    $prevButton.addClass("active");
    $sliderInner.css("left", "-100%");
  });
});

$(function(){
  $(".product-name div:nth-child(2) i").click(function(){
    $(this).toggleClass("active")
  })
})

$(function(){
  $(".option").click(function(event){
    event.stopPropagation(); // 중단
    $(this).siblings("#option-name").toggleClass("active");
  });

  $(document).click(function(){
    $(".option").siblings("#option-name").removeClass("active");
  });
});
