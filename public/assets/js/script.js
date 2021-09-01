document.addEventListener("DOMContentLoaded", () => {
  // 기기 높이 맞추기
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);

  window.addEventListener("resize", () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  });


  /* =====================================================
       Dropdown Menu
  ===================================================== */


  /* =====================================================
       Bottom Sticky Menu
  ===================================================== */

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
    images.forEach((image) => {
      image.addEventListener("click", (e) => {
        e.preventDefault();
        modalImage.innerHTML = `<img src="${e.target.src}" alt="" />`;
      });
    });
  }

  /* =====================================================
       Loader
  ===================================================== */
});
