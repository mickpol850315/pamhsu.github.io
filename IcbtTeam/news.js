  // 程式碼
   
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 133,
  //   slidesPerGroup: 3,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }
  });