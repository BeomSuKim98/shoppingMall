function thBox() {
  const swiper1 = new Swiper(".thBox", {
    slidesPerView: 2,
    spaceBetween: 10,

    breakpoints: {
      640: {
        slidesPerView: 3,
        slidesPerGroup: 1,
        centeredSlides: false,
      },

      1280: {
        slidesPerView: 4,
        slidesPerGroup: 1,
        centeredSlides: false,
      },
    },
  });
}

thBox();

function popup(popupname) {
  $(popupname).click(() => {
    console.log(popupname);
    $(`.popup_${popupname.replace(".", "")}`).addClass("active");
  });

  $(".popup").click(() => {
    $(".popup").removeClass("active");
  });

  $(".close_btn").click(() => {
    $(".popup").removeClass("active");
  });

  $(".popup_inner").click(function (e) {
    e.stopPropagation();
  });
}

popup(".promotion");
popup(".installment");
popup(".mileage");

function installmentswiching() {
  $(".popup_installment_box_content > li").click(function () {
    $(this).siblings().removeClass("active");
    $(this).addClass("active");
  });
}

installmentswiching();

function paychoice() {
  $(".payWay").click(function () {
    $(this).siblings().find("div").removeClass("active");
    $(this).find("div").addClass("active");
    const $text = $(this).find(".choiceToPay_text").text();

    $(".insultText").text($text);
  });
}

paychoice();

function buyProcessing() {
  const $tabs = $(".leftContentBox_bottom_tab");
  // const $purchaseBtn = $(".confirm");
  const $topActive = $(".processing_level");
  let currentStep = 1;
  const totalSteps = 3;

  // 단계 전환 함수
  function goToStep(step) {
    // 탭 활성화
    $tabs.each(function () {
      if ($(this).data("step") === step) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    $topActive.each(function () {
      if ($(this).data("step") === step) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
    });

    // if (cureentStep === 3) {
    //   $(".next-btn").attr("display", "none");
    // } else {
    //   $(".next-btn").attr("display", "none");
    // }
    // 현재 단계 업데이트
    currentStep = step;

    // 모든 단계 확인 시 구매 버튼 활성화
    //   if (currentStep === totalSteps) {
    //     $purchaseBtn.prop("disabled", false);
    //   } else {
    //     $purchaseBtn.prop("disabled", true);
    //   }
    // }

    // 다음 버튼 클릭 이벤트
  }
  $(".next-btn").click(function () {
    if (currentStep < totalSteps) {
      goToStep(currentStep + 1);
    }
  });

  // 이전 버튼 클릭 이벤트
  $(".prev-btn").click(function () {
    if (currentStep > 1) {
      goToStep(currentStep - 1);
    }
  });
}

buyProcessing();
// 장바구니 가져오기
const cart = JSON.parse(localStorage.getItem("cart")) || [];

function cartDisplay() {
  const $container = $(".cartContainer");
  const $containerDetail = $(".leftContentBox_middle_wrap");

  cart.forEach((item) => {
    const cartItemHTML = `
                <div class="swiper-slide imgBox">
                    <img src="${item.image}" alt="${item.name}" />
                    <div class="productTextBox">
                    <p class="productTextBox_price">${item.price}원</p>
                    <p class="productTextBox_name">${item.name}</p>
                    </div>
                </div>
            `;
    $container.append(cartItemHTML);
  });

  cart.forEach((item) => {
    const cartItemHTMLDetail = `
        <div class="middle_content_wrap">
          <div class="middle_imgBox">
            <img src="${item.image || "../img/category1/item1.gif"}" alt="${
      item.name || "상품 이미지"
    }" />
          </div>
          <div class="middle_content">
            <span class="middle_text">${
              item.name ||
              "(모임룩/청순가련무드♥) 르엔 하트넥 배색 크롭 블라우스"
            }</span>
          </div>
          <div class="middle_content">
            <span class="middle_text">${item.size || "베이직/M"}</span>
          </div>
          <div class="middle_content">
            <span class="middle_text">${item.quantity || "1"}</span>
          </div>
          <div class="middle_content">
            <span class="middle_text">${item.discount || "0원"}</span>
          </div>
          <div class="middle_content">
            <span class="middle_text">${item.price || "25,000원"}</span>
          </div>
        </div>
    `;

    // 컨테이너에 HTML 추가
    $containerDetail.append(cartItemHTMLDetail);
  });
}

cartDisplay();

// // 장바구니 검사함수
// function logCartContents() {
//   $(".mainTitle").on("click", function () {
//     const cart = JSON.parse(localStorage.getItem("cart")) || []; // 로컬 스토리지에서 데이터 가져오기
//     console.log($(cart.imgSrc));
//     const $cartItems = $("#cartItems"); // 장바구니 목록 표시 영역
//     $cartItems.empty(); // 기존 내용을 초기화

//     if (cart.length === 0) {
//       $cartItems.append("<li>장바구니가 비어 있습니다.</li>");
//     } else {
//       cart.forEach((item) => {
//         $cartItems.append(`<li>${item.name} - ${item.price}원</li>`);
//       });
//     }
//   });
// }

// logCartContents();

function productcalculrated() {
  // 총 수량 계산 (cart 배열의 길이)
  const totalQuantity = cart.length;

  // 총 가격 계산 (각 항목의 price 합산)
  const totalPrice = cart.reduce(
    (sum, item) => sum + parseInt(item.price || 0, 10),
    0
  );

  // 총 수량과 총 가격을 동적으로 HTML에 삽입
  $(".productQuantity").text(`총 수량: ${totalQuantity}`);
  $(".productTotalPrice").text(`총 가격: ${totalPrice.toLocaleString()}원`);
  $(".productTotalPriceRightDiv").text(`${totalPrice.toLocaleString()}원`);
}

productcalculrated();
