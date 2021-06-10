document.addEventListener("DOMContentLoaded", () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });

  const mainMenus = document.querySelectorAll(".main-menu");
  const globalNavigationMenu = document.querySelector(".global-navigation-menu");
  const overlay = document.querySelector(".overlay");

  mainMenus.forEach((mainMenu) => {
    mainMenu.addEventListener("click", () => {
      globalNavigationMenu.classList.remove("active")
      overlay.classList.remove("active");
    })
    const subMenu = mainMenu.nextElementSibling;

    if (subMenu) {
      mainMenu.addEventListener("click", () => {
        mainMenu.classList.toggle("active");
        subMenu.classList.toggle("active");
      });
    }
  });

  const localNavigationMenu = document.querySelector(".local-navigation-menu");
  const toggleMenu = document.querySelector(".toggle-menu");
  const localToggleMenu = document.querySelector(".local-toggle-menu");
  
  if(toggleMenu) {  
    toggleMenu.addEventListener("click", (e) => {
      e.stopPropagation();
      globalNavigationMenu.classList.add("active");
      overlay.classList.add("active");
    });

    overlay.addEventListener("click", () => {
      toggleMenu.classList.remove("active");
      globalNavigationMenu.classList.remove("active");
    });
  }

  if(localToggleMenu) {
    localToggleMenu.addEventListener("click", (e) => {
      e.stopPropagation();
      localNavigationMenu.classList.add("active");
      overlay.classList.add("active");
    });

    overlay.addEventListener("click", () => {
      localToggleMenu.classList.remove("active");
      localNavigationMenu.classList.remove("active");
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
  const rows = document.querySelectorAll(".notice .row")
  
  rows.forEach(row => {    
    row.addEventListener("click", () => {
      row.classList.toggle("active")
    })
  })



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

  const btnNavigation = document.querySelector(".btn-navigation")
  const modalNavigation = document.querySelector(".modal-navigation")

  if(btnNavigation) {
    btnNavigation.addEventListener("click", () => {
      modalNavigation.classList.add("active")
      visibleOverlay()
    })
  }

  const btnSearch = document.querySelector(".btn-search")
  const modalSearch = document.querySelector(".modal-search")

  if(btnSearch) {
    btnSearch.addEventListener("click", () => {
      modalSearch.classList.add("active")
      visibleOverlay()
    })
  }

  

  // File Input
  const fileInput = document.querySelector(".input-file"),
    fileButton = document.querySelector(".input-file-trigger"),
    the_return = document.querySelector(".file-return");

  if (fileInput) {
    fileButton.addEventListener("keydown", function (event) {
      if (event.keyCode == 13 || event.keyCode == 32) {
        fileInput.focus();
      }
    });
    fileButton.addEventListener("click", function (event) {
      fileInput.focus();
      return false;
    });
    fileInput.addEventListener("change", function (event) {
      the_return.innerHTML = this.files[0].name;
    });
  }

  // Checkbox All
  function check() {
    var checked =
      arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var cbs = document.querySelectorAll('input[name="books"]');
    cbs.forEach(function (cb) {
      cb.checked = checked;
    });
  }

  function handleCheckAll() {
    check();
    this.onclick = handleUncheckAll;
  }

  function handleUncheckAll() {
    check(false);
    this.onclick = handleCheckAll;
  }

  const btnCheckAll = document.querySelector("#checkAll");

  if (btnCheckAll) {
    btnCheckAll.addEventListener("click", handleCheckAll);
  }

  // Admin: Logo File Upload
  const adminImagesPage = document.querySelector("main.images");
  if (adminImagesPage) {
    function ekUpload() {
      function Init() {
        var fileSelect = document.getElementById("file-upload"),
          fileDrag = document.getElementById("file-drag"),
          submitButton = document.getElementById("submit-button");

        fileSelect.addEventListener("change", fileSelectHandler, false);

        // Is XHR2 available?
        var xhr = new XMLHttpRequest();
        if (xhr.upload) {
          // File Drop
          fileDrag.addEventListener("dragover", fileDragHover, false);
          fileDrag.addEventListener("dragleave", fileDragHover, false);
          fileDrag.addEventListener("drop", fileSelectHandler, false);
        }
      }

      function fileDragHover(e) {
        var fileDrag = document.getElementById("file-drag");

        e.stopPropagation();
        e.preventDefault();

        fileDrag.className =
          e.type === "dragover" ? "hover" : "modal-body file-upload";
      }

      function fileSelectHandler(e) {
        // Fetch FileList object
        var files = e.target.files || e.dataTransfer.files;

        // Cancel event and hover styling
        fileDragHover(e);

        // Process all File objects
        for (var i = 0, f; (f = files[i]); i++) {
          parseFile(f);
          uploadFile(f);
        }
      }

      // Output
      function output(msg) {
        // Response
        var m = document.getElementById("messages");
        m.innerHTML = msg;
      }

      function parseFile(file) {
        output("<strong>" + encodeURI(file.name) + "</strong>");

        // var fileType = file.type;
        // console.log(fileType);
        var imageName = file.name;

        var isGood = /\.(?=gif|jpg|png|jpeg)/gi.test(imageName);
        if (isGood) {
          document.getElementById("start").classList.add("hidden");
          document.getElementById("response").classList.remove("hidden");
          document.getElementById("notimage").classList.add("hidden");
          // Thumbnail Preview
          document.getElementById("file-image").classList.remove("hidden");
          document.getElementById("file-image").src = URL.createObjectURL(file);
        } else {
          document.getElementById("file-image").classList.add("hidden");
          document.getElementById("notimage").classList.remove("hidden");
          document.getElementById("start").classList.remove("hidden");
          document.getElementById("response").classList.add("hidden");
          document.getElementById("file-upload-form").reset();
        }
      }
      function uploadFile(file) {
        var xhr = new XMLHttpRequest(),
          fileInput = document.getElementById("class-roster-file"),
          pBar = document.getElementById("file-progress"),
          fileSizeLimit = 1024; // In MB
        if (xhr.upload) {
          // Check if file is less than x MB
          if (file.size <= fileSizeLimit * 1024 * 1024) {
            // Progress bar
            pBar.style.display = "inline";

            // File received / failed
            xhr.onreadystatechange = function (e) {
              if (xhr.readyState == 4) {
                // Everything is good!
                // progress.className = (xhr.status == 200 ? "success" : "failure");
                // document.location.reload(true);
              }
            };

            // Start upload
            xhr.open(
              "POST",
              document.getElementById("file-upload-form").action,
              true
            );
            xhr.setRequestHeader("X-File-Name", file.name);
            xhr.setRequestHeader("X-File-Size", file.size);
            xhr.setRequestHeader("Content-Type", "multipart/form-data");
            xhr.send(file);
          } else {
            output(
              "Please upload a smaller file (< " + fileSizeLimit + " MB)."
            );
          }
        }
      }

      // Check for the various File API support.
      if (window.File && window.FileList && window.FileReader) {
        Init();
      } else {
        document.getElementById("file-drag").style.display = "none";
      }
    }
    ekUpload();
  }
});
