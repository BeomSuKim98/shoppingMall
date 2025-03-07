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

function thnailImg() {
  let thIndex = $(".imgInsult");

  for (let i = 0; i < thIndex.length; i++) {
    let $img = $(thIndex[i]);

    $img.on("error", function () {
      $img.closest(".swiper-slide").remove();
    });

    $img.attr("src", "../img/detailPage/page1/item" + (i + 1) + ".jpg");
  }
  console.clear();
}

thnailImg();

function eventImg() {
  let thIndex = $(".eventImg");

  for (let i = 0; i < thIndex.length; i++) {
    let $img = $(thIndex[i]);

    $img.on("error", function () {
      $img.closest(".content_imgBox").remove();
    });

    $img.attr("src", "../img/detailPage/page1/eventImg" + (i + 1) + ".jpg");
  }
  console.clear();
}

eventImg();

function detailImg() {
  let thIndex = $(".detailImg");

  for (let i = 0; i < thIndex.length; i++) {
    let $img = $(thIndex[i]);

    $img.on("error", function () {
      $img.closest(".content_imgBox").remove();
    });

    $img.attr("src", "../img/detailPage/page1/detail" + (i + 1) + ".png");
  }
  console.clear();
}

detailImg();

let $deliveryCost = 0;

function deliveryCost() {
  $(".deliverySelector").change(function () {
    if (!$(this).closest(".product_infoBox").is(":hidden")) {
      $deliveryCost = parseFloat($(this).val());
      console.log("deliveryCost : ", $deliveryCost);
      totalPrice();
    }
  });
}

deliveryCost();

function totalPrice() {
  $(".totalPrice").each(function () {
    let $baseCost;
    let $saleValue;
    let $totalCost;
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
    $totalCost = $baseCost + $deliveryCost;
    $(this).text($totalCost + "원");
    console.log("totalCost : ", $totalCost);
  });
}

totalPrice();
