var swiper = new Swiper(".mySwiper", {
  slidesPerView: "2",
  spaceBetween: 10,
  loop: true,
  freeMode: true,

  scrollbar: {
    el: ".swiper-scrollbar",
    hide: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

/* swiper ver opciones */

var swiper = new Swiper(".SwiperOpciones", {
  slidesPerView: "auto",
  spaceBetween: 5,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992:{
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

/* swiper busquedas recientes */
var swiper = new Swiper(".SwiperBusquedaReciente", {
  slidesPerView: "auto",
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});




