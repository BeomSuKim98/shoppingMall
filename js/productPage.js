function Tabmenu() {
  $(".tabMenu_top .tabMenu_item").click(function () {
    let $this = $(this);
    let $thisIndex = $this.index();
    const $tabMenuBox = $this.closest(".tabMenu");
    const $tabMenuContent = $tabMenuBox.find(".tabMenu_bottom");

    $this.siblings(".active").removeClass("active");
    $this.addClass("active");

    $tabMenuContent.find(".tabMenu_item").removeClass("active");
    $tabMenuContent.find(".tabMenu_item").eq($thisIndex).addClass("active");
  });
}

Tabmenu();

function thBox() {
  const swiper1 = new Swiper(".thBox_menu", {
    slidesPerView: 3,
    spaceBetween: 10,
  });
}

thBox();
// HTML의 이름 가져오기
const currentPage = window.location.pathname
  .split("/")
  .pop()
  .replace(".html", "");
console.log(currentPage);

// 썸네일 + 메인 이미지는 9개까지
function thnailImg() {
  $(".Thclose").attr("src", `../img/detailPage/${currentPage}/item1.jpg`);
  let thIndex = $(".imgInsult");

  for (let i = 0; i < thIndex.length; i++) {
    let $img = $(thIndex[i]);

    $img.on("error", function () {
      $img.closest(".swiper-slide").remove();
    });

    $img.attr("src", `../img/detailPage/${currentPage}/item${i + 1}.jpg`);
  }
  console.clear();
}

thnailImg();

// 이벤트 이미지는 4개까지
function eventImg() {
  let thIndex = $(".eventImg");

  for (let i = 0; i < thIndex.length; i++) {
    let $img = $(thIndex[i]);

    $img.on("error", function () {
      $img.closest(".content_imgBox").remove();
    });

    $img.attr("src", `../img/eventImg/eventImg${i + 1}.jpg`);
  }
  console.clear();
}

eventImg();

function detailImg() {
  let thIndex = $(".detailImg");
  const currentPage = window.location.pathname
    .split("/")
    .pop()
    .replace(".html", "");

  for (let i = 0; i < thIndex.length; i++) {
    let $img = $(thIndex[i]);

    $img.on("error", function () {
      $img.closest(".content_imgBox").remove();
    });

    $img.attr("src", `../img/detailPage/${currentPage}/detail${i + 1}.png`);
  }
  console.clear();
}

detailImg();

let $deliveryCost = 0;
let $saleValue = 0;
let $baseCost = 0;
let $totalCost = 0;
let $discountRate = 0;

function deliveryCost() {
  $(".deliverySelector").change(function () {
    if (!$(this).closest(".product_infoBox").is(":hidden")) {
      $deliveryCost = parseFloat($(this).val());
      console.log("deliveryCost : ", $deliveryCost);
      // calculateTotalPrice();
      totalPrice();
      if ($deliveryCost >= 2000) {
        deliverydays(2);
      } else {
        deliverydays(0); // 기본 배송 날짜
      }
    }
  });
}

deliveryCost();

function totalPrice() {
  $(".totalPrice").each(function () {
    let $cost = 0;
    if (!$(this).closest(".product_infoBox").is(":hidden")) {
      $baseCost = parseFloat(
        $(this)
          .closest(".product_infoBox_totalPrice")
          .siblings(".product_infoBox_priceBox")
          .text()
          .trim()
          .replace(/[^0-9.-]+/g, "")
      );
      console.log("baseCost : ", $baseCost);
    }

    $totalCost = $baseCost + $deliveryCost - $discountRate;

    if (isNaN($totalCost) || $totalCost <= 0) {
      $(this).text("옵션을 선택해주세요.");
    } else {
      $(this).text($totalCost + "원");
    }
  });
}

totalPrice();

function couponCheck() {
  $(".couponMenu_items").on("click", function () {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
  });
}

couponCheck();

function popup() {
  $(".onPopup").click(() => {
    $(".popup").addClass("active");
  });

  $(".popup").click(() => {
    $(".popup").removeClass("active");
  });

  $(".fa-xmark").click(() => {
    $(".popup").removeClass("active");
  });

  $(".couponMenu_wrap").click(function (e) {
    e.stopPropagation();
  });
}

popup();

function deliverydays(quick = 0) {
  const today = dayjs();
  const dayOfWeek = today.day();
  const nextMonday = today.add(8 - dayOfWeek, "day").format("DD");
  const inHTMLText = $(".arrivalDate");

  function formatDeliveryDate(daysToAdd) {
    const deliveryDate = today.add(daysToAdd, "day").subtract(quick, "day");
    return {
      month: deliveryDate.format("MM"),
      day: deliveryDate.format("DD"),
    };
  }

  if (dayOfWeek >= 1 && dayOfWeek <= 5) {
    const { month, day } = formatDeliveryDate(3);
    $(".momentDate").text(`금일 오후 10시까지 주문시`);
    inHTMLText.text(`${month}월 ${day}일 도착 예정`);
  } else if (dayOfWeek === 6) {
    const { month, day } = formatDeliveryDate(5);
    $(".momentDate").text(`월요일에 출고 예정 ${nextMonday}일`);
    inHTMLText.text(`${month}월 ${day}일 도착 예정`);
  } else if (dayOfWeek === 0) {
    const { month, day } = formatDeliveryDate(4);
    $(".momentDate").text(`월요일에 출고 예정 ${nextMonday}일`);
    inHTMLText.text(`${month}월 ${day}일 도착 예정`);
  }
}

deliverydays();

function thImgCloser() {
  $(".imgInsult").on("click", function () {
    let address = $(this).attr("src");
    console.log(address);
    $(".Thclose").attr("src", address);
  });
}

thImgCloser();
