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


const select2Selectbox = document.querySelector('.js-example-basic-single')
if (select2Selectbox) {
  $('.js-example-basic-single').select2();
}

function countdown(elementName, minutes, seconds) {
  var element, endTime, hours, mins, msLeft, time;

  function twoDigits(n) {
    return (n <= 9 ? "0" + n : n);
  }

  function updateTimer() {
    msLeft = endTime - (+new Date);

    time = new Date(msLeft);
    hours = time.getUTCHours();
    mins = time.getUTCMinutes();
    element.innerHTML = (hours ? twoDigits(hours) + ':' + twoDigits(mins) : twoDigits(mins)) + ':' + twoDigits(time.getUTCSeconds());
    setTimeout(updateTimer, time.getUTCMilliseconds() + 500);

  }

  element = document.getElementById(elementName);
  endTime = (+new Date) + 1000 * (60 * minutes + seconds) + 500;
  updateTimer();
}

countdown("countdown", 10, 0);



const filterCharts = document.querySelector('.filter-charts')
if (filterCharts) {
  // On checkbox click in the filter
  $("#filters-container .checkbox").click(() => {
    // Define constants for length of checked checkboxes array
    const selectedChartLength = $('.filter-charts :checkbox').filter(':checked').length;
    // Hide all items in the list
    $(".chart-container").hide();

    // If checkboxes are selected in the color-filter ONLY
    if (selectedChartLength >= 1) {
      // For each of the checked checkboxes in the color-filter
      $(".filter-charts :checkbox:checked").each((index, element) => {
        // Show items with the class of the value of the checkbox
        $("." + $(element).val()).fadeIn();
      });
    }
  })
}


// Modal
let backdrop = document.querySelector('.modal-backdrop')

const COxMAPModal = () => {
  const modal = document.querySelector('.modal-COx-MAP')
  modal.classList.add('active')
  backdrop.classList.add('active')
}

const CO2xETCO2Modal = () => {
  const modal = document.querySelector('.modal-CO2x-ETCO2')
  modal.classList.add('active')
  backdrop.classList.add('active')
}

$(".close").on("click", function () {
  $(".modal, .modal-backdrop").removeClass("active");
});

const content = document.querySelector('.content')
const scrollHandler = document.querySelector('.scroll-handler')
const scrollToTop = document.querySelector('.scroll-to-top')
const scrollToBottom = document.querySelector('.scroll-to-bottom')
const scrollToLeft = document.querySelector('.scroll-to-left')
const scrollToRight = document.querySelector('.scroll-to-right')

function toggleScrollHandler() {
  scrollHandler.classList.toggle("active")
}

function handleScrollToTop() {
  content.scrollTo({top: 0, behavior: "smooth"})
}

function handleScrollToBottom() {
  content.scrollTo({top: content.scrollHeight - content.clientHeight, behavior: "smooth"})
}

function handleScrollToLeft() {
  content.scrollTo({left: 0, behavior: "smooth"})
}

function handleScrollToRight() {
  content.scrollTo({left: content.scrollWidth - content.clientWidth, behavior: "smooth"})
}

if (scrollHandler) {
  scrollHandler.addEventListener('click', toggleScrollHandler)
  scrollToTop.addEventListener('click', handleScrollToTop)
  scrollToBottom.addEventListener('click', handleScrollToBottom)
  scrollToLeft.addEventListener('click', handleScrollToLeft)
  scrollToRight.addEventListener('click', handleScrollToRight)

}


var dragSrcEl = null;

function handleDragStart(e) {
  // Target (this) element is the source node.
  dragSrcEl = this;

  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/html', this.outerHTML);

  this.classList.add('dragElem');
}

function handleDragOver(e) {
  if (e.preventDefault) {
    e.preventDefault(); // Necessary. Allows us to drop.
  }
  this.classList.add('over');

  e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

  return false;
}

function handleDragEnter(e) {
  // this / e.target is the current hover target.
}

function handleDragLeave() {
  this.classList.remove('over');  // this / e.target is previous target element.
}

function handleDrop(e) {
  // this/e.target is current target element.

  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }

  // Don't do anything if dropping the same column we're dragging.
  if (dragSrcEl != this) {
    // Set the source column's HTML to the HTML of the column we dropped on.
    //alert(this.outerHTML);
    //dragSrcEl.innerHTML = this.innerHTML;
    //this.innerHTML = e.dataTransfer.getData('text/html');
    this.parentNode.removeChild(dragSrcEl);
    var dropHTML = e.dataTransfer.getData('text/html');
    this.insertAdjacentHTML('beforebegin', dropHTML);
    var dropElem = this.previousSibling;
    addDnDHandlers(dropElem);

  }
  this.classList.remove('over');
  return false;
}

function handleDragEnd() {
  // this/e.target is the source node.
  this.classList.remove('over');

  /*[].forEach.call(cols, function (col) {
    col.classList.remove('over');
  });*/
}

function addDnDHandlers(elem) {
  elem.addEventListener('dragstart', handleDragStart, false);
  elem.addEventListener('dragenter', handleDragEnter, false)
  elem.addEventListener('dragover', handleDragOver, false);
  elem.addEventListener('dragleave', handleDragLeave, false);
  elem.addEventListener('drop', handleDrop, false);
  elem.addEventListener('dragend', handleDragEnd, false);

}

var cols = document.querySelectorAll('.chart-container');
[].forEach.call(cols, addDnDHandlers);
