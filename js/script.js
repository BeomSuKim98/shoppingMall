function SwiperTopBanner() {
  const swiper1 = new Swiper(".swiper-container-firstTopNotice", {
    direction: "vertical",
    loop: true,
    slidesPerView: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });
}

SwiperTopBanner();

function SwiperMainBanner() {
  const swiper2 = new Swiper(".swiper-container-mainBanner", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 10,
    slidespergroup: 1,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainBanner_page",
      type: "bullets",
      clickable: true, // 페이지네이션을 클릭하여 슬라이드를 이동할 수 있게 함
    },
  });
}

SwiperMainBanner();
