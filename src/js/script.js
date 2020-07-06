/* =====================================================
   Height
   ===================================================== */
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
   Login Page - Fade out effect
   ===================================================== */
const loginContainer = document.querySelector('.login-container')
const tabContainer = document.querySelector('.tab-container')
const tabSignIn = document.querySelector('.tab-sign-in')
const tabSignUp = document.querySelector('.tab-sign-up')
const signInForm = document.querySelector('.sign-in-form')
const signUpForm = document.querySelector('.sign-up-form')
const loginForm = document.querySelector('.sign-in-form')
const wrapper = document.querySelector('.wrapper')


const fadeOutEffect = () => {
    setInterval(function () {
        loginForm.style.display = "none"
    }, 400);
    wrapper.classList.add('form-success')
}

if (loginContainer) {
    tabSignIn.classList.add('active')
    signInForm.classList.add('active')

    tabSignIn.addEventListener('click', () => {
        tabSignIn.classList.add('active')
        tabSignUp.classList.remove('active')
        signInForm.classList.add('active')
        signUpForm.classList.remove('active')
    })

    tabSignUp.addEventListener('click', () => {
        tabSignUp.classList.add('active')
        tabSignIn.classList.remove('active')
        signUpForm.classList.add('active')
        signInForm.classList.remove('active')
    })

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

if (toggleAdmin) {
    toggleAdmin.addEventListener('click', () => {
        if (toggleCheckbox.checked) {
            location.href = './admin/user_list.html'
        } else {
            location.href = '../index.html'
        }
    })
}


/* =====================================================
   Admin Settings - Add Input
   ===================================================== */
const addWardBed = document.querySelector('.add-input-ward-bed')
if(addWardBed) {
    const setWardBedInput = document.querySelector('.set-ward-bed input')
    const wardBedList = document.querySelector('.ward-bed-list')

    function setWardBed(text) {
        const createdList = document.createElement('li')
        const createdSpan = document.createElement('span')
        const createdButtonContainer = document.createElement('div')
        const createdDeleteButton = document.createElement('button')

        createdSpan.innerText = text
        createdButtonContainer.classList.add('button-container')
        createdDeleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`
        createdDeleteButton.classList.add('delete-setting')
        createdButtonContainer.appendChild(createdDeleteButton)

        createdList.appendChild(createdSpan)
        createdList.appendChild(createdButtonContainer)
        wardBedList.appendChild(createdList)

        createdDeleteButton.addEventListener('click', deleteSettings)
    }

    function deleteSettings(event) {
        const currentButton = event.target
        const currentList = currentButton.closest('li')
        wardBedList.removeChild(currentList)
    }

    function handleSetWardBed(e) {
        e.preventDefault()
        const currentValue = setWardBedInput.value
        setWardBed(currentValue)
        setWardBedInput.value = ''
    }

    addWardBed.addEventListener('click', handleSetWardBed)
}


const addEvent = document.querySelector('.add-input-event')
if(addEvent) {
    const setEventInput = document.querySelector('.set-event input')
    const eventList = document.querySelector('.event-list')

    function setEvent(text) {
        const createdList = document.createElement('li')
        const createdSpan = document.createElement('span')
        const createdButtonContainer = document.createElement('div')
        const createdDeleteButton = document.createElement('button')

        createdSpan.innerText = text
        createdButtonContainer.classList.add('button-container')
        createdDeleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`
        createdDeleteButton.classList.add('delete-setting')
        createdButtonContainer.appendChild(createdDeleteButton)

        createdList.appendChild(createdSpan)
        createdList.appendChild(createdButtonContainer)
        eventList.appendChild(createdList)

        createdDeleteButton.addEventListener('click', deleteSettings)
    }

    function deleteSettings(event) {
        const currentButton = event.target
        const currentList = currentButton.closest('li')
        eventList.removeChild(currentList)
    }

    function handleSetEvent(e) {
        e.preventDefault()
        const currentValue = setEventInput.value
        setEvent(currentValue)
        setEventInput.value = ''
    }

    addEvent.addEventListener('click', handleSetEvent)
}