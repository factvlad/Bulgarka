$(function () {
  // $(".menu__btn").on("click", function () {
  //   $(".menu__list").toggleClass("active");
  // });

 


  $(".header__slider").slick({
    dots: true,
    fade: true,
    autoplay: true,
  });

  $(".gallery__slider").slick({
    dots: true,
    fade: true,
    autoplay: true,
    prevArrow: false,
    nextArrow: false,
  });

  $(".clients__slider").slick({
    dots: false,
    fade: true,
    autoplay: true,
    prevArrow:
      "<button  type='button' class='slick-prev'><svg class='prev' width='37' height='37' viewBox='0 0 37 37' fill='none' xmlns='http://www.w3.org/2000/svg'><rect class='rect-prev' x='0.921875' y='0.941406' width='36' height='36' rx='6' fill='white'/><path class='path-prev' d='M20.9219 24.9414L14.9219 18.9414L20.9219 12.9414' stroke='#9EAAB7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
    nextArrow:
      "<button  type='button' class='slick-next'><svg  class='next' width='37' height='37' viewBox='0 0 37 37' fill='none' xmlns='http://www.w3.org/2000/svg'><rect class='rect-next'width='36' height='36' rx='6' transform='matrix(-1 0 0 1 36.25 0.566406)' fill='white'/><path class='path-next' d='M16.25 24.5664L22.25 18.5664L16.25 12.5664' stroke='#9EAAB7' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/></svg></button>",
  });

  $(".slick-prev").hover(function () {
    $(".rect-prev").toggleClass("actived");
  });
  $(".slick-prev").hover(function () {
    $(".path-prev").toggleClass("actived");
  });

  $(".slick-next").hover(function () {
    $(".rect-next").toggleClass("actived");
  });
  $(".slick-next").hover(function () {
    $(".path-next").toggleClass("actived");
  });


});
