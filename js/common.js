var swiper = new Swiper(".big-gal", {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "progressbar",
    },

    breakpoints: {
        576:{
            slidesPerView: 2
        },
        992:{
            slidesPerView: 3
        }
    }
  });