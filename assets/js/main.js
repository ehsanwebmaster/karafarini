// OWlcarousel main slider
$("#indexslide").owlCarousel({
  rtl: true,
  loop: true,
  margin: 30,
  nav: false,
  center: true,
  dots: false,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});
$("#indexslide2").owlCarousel({
  rtl: true,
  loop: true,
  margin: 20,
  nav: false,
  dots: false,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
    1200: {
      items: 4,
    },
  },
});
$("#indexslide3").owlCarousel({
  rtl: true,
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 6000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});
$("#indexslide4").owlCarousel({
  rtl: false,
  loop: true,
  margin: 20,
  nav: false,
  dots: true,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 1,
    },
    1000: {
      items: 1,
    },
    1200: {
      items: 1,
    },
  },
});
var owl = $("#indexslide");
owl.owlCarousel();
// Go to the next item
$(".am-next").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".am-prev").click(function () {
  // With optional speed parameter
  // Parameters has to be in square bracket '[]'
  owl.trigger("prev.owl.carousel", [300]);
});
//Sticky Sidebar
var sidebar = new StickySidebar(".sidebar", {
  containerSelector: "#main-content",
  innerWrapperSelector: ".sidebar__inner",
  topSpacing: 10,
  bottomSpacing: 10,
  minWidth: 1024,
});
// TextSize
const singleContent = document.querySelector(".singlecontent");
const textPlus = document.querySelector(".textplus");
const textMines = document.querySelector(".textminus");
let fontSize = 0.9;
textPlus.addEventListener("click", () => {
  fontSize += 0.1;
  singleContent.style.fontSize = `${fontSize}rem`;
});
textMines.addEventListener("click", () => {
  fontSize -= 0.1;
  singleContent.style.fontSize = `${fontSize}rem`;
});
