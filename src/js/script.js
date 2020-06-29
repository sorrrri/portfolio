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


/* =====================================================
   Login Page - Temporary Scripts
   ===================================================== */
const loginButton = document.querySelector('#login-button')
const loginForm = document.querySelector('.login-form')
const wrapper = document.querySelector('.wrapper')


/* =====================================================
   Login - Fade out effect
   ===================================================== */
const fadeOutEffect = () => {
    setInterval(function () {
        loginForm.style.display = "none"
    }, 400);
    wrapper.classList.add('form-success')
}

if(loginButton) {
    loginButton.addEventListener('click', (e) => {
        e.preventDefault()
        fadeOutEffect()
    })
}


/* =====================================================
   Header - Toggle Button
   ===================================================== */
const toggleAdmin = document.querySelector('.toggle-admin')
const toggleCheckbox = document.querySelector('.toggle-checkbox')

if(toggleAdmin) {

    toggleAdmin.addEventListener('click', () => {
        if (toggleCheckbox.checked) {
            location.href = './admin/user_list.html'
        } else {
            location.href = '../index.html'
        }
    })
}


/*
const addInput = document.querySelectorAll('.add-input')
addInputFunction = () => {
    const createInputContainer = `
                <div class="input-container" onclick="location.href='#modal-set-event'">
                    <input type="text" >
                </div>`
    addInput.appendChild(createInputContainer)
}


function addDrugs() {
    var drugs = document.getElementById("drugs");
    var clone = drugs.firstElementChild.cloneNode(true);
    drugs.appendChild(clone);
}*/
