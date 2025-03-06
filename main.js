const BASE_URL = "http://localhost:3000/"
const USERS_URL = BASE_URL + "users"

const [inputName, inputEmail, inputPassword, submitBtn] = [
    document.querySelector('#name'),
    document.querySelector('#email'),
    document.querySelector('#password'),
    document.querySelector('#submit'),
]
// ============================================================================
// ============================================================================
async function getUsers() {
    let response = await fetch(USERS_URL)
    let data = await response.json()
    console.log(data)
}
getUsers()

// ============================================================================
// ============================================================================
async function createUser() {
    let newUser = {
        name: inputName.value,
        email: inputEmail.value,
        password: inputPassword.value
    }
    let response = await fetch(USERS_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUser)
    })
    let data = await response.json()
    console.log(data)
}
submitBtn.addEventListener('click', (e) => {
    e.preventDefault() // Prevent the form from submitting
    createUser()
})