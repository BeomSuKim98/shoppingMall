function SwiperController() {
  const swiper1 = new Swiper(".swiper-container-firstTopNotice", {
    direction: "vertical",
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  const swiper2 = new Swiper(".swiper-container-mainBanner", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    spacebetween: 10,
    slidespergroup: 1,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
  });
}

SwiperController();
