let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault()
  }
}, false)

document.addEventListener('DOMContentLoaded', function () {
  const subMenu = document.querySelector('.sub-menu')

  /*if (document.location.hash == "" || document.location.hash == "#")
    document.location.hash = "#all";*/

  function activeClass(e) {
    var elems = document.querySelectorAll(".active-sub-menu");

    Array.from(elems).forEach(el => {
      el.classList.remove('active-sub-menu');
    })
    // mark as active selected menu item
    e.target.classList.add("active-sub-menu");
  }

  if (subMenu) {
    subMenu.addEventListener('click', activeClass)
    /*subMenu.addEventListener('mouseover', () => {
      document.getElementsByClassName('container').style.backgroundPosition = "100% 0"
    })*/
  }


  const loginContainer = document.querySelector(".login-container")

  if(loginContainer) {
    loginContainer.addEventListener("mouseover", () => {
      loginContainer.style.boxShadow = "inset 0 0 30px rgba(255,255,255,.2)"
    })

    loginContainer.addEventListener("mouseout", () => {
      loginContainer.style.boxShadow = null
    })
  }
})
