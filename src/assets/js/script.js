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

  // 환자현황: 선택한 병원 대시보드 화면 띄우기
  const subMenus = document.querySelectorAll('.sub-menu li')
  const sections = document.querySelectorAll('.dashboard section')

  const init = (n) => {
    sections.forEach((section) => {
      section.style.display = "none"
      subMenus.forEach((subMenu) => {
        subMenu.classList.remove("active")
      })
    })
    sections[n].style.display = "flex"
    subMenus[n].classList.add("active")
  }

  subMenus.forEach((subMenu, index) => {
    subMenu.addEventListener("click", () => {
      init(index)
    })
    init(0)
  })



  // 환자조회: 내역조회

  const moreButton = document.querySelectorAll('.btn-more')
  const rows = document.querySelectorAll('.rows')

  const initRow = (n) => {
    rows.forEach((row) => {
      row.classList.remove('active');
    })
    rows[n].classList.add('active');
  }

  moreButton.forEach((row, index) => {
    row.addEventListener('click', () => {
      initRow(index)
    })
  })



  //환자조회: 체크박스
  function check(checked = true) {
    const cbs = document.querySelectorAll('input[name="check-patient"]');
    cbs.forEach((cb) => {
      cb.checked = checked
    })
  }

  function checkAll() {
    check();
    this.onclick = uncheckAll
  }

  function uncheckAll() {
    check(false);
    this.onclick = checkAll
  }

  const btnCheckAll = document.querySelector('#check-all');
  if(btnCheckAll) {
    btnCheckAll.onclick = checkAll;
  }



  // 임상시험대상환자 상세정보 추가
  const overlay = document.querySelector('.overlay')
  const modal = document.querySelector('.modal')

  const modalConfirmationNumber = document.querySelector('.modal-confirmation-number')
  const confirmationNumber = document.querySelector('.col-confirmation-number input')

  if(confirmationNumber) {
    confirmationNumber.addEventListener('click', () => {
      modalConfirmationNumber.classList.add('active')
      overlay.classList.add('active')
    })
  }

  if(overlay) {
    overlay.addEventListener('click', () => {
      overlay.classList.remove('active')
      modal.classList.remove('active')
    })
  }

  // 임상시험대상환자 CSV 파일 업로드
  const csvUpload = document.querySelector('.csv-upload')

  if(csvUpload) {
    csvUpload.addEventListener('click', () => {
      modal.classList.add('active')
      overlay.classList.add('active')
    })
  }

  const fileAttachment = document.getElementById("FileAttachment")

  if(fileAttachment) {
    fileAttachment.onchange = function () {
      document.querySelector(".upload-file").innerHTML =  document.getElementById("FileAttachment").value.replace(/C:\\fakepath\\/i, '');
    };
  }



  // 로그인
  const loginContainer = document.querySelector(".login-container")

  if (loginContainer) {
    loginContainer.addEventListener("mouseover", () => {
      loginContainer.style.boxShadow = "inset 0 0 30px rgba(255,255,255,.2)"
    })

    loginContainer.addEventListener("mouseout", () => {
      loginContainer.style.boxShadow = null
    })
  }
})

