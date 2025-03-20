function thBox() {
  const swiper1 = new Swiper(".thBox", {
    slidesPerView: 5,
    spaceBetween: 10,
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
