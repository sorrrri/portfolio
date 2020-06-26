/* =====================================================
   Login Page - Temporary Scripts
   ===================================================== */
const loginButton = document.querySelector('#login-button')
const loginForm = document.querySelector('.login-form')
const wrapper = document.querySelector('.wrapper')

/*    loginButton.addEventListener('click', (e) => {
        e.preventDefault()
        loginForm.fadeOut(500);
        wrapper.classList.add('form-success')
    })*/


/* =====================================================
   Header - Toggle Button
   ===================================================== */
const toggleAdmin = document.querySelector('.toggle-admin')
const toggleCheckbox = document.querySelector('.toggle-checkbox')

toggleAdmin.addEventListener('click', () => {
    if (toggleCheckbox.checked) {
        location.href = './admin/user_list.html'
    } else {
        location.href = '../index.html'
    }
})





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
