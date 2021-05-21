document.addEventListener("DOMContentLoaded", () => {
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

  const admin = document.querySelector(".admin")

  if(admin) {
    
    const mainMenus = document.querySelectorAll('.main-menu')

    mainMenus.forEach((mainMenu) => {
        const subMenu = mainMenu.nextElementSibling

        if(subMenu) {
            mainMenu.addEventListener('click', () => {
                mainMenu.classList.toggle('active')
                subMenu.classList.toggle('active')
            })
        }
    })
  }
});
