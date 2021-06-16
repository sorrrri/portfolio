document.addEventListener("DOMContentLoaded", () => {
  // 기기 높이 맞추기
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  // Dropdown Menu
  const mainMenus = document.querySelectorAll(".main-menu");
  const overlay = document.querySelector(".overlay");

  mainMenus.forEach((mainMenu) => {
    mainMenu.addEventListener("click", () => {
      const aside = mainMenu.closest("aside");
      aside.classList.remove("active");
      overlay.classList.remove("active");
    });
  });


  // CCTV 상세검색
  const header = document.querySelector("header");
  let toggleMenu = document.querySelector(".toggle-menu");
  const globalNavigationMenu = document.querySelector(
    ".global-navigation-menu"
  );
  const localToggleMenu = document.querySelector(".local-toggle-menu");
  const localNavigationMenu = document.querySelector(".local-navigation-menu");

  const inputSearchFull = document.querySelector(".input-search-full");
  const modalSearchFull = document.querySelector(".modal-search-full");

  if (inputSearchFull) {
    const handleActiveSearchFull = () => {
      if (modalSearchFull.classList.contains("active") === false) {
        const button = document.createElement("button");
        modalSearchFull.classList.add("active");
        header.replaceChild(button, toggleMenu);

        const buttonBack = button;
        buttonBack.classList.add("btn-back");
        buttonBack.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
        <path d="M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" />
      </svg>`;

        buttonBack.addEventListener("click", () => {
          modalSearchFull.classList.remove("active");
          header.replaceChild(toggleMenu, buttonBack);
        });
      }
    };
    inputSearchFull.addEventListener("click", handleActiveSearchFull);
  }

  // Toggle Menu
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

  // Notice
  const rows = document.querySelectorAll(".notice .row");

  rows.forEach((row) => {
    row.addEventListener("click", () => row.classList.toggle("active"));
  });

  // Modal
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

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
      close.addEventListener("click", hiddenOverlay)
    );
  }

  const btnNavigation = document.querySelector(".btn-navigation");
  const modalNavigation = document.querySelector(".modal-navigation");
  if (btnNavigation) {
    btnNavigation.addEventListener("click", () => {
      visibleOverlay(modalNavigation);
    });
  }

  const btnSearch = document.querySelector(".btn-search");
  const modalSearch = document.querySelector(".modal-search");
  if (btnSearch) {
    btnSearch.addEventListener("click", () => {
      visibleOverlay(modalSearch);
    });
  }

  // 마커 상세
  const markerDetails = document.querySelector(".marker-details");
  const moveDown = document.querySelector(".move-down");

  if (moveDown) {
    moveDown.addEventListener("click", () => {
      markerDetails.classList.remove("active");
    });
  }

  const marker = document.querySelector(".marker");

  if (marker) {
    marker.addEventListener("click", () => {
      markerDetails.classList.add("active");
    });
  }
});
