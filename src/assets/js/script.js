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
    if (btnCheckAll) {
        btnCheckAll.onclick = checkAll;
    }


    // 임상시험대상환자 상세정보 - 팝업창
    const overlay = document.querySelector('.overlay')
    const closes = document.querySelectorAll('.close')
    const modals = document.querySelectorAll('.modal')

    const inputResearchID = document.querySelector('.input-researchID')
    const modalResearchID = document.querySelector('.modal-researchID')
    if (inputResearchID) {
        inputResearchID.addEventListener('click', () => {
            modalResearchID.classList.add('active')
            overlay.classList.add('active')
        })
    }

    const inputBodyPosition = document.querySelector('.input-body-position')
    const modalBodyPosition = document.querySelector('.modal-body-position')
    if (inputBodyPosition) {
        inputBodyPosition.addEventListener('click', () => {
            modalBodyPosition.classList.add('active')
            overlay.classList.add('active')
        })
    }

    const closeModal = () => {
        overlay.classList.remove('active')
        modals.forEach((modal) => {
            modal.classList.remove('active')
        })
    }

    if (overlay) {
        overlay.addEventListener('click', closeModal)
    }

    if (closes) {
        closes.forEach((close) => {
            close.addEventListener('click', closeModal)
        })
    }


    // 임상시험대상환자 상세정보 - 신체계측 정보 양식 추가 및 삭제
    const addBodyMeasurement = document.querySelector('.add-body-measurement')
    if (addBodyMeasurement) {
        const form = document.querySelector('.form-body-measurement')

        function removeBodyMeasurementForm(event) {
            const rows = document.querySelectorAll('.form-body-measurement .rows')
            const currentButton = event.target.parentNode
            const currentRow = currentButton.parentNode

            if(rows.length !== 1) {
                form.removeChild(currentRow)
            }
        }

        function addBodyMeasurementForm(event) {
            event.stopPropagation();
            event.preventDefault();
            const clone = form.children[0].cloneNode(true);
            form.insertBefore(clone, this);
            const inputs = clone.querySelectorAll('input')
            inputs.forEach((input) => {
                input.value = ''
            })

            const deleteButtons = document.querySelectorAll('.btn-minus')
            deleteButtons.forEach((deleteButton) => {
                deleteButton.addEventListener('click', removeBodyMeasurementForm)
            })

            return false;
        }

        addBodyMeasurement.addEventListener('click', addBodyMeasurementForm);
    }


    // 임상시험대상환자 CSV 파일 업로드
    const csvUpload = document.querySelector('.csv-upload')

    if (csvUpload) {
        csvUpload.addEventListener('click', () => {
            const modal = document.querySelector('.modal')
            modal.classList.add('active')
            overlay.classList.add('active')
        })
    }

    const fileAttachment = document.getElementById("FileAttachment")

    if (fileAttachment) {
        fileAttachment.onchange = function () {
            document.querySelector(".upload-file").innerHTML = document.getElementById("FileAttachment").value.replace(/C:\\fakepath\\/i, '');
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

