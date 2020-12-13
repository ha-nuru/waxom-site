$(document).ready(function () {
  $('a[href="#"]').click(function (e) {
    e.preventDefault();
  });
  // bx-slider recent post
  $(".posts_list").bxSlider({
    minSlides: 1,
    maxSlides: 3,
    moveSlides: 1,
    slideMargin: 30,
    slideWidth: 370,
    pager: false,
    nextSelector: ".bx_controls .next",
    prevSelector: ".bx_controls .prev",
  });
  // bx-slider slider
  var $window_width = $(window).width();
  if ($window_width > 768) {
    $(".slider_list").bxSlider({
      speed: 1300,
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      pager: true,
      auto: true,
      autoHover: true,
      touchEnabled: true,
      nextSelector: ".controls .next",
      prevSelector: ".controls .prev",
    });
  } else {
    $(".slider_list").bxSlider({
      minSlides: 1,
      maxSlides: 1,
      moveSlides: 1,
      pager: true,
      controls: false,
      nextSelector: ".controls .next",
      prevSelector: ".controls .prev",
    });
  }

  //상단 메뉴 고정
  var $header = $("header");
  var $service = $(".services");
  var $counter = $(".counters");
  var $counterData = $counter.find("h3");
  var $serviceExecuted = false;
  var $counterExecuted = false;

  $(window).scroll(function () {
    var $currentSct = $(this).scrollTop();
    var $offset = 600;
    var $window_width = $(window).width();
    if ($window_width > 768) {
      if ($currentSct > 0) {
        $header.addClass("sticky");
      } else {
        $header.removeClass("sticky");
      }
    }
    //service-item 나타나기
    var $serviceThreshold = $service.offset().top - $offset;
    if (!$serviceExecuted) {
      if ($currentSct >= $serviceThreshold) {
        $service.addClass("active");
        $serviceExecuted = true;
      }
    }
    // 숫자애니메이션
    var $counterThreshold = $counter.offset().top - $offset;

    if ($currentSct > $counterThreshold) {
      if (!$counterExecuted) {
        $counterData.each(function () {
          var $current = $(this);
          var $target = $current.attr("data-rate");
          $({
            rate: 0,
          }).animate(
            {
              rate: $target,
            },
            {
              duration: 2500,
              progress: function () {
                var now = this.rate;
                $current.text(Math.ceil(now));
              },
            }
          );
        });
        $counterExecuted = true;
        console.log($counterExecuted);
      } //counterExecuted if
    } //scroll if
  }); // scroll event

  //video
  $(".video .icon").click(function (v) {
    v.preventDefault();
    $("#overlay").addClass("visible");
    //overlay
    $("iframe").attr(
      "src",
      "https://www.youtube.com/embed/Rk6_hdRtJOE?autoplay=1"
    );
  });

  $(".video #overlay").click(function (v) {
    v.preventDefault();
    $("#overlay").removeClass("visible");
    $("iframe").attr("src", "https://www.youtube.com/embed/Rk6_hdRtJOE");
  });
  // 반응형 햄버거
  $(".toggle").click(function (e) {
    e.preventDefault();
    $(".main_menu").slideToggle();
  });
  $(window).resize(function () {
    if ($window_width > 768) {
      $(".toggle").click(function (e) {
        e.preventDefault();
        $(".main_menu").slideToggle();
      });
    }
  });

  // filteriz
  var filterizd = $(".filter-container").filterizr({});
  $(a).click(function (f) {
    f.preventDefault();
  });
});
