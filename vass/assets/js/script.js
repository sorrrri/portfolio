let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
})


document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);


window.addEventListener('resize', function (event) {
  location.reload()
});


const aside = document.querySelector('aside')

function setMyCookie() {
  const asideToggleCookie = $('aside').hasClass('active') ? 'isActive' : 'notActive';
  const asideSubmenuCookie = $('.sub-menu').hasClass('active') ? 'isActive' : 'notActive';
  $.cookie('asideToggleCookie', asideToggleCookie, {path: '/'});
  $.cookie('asideSubmenuCookie', asideSubmenuCookie, {path: '/'});
}

if ($.cookie('asideToggleCookie') == 'isActive') {
  $('aside').addClass('active');
} else {
  $('aside').removeClass('active');
}

const asideMenu = document.querySelector('.aside-toggle-menu')
const asideSubMenu = document.getElementsByClassName('sub-menu')

if (aside) {
  asideMenu.addEventListener('click', () => {
    aside.classList.toggle('active')
    location.reload()
    setMyCookie();
  })

  function openSubMenu(e) {
    const subMenu = e.target;
    subMenu.classList.toggle('active')
  }

  Array.from(asideSubMenu).forEach(asideSubMenu => asideSubMenu.addEventListener('click', openSubMenu))

}


var selectedCategory = document.querySelector('input[name = "select-category"]:checked');

if(selectedCategory.hasAttribute("checked")){  //Test if something was checked
  alert(selectedCategory.value); //Alert the value of the checked.
} else {
  alert('Nothing checked'); //Alert, nothing was checked.
}



const tableDiagnosis = document.querySelector(".table-diagnosis")
const buttonAddDiagnosis = document.querySelector(".row-diagnosis .btn-plus")

function createDiagnosisElement() {
  const ul = document.createElement("ul");
  ul.setAttribute('class', 'row');
  ul.innerHTML = `
                <li><input type="text"></li>
                <li><input type="text"></li>
                <li class="input-select">
                    <div>
                        <input value="HOI" type="radio" name="select-diagnosis" id="diagnosis">
                        <label for="diagnosis">주+부상병</label>
                    </div>
                    <div>
                        <input value="VOI" type="radio" name="select-diagnosis" id="mainDiagnosis">
                        <label for="mainDiagnosis">주상병</label>
                    </div>
                    <div>
                        <input value="condition" type="radio" name="select-diagnosis" id="subDiagnosis">
                        <label for="subDiagnosis">부상병</label>
                    </div>
                </li>
                <li class="elem-delete">
                    <a class="ico-delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                             viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                    </a>
                </li>
`
  tableDiagnosis.appendChild(ul)
}


const tableDiagnosis2 = document.querySelector(".table-diagnosis-02")
const buttonAddDiagnosis2 = document.querySelector(".row-diagnosis-02 .btn-plus")

function createDiagnosisElement2() {
  const ul = document.createElement("ul");
  ul.setAttribute('class', 'row');
  ul.innerHTML = `
                <li><input type="text"></li>
                <li><input type="text"></li>
                <li class="input-select">
                    <div>
                        <input value="HOI" type="radio" name="select-diagnosis" id="diagnosis-02">
                        <label for="diagnosis-02">주+부상병</label>
                    </div>
                    <div>
                        <input value="VOI" type="radio" name="select-diagnosis" id="mainDiagnosis-02">
                        <label for="mainDiagnosis-02">주상병</label>
                    </div>
                    <div>
                        <input value="condition" type="radio" name="select-diagnosis" id="subDiagnosis-02">
                        <label for="subDiagnosis-02">부상병</label>
                    </div>
                </li>
                <li class="input-select input-days">
                    <input type="number">
                    <span>일 전</span>
                    <input type="number">
                    <span>일 후</span>
                </li>
                <li>
                    <div>
                        <input type="radio" name="select-occur" id="occurYes">
                        <label for="occurYes">발생</label>
                    </div>
                    <div>
                        <input type="radio" name="select-occur" id="occurNo">
                        <label for="occurNo">없음</label>
                    </div>
                </li>
                <li class="elem-delete">
                    <a class="ico-delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                             viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                    </a>
                </li>
`
  tableDiagnosis2.appendChild(ul)
}


const tableDiagnosis3 = document.querySelector(".table-diagnosis-03")
const buttonAddDiagnosis3 = document.querySelector(".row-diagnosis-03 .btn-plus")

function createDiagnosisElement3() {
  const ul = document.createElement("ul");
  ul.setAttribute('class', 'row');
  ul.innerHTML = `
                <li><input type="text"></li>
                <li><input type="text"></li>
                <li class="input-select input-days">
                    <input type="number">
                    <span>일 전</span>
                    <input type="number">
                    <span>일 후</span>
                </li>
                <li class="elem-delete">
                    <a class="ico-delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                             viewBox="0 0 24 24">
                            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
                        </svg>
                    </a>
                </li>
`
  tableDiagnosis3.appendChild(ul)
}

if (tableDiagnosis) {
  buttonAddDiagnosis.addEventListener("click", createDiagnosisElement)
  buttonAddDiagnosis2.addEventListener("click", createDiagnosisElement2)
  buttonAddDiagnosis3.addEventListener("click", createDiagnosisElement3)
}

// Delete Elements
/*function handleDeleteRow(e) {
  const button = e.target
  const tableDiagnosis = document.querySelector(".table-diagnosis")

  console.log(button.parentNode)
  const row = button.parentNode
  tableDiagnosis.removeChild(row)
}

let elemDelete = document.querySelector('.elem-delete')

if(elemDelete) {
  elemDelete.addEventListener('click', handleDeleteRow)
}*/


const overlay = document.querySelector(".overlay")

function handleRemoveModal() {
  const modalActive = document.querySelector(".modal.active")

  overlay.classList.remove("active")
  modalActive.classList.remove("active")
}


const rowQuery = document.querySelector(".row-query")
const buttonQuery = document.querySelector(".btn-query")

const modalQueryRefresh = document.querySelector(".modal-query-refresh")


function handleClickRefreshQuery() {
  overlay.classList.add("active")
  modalQueryRefresh.classList.add("active")
}

function handleRefreshQuery() {
  overlay.classList.remove('active')
  modalQueryRefresh.classList.remove('active')
  queryTextarea.value = ""
}

const queryTextarea = document.querySelector(".query-textarea")
const tooltip = document.querySelector(".tooltip")

function handleCopyQuery() {
  queryTextarea.select()
  document.execCommand('copy')
  tooltip.innerHTML = "Copied"
}

if (rowQuery) {
  const buttonRefresh = document.querySelector(".btn-refresh")
  const QueryRefreshSubmit = document.querySelector(".modal-query-refresh .btn-submit")
  const QueryRefreshCancel = document.querySelector(".modal-query-refresh .btn-cancel")
  // refresh query
  buttonRefresh.addEventListener('click', handleClickRefreshQuery)
  QueryRefreshSubmit.addEventListener('click', handleRefreshQuery)
  QueryRefreshCancel.addEventListener('click', handleRemoveModal)

  const buttonCopy = document.querySelector(".btn-copy")
  // copy query
  buttonCopy.addEventListener('click', handleCopyQuery)
  buttonCopy.addEventListener('mouseout', () => {
    tooltip.innerHTML = "Click to copy to clipboard"
  })
}
