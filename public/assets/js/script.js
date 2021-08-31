document.addEventListener("DOMContentLoaded", () => {
  // 기기 높이 맞추기
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  const container = document.querySelector(".container");
  const main = document.querySelector("main");
  const header = document.querySelector("header");

  main.addEventListener("scroll", () => {
    if (main.scrollTop > 50) {
      container.classList.add("scroll");
    } else {
      container.classList.remove("scroll");
    }
  });

  /* =====================================================
       Dropdown Menu
  ===================================================== */


  /* =====================================================
       Bottom Sticky Menu
  ===================================================== */
  const bottomStickyMenu = document.querySelector(".bottom-sticky-menu");
  
  if (bottomStickyMenu) {
    const subButtons = bottomStickyMenu.querySelector(".buttons");
    const delta = 5;
    let lastScrollTop = 0;

    main.addEventListener("scroll", () => {
      // scroll이 감지될 떄, 하단 sticky menu의 활성화 여부
      let currentScrollTop = main.scrollTop;
      if (Math.abs(lastScrollTop - currentScrollTop) <= delta) {
        return;
      }
      if (currentScrollTop > lastScrollTop) {
        //Scroll down
        bottomStickyMenu.classList.remove("active");
      } else {
        //Scroll up
        bottomStickyMenu.classList.add("active");
      }
      lastScrollTop = currentScrollTop;
    });

  }

  /* =====================================================
       Modal
  ===================================================== */


  /* =====================================================
       Header Search Area
  ===================================================== */


  /* =====================================================
       Modal: Marker Details
  ===================================================== */


  /* =====================================================
       Modal: New Comments
  ===================================================== */

  
  /* =====================================================
       Modal: Zoom In Images
  ===================================================== */
  const images = document.querySelectorAll(".images");
  const modalImage = document.querySelector(".modal-image");

  if (images) {
    // const modalImage = document.createElement("div")
    // modalImage.classList.add("modal", "modal-image")
    // container.append(modalImage)

    images.forEach((image) => {
      image.addEventListener("click", (e) => {
        e.preventDefault();

        modalImage.classList.add("active");
        modalImage.innerHTML = `<img src="${e.target.src}" alt="" />`;
        visibleOverlay(modalImage);
        modalImage.addEventListener("click", () => {
          hiddenOverlay(modalImage);
          modals.forEach((modal) => modal.classList.remove("active"));
        });
      });
    });
  }

  /* =====================================================
       Loader
  ===================================================== */
  const loader = document.querySelector(".loader");
  if (loader) {
  }
});
