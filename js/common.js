// // 공통 header와 footer를 비동기 방식으로 적용
// function loadCommonHeaderAndFooter() {
//   fetch("./header.html")
//     .then((resp) => resp.text())
//     .then((data) => {
//       document.getElementById("header").innerHTML = data;

//       const swiper1 = new Swiper(".swiper-container-firstTopNotice", {
//         direction: "vertical",
//         loop: true,
//         slidesPerView: 1,
//         autoplay: {
//           delay: 3000,
//           disableOnInteraction: false,
//         },
//       });
//     });

//   fetch("./footer.html")
//     .then((resp) => resp.text())
//     .then((data) => {
//       document.getElementById("footer").innerHTML = data;
//       // console.log(data);
//     });
// }

// document.addEventListener("DOMContentLoaded", loadCommonHeaderAndFooter);

function fetchWithFallback(url, fallbackUrl, callback) {
  fetch(url)
    .then((resp) => {
      if (!resp.ok && fallbackUrl) {
        // 현재 경로에서 파일을 찾지 못하면 상위 경로로 다시 시도
        return fetch(fallbackUrl);
      }
      return resp;
    })
    .then((resp) => resp.text())
    .then((data) => callback(data))
    .catch((error) => console.error("Error fetching file:", error));
}

function loadCommonHeaderAndFooter() {
  // header.html 파일 로드
  fetchWithFallback("./header.html", "../header.html", (data) => {
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

  // footer.html 파일 로드
  fetchWithFallback("./footer.html", "../footer.html", (data) => {
    document.getElementById("footer").innerHTML = data;
  });
}

document.addEventListener("DOMContentLoaded", loadCommonHeaderAndFooter);
