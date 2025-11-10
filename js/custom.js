$(document).ready(function () {
  $(".sidebar-title-list").hide();

  $(".sidebar-com-title > a").click(function (e) {
    e.preventDefault();
    var $submenu = $(this).next(".sidebar-title-list");

    if ($submenu.is(":visible")) {
      $submenu.slideUp();
      $(this).parent().removeClass("active");
    } else {
      $(".sidebar-title-list").slideUp();
      $(".sidebar-com-title").removeClass("active");

      $submenu.slideDown();
      $(this).parent().addClass("active"); // this adds the blue color
    }
  });
});

// const swiper = new Swiper(".table-swiper", {
//   slidesPerView: "auto",
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     draggable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });
