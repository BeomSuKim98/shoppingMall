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
  var swiper1 = new Swiper(".swiper-container-mainBanner", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 10,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".mainBanner_fraction",
      type: "fraction",
      renderFraction: function (mainBanner_currentPage, mainBanner_totalPage) {
        return `<span class="${mainBanner_currentPage}"></span> 
        / <span class="${mainBanner_totalPage}"></span>`;
      },
      fotmatFractionCurrent: function (n) {
        return n < 10 ? `0${n}` : n;
      },
      fotmatFractionTotal: function (n) {
        return n < 10 ? `0${n}` : n;
      },
      clickable: true, // 페이지네이션을 클릭하여 슬라이드를 이동할 수 있게 함
    },
  });

  var swiper2 = new Swiper(".swiper-container-mainBanner", {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    centeredSlides: false,
    spaceBetween: 10,
    pagination: {
      el: ".mainBanner_progressbar",
      type: "progressbar",
      clickable: true, // 페이지네이션을 클릭하여 슬라이드를 이동할 수 있게 함
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        centeredSlides: false,
      },

      1200: {
        slidesPerView: 3,
        centeredSlides: true,
        // slidespergroup: 1,
      },
    },
  });

  swiper1.controller.control = swiper2;
}

SwiperMainBanner();

// 랜덤 함수
function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function SwiperCategory(n) {
  const swiper1 = new Swiper(`.swiper-container-categoryBox-${n}`, {
    direction: "horizontal",
    loop: true,
    slidesPerView: 1,
    // centeredSlides: true,
    // spaceBetween: 10,
    // slidespergroup: 1,
    // autoplay: {
    //   delay: getRandom(4000, 6000),
    //   disableOnInteraction: false,
    //   pauseOnMouseEnter: true,
    // },
    navigation: {
      nextEl: `.swiper-categoryBox-btn-group-${n} .swiper-btn-next`,
      prevEl: `.swiper-categoryBox-btn-group-${n} .swiper-btn-prev`,
    },
    pagination: {
      el: `.categoryBox_page-${n}`,
      type: "bullets",
      clickable: true, // 페이지네이션을 클릭하여 슬라이드를 이동할 수 있게 함
    },
  });
}

SwiperCategory(1);
SwiperCategory(2);
SwiperCategory(3);

// 이미지 로딩 스크린
$("body").imagesLoaded(function () {
  console.log("모든 이미지 로딩 완료");

  setTimeout(function () {
    $(".loading-screen").remove();
  }, 500);
});

function widgetScroll() {
  setInterval(function () {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    console.log(scrollPosition);

    if (scrollPosition > 300) {
      $(".widget").fadeIn();
    } else {
      $(".widget").fadeOut();
    }
  }, 250);
  // const hiddenDiv = document.getElementById('hiddenDiv');
}

widgetScroll();
