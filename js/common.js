// 공통 header와 footer를 비동기 방식으로 적용
function loadCommonHeaderAndFooter() {
  fetch("./header.html")
    .then((resp) => resp.text())
    .then((data) => {
      document.getElementById("header").innerHTML = data;

      const swiper1 = new Swiper(".swiper-container-firstTopNotice", {
        direction: "vertical",
        loop: true,
        slidesPerView: 1,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      });
    });

  fetch("./footer.html")
    .then((resp) => resp.text())
    .then((data) => {
      document.getElementById("footer").innerHTML = data;
    });
}

document.addEventListener("DOMContentLoaded", loadCommonHeaderAndFooter);
