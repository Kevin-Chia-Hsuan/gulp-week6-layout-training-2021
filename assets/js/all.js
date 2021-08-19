"use strict";

/* eslint-disable no-undef */
// 手機板選單Js
function init() {
  // console.log('HelloWord');
  var showMenu = document.querySelector('.showMenu');
  showMenu.addEventListener('click', function () {
    document.querySelector('body').classList.toggle('menu-show');
  });
}

init(); // Swiper
// eslint-disable-next-line no-unused-vars

var swiper = new Swiper('.mySwiper', {
  // 設置slider容器能夠同時顯示的slides數量(carousel模式)
  // 可以設置為數字(可為小數，小數不可loop)，或者 'auto'則自動根據slides的寬度來設定數量
  slidesPerView: 'auto',
  // 在slide之間設置距離(單位px)
  spaceBetween: 0,
  // 在carousel mode下定義slides的數量多少為一組
  slidesPerGroup: 1,
  autoplay: {
    delay: 5000 // 5秒切换一次

  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
}); // 購買票卷效果

var buyTicket = document.querySelectorAll('.buyTicket');
buyTicket.forEach(function (item) {
  item.addEventListener('click', function (e) {
    // 取消a連結預設效果
    e.preventDefault();
    swal('成功!', '加入購物車成功', 'success');
  });
}); // 收藏展覽效果

var collect = document.querySelectorAll('.collect');
collect.forEach(function (item) {
  item.addEventListener('click', function (e) {
    // 取消a連結預設效果
    e.preventDefault();
    swal('成功!', '收藏展覽成功', 'success');
  });
}); // AOS

AOS.init(); // 點選scrollTopBt後，滑動回最上層

$('.scrollTopBtn').click(function (event) {
  event.preventDefault();
  $('html,body').animate({
    scrollTop: 0
  }, 500);
});
//# sourceMappingURL=all.js.map
