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

    $(".logoImg").each(function () {
      $(".logoImg").attr("src", "./img/logo.png");
      $(".logoImg").on("error", function () {
        const fallbackSrc = "../img/logo.png";

        if ($(this).attr("src") !== fallbackSrc) {
          $(this).attr("src", fallbackSrc);
          console.log("경로 수정");
        }
      });
    });

    $(".moveLoginPage").attr("href", "./page/login.html");
    console.log("로그인 경로 삽입");
    $(".moveLoginPage").on("error", function () {
      const fallbackSrc = "../page/login.html";

      if ($(this).attr("href") !== fallbackSrc) {
        $(this).attr("href", fallbackSrc);
        console.log("로그인 경로 수정");
      }
    });

    $(".moveMainPage").attr("href", "index.html");
    $(".moveLoginPage").on("error", function () {
      const fallbackSrc = "../index.html";

      if ($(this).attr("href") !== fallbackSrc) {
        $(this).attr("href", fallbackSrc);
        console.log("메인 페이지 경로 수정");
      }
    });
  });

  // footer.html 파일 로드
  fetchWithFallback("./footer.html", "../footer.html", (data) => {
    document.getElementById("footer").innerHTML = data;
  });
}

document.addEventListener("DOMContentLoaded", loadCommonHeaderAndFooter);
