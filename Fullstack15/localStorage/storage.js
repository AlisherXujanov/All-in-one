// --------------------------------------------------------------
// Registration form tags
const regForm = document.querySelector('.registration-form form')
const regName = regForm.querySelector('#name-input')
const regPass = regForm.querySelector('#pass-input')
const regPass2 = regForm.querySelector('#pass2-input')
const regSubmit = regForm.querySelector('button[type="submit"]')
// --------------------------------------------------------------
// Login form tags
const loginForm = document.querySelector('.login-form form')
const loginName = loginForm.querySelector('#login-name-input')
const loginPass = loginForm.querySelector('#login-pass-input')
const loginSubmit = loginForm.querySelector('button[type="submit"]')
// --------------------------------------------------------------
// ALERT
const alertBox = document.querySelector('.alert')
// --------------------------------------------------------------
regSubmit.addEventListener('click', registerUser)
loginSubmit.addEventListener('click', loginUser)
// --------------------------------------------------------------
// Logal storage key for users: 'users'
// [{}, {}, {}, ...]
const usersKey = 'users'
// --------------------------------------------------------------
function registerUser(e) {
    e.preventDefault()
    if (regName.value == "" || regPass.value == "" || regPass2.value == "") return showAlert('warning', 'Fill on all fields!')
    if (regPass.value != regPass2.value) return showAlert('error', 'Passwords do not match!')

    let users = getUsers() // []
    let newUser = {
        "name": regName.value,
        "password": regPass.value
    }

    if (users.find(user => user.name == newUser.name)) {
        showAlert('error', 'User already exists with this name')
    }
    else {
        users.push(newUser)
        localStorage.setItem(usersKey, JSON.stringify(users))
        showAlert('success', 'Successfully registered')
    }
    e.target.form.reset()
}
// --------------------------------------------------------------
function loginUser(e) {
    e.preventDefault()
    if (loginName.value == "" || loginPass.value == "") return showAlert('warning', 'Fill on all fields!')

    let existingUser = {
        "name": loginName.value,
        "password": loginPass.value
    }

    let users = getUsers()
    if (users.find(user => user.name == existingUser.name  &&  user.password == existingUser.password)) {
        showAlert('success', 'Successfully logged in!')
    }
    else {
        showAlert('warning', 'Invalid credentials. Please try again!')
    }
    e.target.form.reset()
}
// --------------------------------------------------------------
function getUsers() {
    let users = localStorage.getItem(usersKey)
    return JSON.parse(users || "[]") // => []
}
// --------------------------------------------------------------
function showAlert(type, message) {
    alertBox.style.display = 'block'
    alertBox.innerText = message

    if (type == 'success') {
        alertBox.style.backgroundColor = 'darkgreen'
    } else if (type == 'warning') {
        alertBox.style.backgroundColor = 'orange'
    } else if (type == 'error') {
        alertBox.style.backgroundColor = 'red'
    } else {
        throw new Error('Invalid alert type') 
    }
    setTimeout(() => {
        alertBox.style.display = 'none'
        alertBox.innerText = ''
    }, 3000)
}