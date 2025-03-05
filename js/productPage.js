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
