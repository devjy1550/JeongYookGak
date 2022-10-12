window.onload = function () {
  let em_swiper = new Swiper(".em-swiper", {
    loop: true,
    speed: 1000,
    effect: "fade",
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    navigation: {
      prevEl: ".ems-control-prev",
      nextEl: ".ems-control-next",
    },
    pagination: {
      el: ".em-swiper-pgnt",
      type: "fraction",
    },
  });
};

$(document).ready(function () {
  let modalWrap = $(".modal-wrap");
  let modalClose = $(".modal-close");

  modalClose.click(function () {
    $(".modal-wrap").hide();
  });

  modalWrap.click(function () {
    $(".modal-wrap").hide();
  });
});
