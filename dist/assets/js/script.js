document.addEventListener("DOMContentLoaded", () => {
  // 기기 높이 맞추기
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  const main = document.querySelector("main");
  const header = document.querySelector("header");
  const toggleMenu = document.querySelector(".toggle-menu");
  const globalNavigationMenu = document.querySelector(
    ".global-navigation-menu"
  );
  const localToggleMenu = document.querySelector(".local-toggle-menu");
  const localNavigationMenu = document.querySelector(".local-navigation-menu");

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
       Tab Menu
  ===================================================== */
  const tabs = document.querySelectorAll(".tabs li");
  const tabContents = document.querySelectorAll(".tab-content");

  const activeSection = (e) => {
    e.stopPropagation();

    let menuIndex = [...tabs].indexOf(e.target);

    tabs.forEach((tab) => {
      [...tabs].indexOf(tab) === menuIndex
        ? tab.classList.add("active")
        : tab.classList.remove("active");
    });

    tabContents.forEach((content) => {
      [...tabContents].indexOf(content) === menuIndex
        ? content.classList.add("active")
        : content.classList.remove("active");
    });
  };

  if (tabs) {
    tabs.forEach((tab) => {
      [...tabs][0].classList.add("active");
      [...tabContents][0].classList.add("active");
      tab.addEventListener("click", activeSection);
    });
  }

  /* =====================================================
       Toggle Menu
  ===================================================== */
  if (toggleMenu) {
    const openNavigationMenu = (menu) => {
      menu.classList.add("active");
      overlay.classList.add("active");
    };

    const closeNavigationMenu = (toggleButton, menu) => {
      toggleButton.classList.remove("active");
      menu.classList.remove("active");
    };

    toggleMenu.addEventListener("click", () => {
      openNavigationMenu(globalNavigationMenu);
    });

    if (localToggleMenu) {
      localToggleMenu.addEventListener("click", () => {
        openNavigationMenu(localNavigationMenu);
      });
    }

    overlay.addEventListener("click", () => {
      closeNavigationMenu(toggleMenu, globalNavigationMenu);

      if (localToggleMenu) {
        closeNavigationMenu(localToggleMenu, localNavigationMenu);
      }
    });
  }

  /* =====================================================
       Bottom Sticky Menu
  ===================================================== */
  const bottomStickyMenu = document.querySelector(".bottom-sticky-menu");
  const subButtons = bottomStickyMenu.querySelector(".buttons");

  // 하단 sticky menu를 누르면 sub menu들이 펼쳐지도록
  if (bottomStickyMenu) {
    const mainButton = bottomStickyMenu.querySelector(".btn-main");
    mainButton.addEventListener("click", () => {
      subButtons.classList.toggle("active");
    });
  }

  // 상세페이지에서는(main태그에 "details" class가 있는 경우) 헤더의 토글버튼 및 버튼들 삭제
  if (main.classList.contains("details")) {
    const header = document.querySelector("header");
    const toggleButton = header.querySelector(".toggle-menu");
    const backButton = header.querySelector(".btn-back");
    const buttons = header.querySelector(".buttons");

    backButton.classList.add("active");
    toggleButton.style.display = "none";
    buttons.style.display = "none";
  }

  // scroll이 감지될 떄, 하단 sticky menu의 활성화 여부
  const delta = 5;
  let lastScrollTop = 0;

  main.addEventListener("scroll", () => {
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
  })

  /* =====================================================
       Modal
  ===================================================== */
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".btn-close, .btn-cancel");

  const visibleOverlay = (modal) => {
    overlay.classList.add("active");
    modal.classList.add("active");
  };

  const hiddenOverlay = () => {
    overlay.classList.remove("active");
  };

  overlay.addEventListener("click", () => {
    hiddenOverlay();

    if (modals) {
      modals.forEach((modal) => modal.classList.remove("active"));
    }
  });

  if (closeButtons) {
    closeButtons.forEach((close) =>
      close.addEventListener("click", () => {
        hiddenOverlay();
        modals.forEach((modal) => modal.classList.remove("active"));
      })
    );
  }

  // confirm type의 modal일 때, 2중 모달 띄우기
  modals.forEach((modal) => {
    const modalButtonSubmit = modal.querySelector(".btn-submit");
    if (modalButtonSubmit) {
      modalButtonSubmit.addEventListener("click", () => {
        const modalDone = document.querySelector(".modal-done");
        visibleOverlay(modalDone);
      });
    }
  });

  const btnNavigation = document.querySelector(".btn-navigation");
  const modalNavigation = document.querySelector(".modal-navigation");
  if (btnNavigation) {
    btnNavigation.addEventListener("click", () => {
      visibleOverlay(modalNavigation);
    });
  }

  const btnHeaderSearch = header.querySelectorAll(".btn-search");
  const searchArea = header.querySelector(".row.search");
  const modalSearch = document.querySelector(".modal-search");

  if (btnHeaderSearch) {
    btnHeaderSearch.forEach((button) => {
      button.addEventListener("click", () => {
        searchArea.classList.toggle("active");
      });
    });
    // btnSearch.addEventListener("click", () => {
    //   // visibleOverlay(modalSearch);
    //   searchArea.classList.toggle("active");
    // });
  }

  // 마커 상세
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

  // 댓글 달기
  const newComment = document.querySelector(".comments .new");

  if (newComment) {
    const button = newComment.querySelector(".btn-submit");
    const modalConfirm = document.querySelector(".modal-confirm");

    button.addEventListener("click", () => {
      visibleOverlay(modalConfirm);
    });
  }

  if (main.classList.contains("add")) {
    const button = document.querySelector(".btn-main");
    const modalConfirm = document.querySelector(".modal-confirm");
    bottomStickyMenu.style.transform = "translateY(4rem)";

    button.addEventListener("click", () => {
      visibleOverlay(modalConfirm);
    });

    const inputSearch = document.querySelector(".input-search");
    if (inputSearch) {
      inputSearch.addEventListener("click", () => {
        visibleOverlay(modalSearch);
      });
    }
  }

  /* =====================================================
       Loader
  ===================================================== */
  const loader = document.querySelector(".loader");
  if (loader) {
  }
});

// // CCTV 상세검색
// const inputSearchFull = document.querySelector(".input-search-full");
// const modalSearchFull = document.querySelector(".modal-search-full");

// if (inputSearchFull) {
//   const handleActiveSearchFull = () => {
//     if (modalSearchFull.classList.contains("active") === false) {
//       const button = document.createElement("button");
//       modalSearchFull.classList.add("active");
//       header.replaceChild(button, toggleMenu);

//       const buttonBack = button;
//       buttonBack.classList.add("btn-back");
//       buttonBack.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
//       <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
//     </svg>`;

//       buttonBack.addEventListener("click", () => {
//         modalSearchFull.classList.remove("active");
//         header.replaceChild(toggleMenu, buttonBack);
//       });
//     }
//   };
//   inputSearchFull.addEventListener("click", handleActiveSearchFull);
// }
