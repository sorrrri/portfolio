"use strict";

var vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
window.addEventListener('resize', function () {
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
});
document.documentElement.addEventListener('touchstart', function (event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);
window.addEventListener('resize', function (event) {
  location.reload();
});
var aside = document.querySelector('aside');

function setMyCookie() {
  var asideToggleCookie = $('aside').hasClass('active') ? 'isActive' : 'notActive';
  var asideSubmenuCookie = $('.sub-menu').hasClass('active') ? 'isActive' : 'notActive';
  $.cookie('asideToggleCookie', asideToggleCookie, {
    path: '/'
  });
  $.cookie('asideSubmenuCookie', asideSubmenuCookie, {
    path: '/'
  });
}

if ($.cookie('asideToggleCookie') == 'isActive') {
  $('aside').addClass('active');
} else {
  $('aside').removeClass('active');
}

var asideMenu = document.querySelector('.aside-toggle-menu');
var asideSubMenu = document.getElementsByClassName('sub-menu');

if (aside) {
  var openSubMenu = function openSubMenu(e) {
    var subMenu = e.target;
    subMenu.classList.toggle('active');
  };

  asideMenu.addEventListener('click', function () {
    aside.classList.toggle('active');
    location.reload();
    setMyCookie();
  });
  Array.from(asideSubMenu).forEach(function (asideSubMenu) {
    return asideSubMenu.addEventListener('click', openSubMenu);
  });
}

var selectedCategory = document.querySelector('input[name = "select-category"]:checked');

if (selectedCategory.hasAttribute("checked")) {
  //Test if something was checked
  alert(selectedCategory.value); //Alert the value of the checked.
} else {
  alert('Nothing checked'); //Alert, nothing was checked.
}

var tableDiagnosis = document.querySelector(".table-diagnosis");
var buttonAddDiagnosis = document.querySelector(".row-diagnosis .btn-plus");

function createDiagnosisElement() {
  var ul = document.createElement("ul");
  ul.setAttribute('class', 'row');
  ul.innerHTML = "\n                <li><input type=\"text\"></li>\n                <li><input type=\"text\"></li>\n                <li class=\"input-select\">\n                    <div>\n                        <input value=\"HOI\" type=\"radio\" name=\"select-diagnosis\" id=\"diagnosis\">\n                        <label for=\"diagnosis\">\uC8FC+\uBD80\uC0C1\uBCD1</label>\n                    </div>\n                    <div>\n                        <input value=\"VOI\" type=\"radio\" name=\"select-diagnosis\" id=\"mainDiagnosis\">\n                        <label for=\"mainDiagnosis\">\uC8FC\uC0C1\uBCD1</label>\n                    </div>\n                    <div>\n                        <input value=\"condition\" type=\"radio\" name=\"select-diagnosis\" id=\"subDiagnosis\">\n                        <label for=\"subDiagnosis\">\uBD80\uC0C1\uBCD1</label>\n                    </div>\n                </li>\n                <li class=\"elem-delete\">\n                    <a class=\"ico-delete\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\"\n                             viewBox=\"0 0 24 24\">\n                            <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/>\n                        </svg>\n                    </a>\n                </li>\n";
  tableDiagnosis.appendChild(ul);
}

var tableDiagnosis2 = document.querySelector(".table-diagnosis-02");
var buttonAddDiagnosis2 = document.querySelector(".row-diagnosis-02 .btn-plus");

function createDiagnosisElement2() {
  var ul = document.createElement("ul");
  ul.setAttribute('class', 'row');
  ul.innerHTML = "\n                <li><input type=\"text\"></li>\n                <li><input type=\"text\"></li>\n                <li class=\"input-select\">\n                    <div>\n                        <input value=\"HOI\" type=\"radio\" name=\"select-diagnosis\" id=\"diagnosis-02\">\n                        <label for=\"diagnosis-02\">\uC8FC+\uBD80\uC0C1\uBCD1</label>\n                    </div>\n                    <div>\n                        <input value=\"VOI\" type=\"radio\" name=\"select-diagnosis\" id=\"mainDiagnosis-02\">\n                        <label for=\"mainDiagnosis-02\">\uC8FC\uC0C1\uBCD1</label>\n                    </div>\n                    <div>\n                        <input value=\"condition\" type=\"radio\" name=\"select-diagnosis\" id=\"subDiagnosis-02\">\n                        <label for=\"subDiagnosis-02\">\uBD80\uC0C1\uBCD1</label>\n                    </div>\n                </li>\n                <li class=\"input-select input-days\">\n                    <input type=\"number\">\n                    <span>\uC77C \uC804</span>\n                    <input type=\"number\">\n                    <span>\uC77C \uD6C4</span>\n                </li>\n                <li>\n                    <div>\n                        <input type=\"radio\" name=\"select-occur\" id=\"occurYes\">\n                        <label for=\"occurYes\">\uBC1C\uC0DD</label>\n                    </div>\n                    <div>\n                        <input type=\"radio\" name=\"select-occur\" id=\"occurNo\">\n                        <label for=\"occurNo\">\uC5C6\uC74C</label>\n                    </div>\n                </li>\n                <li class=\"elem-delete\">\n                    <a class=\"ico-delete\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\"\n                             viewBox=\"0 0 24 24\">\n                            <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/>\n                        </svg>\n                    </a>\n                </li>\n";
  tableDiagnosis2.appendChild(ul);
}

var tableDiagnosis3 = document.querySelector(".table-diagnosis-03");
var buttonAddDiagnosis3 = document.querySelector(".row-diagnosis-03 .btn-plus");

function createDiagnosisElement3() {
  var ul = document.createElement("ul");
  ul.setAttribute('class', 'row');
  ul.innerHTML = "\n                <li><input type=\"text\"></li>\n                <li><input type=\"text\"></li>\n                <li class=\"input-select input-days\">\n                    <input type=\"number\">\n                    <span>\uC77C \uC804</span>\n                    <input type=\"number\">\n                    <span>\uC77C \uD6C4</span>\n                </li>\n                <li class=\"elem-delete\">\n                    <a class=\"ico-delete\">\n                        <svg xmlns=\"http://www.w3.org/2000/svg\" width=\"18\" height=\"18\"\n                             viewBox=\"0 0 24 24\">\n                            <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/>\n                        </svg>\n                    </a>\n                </li>\n";
  tableDiagnosis3.appendChild(ul);
}

if (tableDiagnosis) {
  buttonAddDiagnosis.addEventListener("click", createDiagnosisElement);
  buttonAddDiagnosis2.addEventListener("click", createDiagnosisElement2);
  buttonAddDiagnosis3.addEventListener("click", createDiagnosisElement3);
} // Delete Elements

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


var overlay = document.querySelector(".overlay");

function handleRemoveModal() {
  var modalActive = document.querySelector(".modal.active");
  overlay.classList.remove("active");
  modalActive.classList.remove("active");
}

var rowQuery = document.querySelector(".row-query");
var buttonQuery = document.querySelector(".btn-query");
var modalQueryRefresh = document.querySelector(".modal-query-refresh");

function handleClickRefreshQuery() {
  overlay.classList.add("active");
  modalQueryRefresh.classList.add("active");
}

function handleRefreshQuery() {
  overlay.classList.remove('active');
  modalQueryRefresh.classList.remove('active');
  queryTextarea.value = "";
}

var queryTextarea = document.querySelector(".query-textarea");
var tooltip = document.querySelector(".tooltip");

function handleCopyQuery() {
  queryTextarea.select();
  document.execCommand('copy');
  tooltip.innerHTML = "Copied";
}

if (rowQuery) {
  var buttonRefresh = document.querySelector(".btn-refresh");
  var QueryRefreshSubmit = document.querySelector(".modal-query-refresh .btn-submit");
  var QueryRefreshCancel = document.querySelector(".modal-query-refresh .btn-cancel"); // refresh query

  buttonRefresh.addEventListener('click', handleClickRefreshQuery);
  QueryRefreshSubmit.addEventListener('click', handleRefreshQuery);
  QueryRefreshCancel.addEventListener('click', handleRemoveModal);
  var buttonCopy = document.querySelector(".btn-copy"); // copy query

  buttonCopy.addEventListener('click', handleCopyQuery);
  buttonCopy.addEventListener('mouseout', function () {
    tooltip.innerHTML = "Click to copy to clipboard";
  });
}