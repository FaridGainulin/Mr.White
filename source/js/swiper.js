function initSwiperFinances() {
  const swiper = new Swiper('.swiper-finances', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.finances-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    // loop: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperReasons() {
  const swiper = new Swiper('.swiper-reasons', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.reasons-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    // loop: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperStart() {
  const swiper = new Swiper('.swiper-start', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.start-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    // loop: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

function initSwiperSupport() {
  const swiper = new Swiper('.swiper-support', {
    speed: 450,
    effect: 'coverflow',
    rewind: true,
    pagination: {
      el: '.support-pagination',
      type: 'progressbar',
    },
    updateOnWindowResize: true,
    // loop: true,
    spaceBetween: 20,
    breakpoints: {
      200: {
        slideToClickedSlide: true,
        coverflowEffect: {
          rotate: 60,
          stretch: 14,
          depth: 500,
          scale: 0.7,
          modifier: 1,
          slideShadows: false,
        },
        allowTouchMove: true,
      },
      768: {
        coverflowEffect: {
          rotate: 0,
          stretch: 0,
          depth: 0,
          modifier: 0,
          slideShadows: false,
        },
        allowTouchMove: false,
        spaceBetween: 0,
      },
    },
  })
}

// let swiperInstance = null;

// function initSwiperDesktop() {
//   if (swiperInstance) swiperInstance.destroy(true, true);

//   const screenWidth = window.innerWidth;
//   const isDesktop = screenWidth >= 1400;

//   swiperInstance = new Swiper('.swiper-desktop', {
//     speed: 450,
//     effect: isDesktop ? 'slide' : 'coverflow',
//     loop: isDesktop,
//     rewind: !isDesktop,
//     autoplay: isDesktop ? {
//       delay: 4000,
//       disableOnInteraction: false,
//     } : false,
//     navigation: isDesktop ? {
//       nextEl: '.button-next',
//       prevEl: '.button-prev',
//     } : false,
//     pagination: {
//       el: '.desktop-pagination',
//       type: 'bullets',
//       clickable: true,
//     },
//     slidesPerView: isDesktop ? 3 : 1,
//     spaceBetween: 20,
//     slideToClickedSlide: true,
//     coverflowEffect: {
//       rotate: isDesktop ? 0 : 60,
//       stretch: isDesktop ? 0 : 14,
//       depth: isDesktop ? 0 : 500,
//       scale: isDesktop ? 0 : 0.7,
//       modifier: isDesktop ? 0 : 1,
//       slideShadows: false,
//     },
//     allowTouchMove: true,
//   });
// }

// window.addEventListener('resize', initSwiperDesktop);
// document.addEventListener('DOMContentLoaded', initSwiperDesktop);


function initSwiperDesktop() {
  const swiper = new Swiper('.swiper-desktop', {
    speed: 550,
    effect: 'flip',
    rewind: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    flipEffect: {
      slideShadows: true, // Тени для реалистичного эффекта перелистывания
      limitRotation: true,
    },
    pagination: {
      el: '.desktop-pagination',
      type: 'bullets',
      // type: 'progressbar',
      clickable: true,
    },
    navigation: {
      prevEl: '.button-prev',
      nextEl: '.button-next',
    },
    breakpoints: {
      200: {
        spaceBetween: 10,
        slidesPerView: 1,
        // slidesPerGroup: 1,
      },
      768: {
        spaceBetween: 10,
        slidesPerView: 1,
        // slidesPerGroup: 3,
      },
      1024: {
        spaceBetween: 20,
        slidesPerView: 1,
        // slidesPerGroup: 3,
      },
      1400: {
        spaceBetween: 20,
        slidesPerView: 1,
        // slidesPerGroup: 3,
      },
    },
  })
}

$(document).ready(function () {
  initSwiperFinances()
  initSwiperReasons()
  initSwiperStart()
  initSwiperSupport()
  initSwiperDesktop()
})
