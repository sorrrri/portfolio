window.onload = () => {
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
        if(toggleCheckbox.checked) {
            location.href='./admin/user_list.html'
        } else {
            location.href='../index.html'
        }
    })
}