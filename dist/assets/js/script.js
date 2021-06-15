document.addEventListener("DOMContentLoaded", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  const header = document.querySelector("header");
  const mainMenus = document.querySelectorAll(".main-menu");
  const globalNavigationMenu = document.querySelector(
    ".global-navigation-menu"
  );
  const overlay = document.querySelector(".overlay");

  mainMenus.forEach((mainMenu) => {
    mainMenu.addEventListener("click", () => {
      globalNavigationMenu.classList.remove("active");
      overlay.classList.remove("active");
    });
    const subMenu = mainMenu.nextElementSibling;

    if (subMenu) {
      mainMenu.addEventListener("click", () => {
        mainMenu.classList.toggle("active");
        subMenu.classList.toggle("active");
      });
    }
  });

  const localNavigationMenu = document.querySelector(".local-navigation-menu");
  let toggleMenu = document.querySelector(".toggle-menu");
  const localToggleMenu = document.querySelector(".local-toggle-menu");

  const inputSearchFull = document.querySelector(".input-search-full");
  const modalSearchFull = document.querySelector(".modal-search-full");

  if (inputSearchFull) {
    const handleActiveSearchFull = () => {
      if (modalSearchFull.classList.contains("active") === false) {
        let button = document.createElement("button");
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



  // Tab Menu
  const main = document.querySelector(".main");

  if (main) {
    const tabMenus = document.querySelectorAll(".tab-menu li");
    const linkButton = document.querySelector(".tab-menu button");
    const tabContents = document.querySelectorAll(".tab-content section");

    const activeSection = (e) => {
      e.stopPropagation();
      let menuIndex = [...tabMenus].indexOf(e.target);

      tabMenus.forEach((menu) => {
        [...tabMenus].indexOf(menu) === menuIndex
          ? menu.classList.add("active")
          : menu.classList.remove("active");
      });

      tabContents.forEach((content) => {
        [...tabContents].indexOf(content) === menuIndex
          ? content.classList.add("active")
          : content.classList.remove("active");
      });
    };

    [...tabMenus][0].classList.add("active");
    [...tabContents][0].classList.add("active");

    tabMenus.forEach((menu) => {
      menu.addEventListener("click", activeSection);
    });

    const notice = document.querySelector(".notice");
    const downloads = document.querySelector(".downloads");
    const errata = document.querySelector(".errata");

    linkButton.addEventListener("click", (e) => {
      e.stopPropagation();
      if (notice.classList.contains("active")) {
        window.location = "notice.html";
      } else if (downloads.classList.contains("active")) {
        window.location = "downloads.html";
      } else if (errata.classList.contains("active")) {
        window.location = "errata.html";
      }
    });
  }

  // Notice
  const rows = document.querySelectorAll(".notice .row");

  rows.forEach((row) => {
    row.addEventListener("click", () => {
      row.classList.toggle("active");
    });
  });

  // Modal
  const modals = document.querySelectorAll(".modal");
  const closeButtons = document.querySelectorAll(".close");

  const visibleOverlay = () => {
    overlay.classList.add("active");
  };

  const hiddenOverlay = () => {
    overlay.classList.remove("active");
    modals.forEach((modal) => modal.classList.remove("active"));
  };

  if (overlay) {
    overlay.addEventListener("click", hiddenOverlay);
    closeButtons.forEach((close) => {
      close.addEventListener("click", hiddenOverlay);
    });
  }

  const btnNavigation = document.querySelector(".btn-navigation");
  const modalNavigation = document.querySelector(".modal-navigation");

  if (btnNavigation) {
    btnNavigation.addEventListener("click", () => {
      modalNavigation.classList.add("active");
      visibleOverlay();
    });
  }

  const btnSearch = document.querySelector(".btn-search");
  const modalSearch = document.querySelector(".modal-search");

  if (btnSearch) {
    btnSearch.addEventListener("click", () => {
      modalSearch.classList.add("active");
      visibleOverlay();
    });
  }

  // Modal Move Down

  const markerDetails = document.querySelector(".marker-details");
  const moveDown = document.querySelector(".move-down");

  if (moveDown) {
    moveDown.addEventListener("click", () => {
      markerDetails.classList.remove("active");
    });
    // let clientY, deltaY;

    // moveDown.addEventListener(
    //   "touchstart",
    //   (e) => {
    //     clientY = parseInt(e.touches[0].clientY);
    //   },
    //   false
    // );

    // moveDown.addEventListener(
    //   "touchmove",
    //   (e) => {
    //     deltaY = parseInt(e.changedTouches[0].clientY) - clientY;

    //     markerDetails.style.bottom = `${-deltaY}px`;
    //     if (parseInt(markerDetails.style.bottom) > 0) {
    //       markerDetails.removeAttribute("style");
    //     }
    //   },
    //   false
    // );

    // moveDown.addEventListener("touchend", () => {
    //   if (deltaY > 100) {
    //     markerDetails.removeAttribute("style");
    //     markerDetails.classList.remove("active");
    //   }
    // });
  }

  const marker = document.querySelector(".marker");

  if (marker) {
    marker.addEventListener("click", () => {
      markerDetails.classList.add("active");
    });
  }
});
