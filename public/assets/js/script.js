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
  const mainMenus = document.querySelectorAll(".main-menu");
  const overlay = document.querySelector(".overlay");

  mainMenus.forEach((mainMenu) => {
    mainMenu.addEventListener("click", () => {
      const aside = mainMenu.closest("aside");
      aside.classList.remove("active");
      overlay.classList.remove("active");
    });
  });


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

    // 하단 sticky menu를 누르면 sub menu들이 펼쳐지도록
    const mainButton = bottomStickyMenu.querySelector(".btn-main");
    mainButton.addEventListener("click", () => {
      subButtons.classList.toggle("active");
      overlay.classList.toggle("active");
      overlay.addEventListener("click", () => {
        subButtons.classList.remove("active");
      });

      const searchButton = subButtons.querySelector(".btn-search");

      // 검색버튼을 누르면 검색창, dim, sub menu 숨김 처리
      searchButton.addEventListener("click", () => {
        searchArea.classList.add("active");
        container.classList.remove("scroll");
        subButtons.classList.remove("active");
        overlay.classList.remove("active");

        if (searchArea.classList.contains("active")) {
          searchArea.classList.remove("active");
        }
      });
    });
  }

  /* =====================================================
       Modal
  ===================================================== */


  /* =====================================================
       Header Search Area
  ===================================================== */
  const btnHeaderSearch = document.querySelectorAll("header .btn-search");
  const searchArea = document.querySelector("header .row.search");
  const modalSearch = document.querySelector(".modal-search");
  const workspaceList = document.querySelector(".workspace.list");
  const equipmentsPage = document.querySelector(".equipments");

  // 스크롤시, 헤더 고정
  if(searchArea) {
    main.addEventListener("scroll", () => {
      if (searchArea.classList.contains("active")) {
        container.classList.remove("scroll");
      }
    });
  }

  if (workspaceList) {
    const filters = document.querySelector(".filters-equipments");
    filters.style.display = "none";

    // 검색영역이 열려있을 때
    if (searchArea.classList.contains("active")) {
      // 검색버튼을 누르면 검색영역 닫힘
      searchButton.addEventListener("click", () => {
        searchArea.classList.remove("active");
      });
    }

    if (btnHeaderSearch) {
      btnHeaderSearch.forEach((button) => {
        button.addEventListener("click", () => {
          searchArea.classList.toggle("active");
        });
      });
    }
  }

  if (equipmentsPage) {
    if (equipmentsPage.classList.contains("list")) {
      const filters = document.querySelector(".filters-workspace");
      filters.style.display = "none";
      searchArea.classList.add("active");

      btnHeaderSearch.forEach((button) => {
        button.addEventListener("click", () => {
          searchArea.classList.toggle("active");
        });
      });
    }
  }

  /* =====================================================
       Modal: Marker Details
  ===================================================== */
  const modalMarker = document.querySelector(".modal-marker");
  const moveDown = document.querySelector(".move-down");

  if (moveDown) {
    moveDown.addEventListener("click", () => {
      modalMarker.classList.remove("active");
    });
  }

  const marker = document.querySelector(".marker");

  if (marker) {
    marker.addEventListener("click", () => {
      modalMarker.classList.add("active");
    });
  }

  /* =====================================================
       Modal: New Comments
  ===================================================== */
  const newComment = document.querySelector(".comments .new");

  if (newComment) {
    const button = newComment.querySelector(".btn-submit");
    const modalConfirm = document.querySelector(".modal-confirm");

    button.addEventListener("click", () => {
      visibleOverlay(modalConfirm);
    });
  }

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
