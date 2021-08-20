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
  const toggleMenu = document.querySelector(".toggle-menu");
  const globalNavigationMenu = document.querySelector(
    ".global-navigation-menu"
  );
  const localToggleMenu = document.querySelector(".local-toggle-menu");
  const localNavigationMenu = document.querySelector(".local-navigation-menu");

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

    // dim 영역 눌러도 메뉴창 닫기
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

  if (bottomStickyMenu) {
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
      });

      // 검색영역이 열려있을 때
      if (searchArea.classList.contains("active")) {
        // 검색버튼을 누르면 검색영역 닫힘
        searchButton.addEventListener("click", () => {
          searchArea.classList.remove("active");
        });
      }
      // 스크롤시, 헤더 고정
      main.addEventListener("scroll", (e) => {
        if (searchArea.classList.contains("active")) {
          e.stopPropagation();
          container.classList.remove("scroll");
        }
      });
    });
  }

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
    const closeButton = document.createElement("button");
    closeButton.classList.add("btn-close");
    modal.append(closeButton);

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

  /* =====================================================
       Header Search Area
  ===================================================== */
  const btnHeaderSearch = header.querySelectorAll(".btn-search");
  const searchArea = header.querySelector(".row.search");
  const modalSearch = document.querySelector(".modal-search");
  const workspaceList = document.querySelector(".workspace.list");
  const equipmentsPage = document.querySelector(".equipments");

  if (workspaceList) {
    const filters = document.querySelector(".filters-equipments");
    filters.style.display = "none";

    if (btnHeaderSearch) {
      btnHeaderSearch.forEach((button) => {
        button.addEventListener("click", () => {
          searchArea.classList.toggle("active");
        });
      });
    }
  }

  if (equipmentsPage) {
    btnHeaderSearch.forEach((button) => {
      button.addEventListener("click", () => {
        location.href = "equipments_search.html";
      });
    });

    if (equipmentsPage.classList.contains("list")) {
      const filters = document.querySelector(".filters-workspace");
      filters.style.display = "none";
      searchArea.classList.add("active");
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

  if (main.classList.contains("add")) {
    const button = document.querySelector(".btn-main");
    const modalConfirm = document.querySelector(".modal-confirm");
    //작성화면에서는 하단메뉴 숨김처리
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
