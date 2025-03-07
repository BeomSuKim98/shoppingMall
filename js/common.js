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

    $(".logoImg").attr("src", "./img/logo.png");

    $(".logoImg").on("error", function () {
      $(".logoImg").attr("src", "../img/logo.png");
    });
  });

  // footer.html 파일 로드
  fetchWithFallback("./footer.html", "../footer.html", (data) => {
    document.getElementById("footer").innerHTML = data;
  });
}

document.addEventListener("DOMContentLoaded", loadCommonHeaderAndFooter);
