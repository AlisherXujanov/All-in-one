// let response = get_from_server() // request is sent
// div.innerHTML = response // response is displayed

// Promise  =>  {}
//  1. resolved  =>  выполнено
//  2. rejected  =>  отклонено
//  3. pending   =>  ожидание


// ------------------------------------------------------------
// SYNTAX
// let url = '...'
// fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data))
// ------------------------------------------------------------
// GET    (Принять) =>  (default)  asks the information  => спрашивает информацию
// POST (Отправить) =>  send and info and gets info. Often times, we send a form.  
//          when we sent a form info, that means that the backend must 
//          create something new using that form information
//                  => отправляет информацию и получает информацию 
//                  => часто отправляем форму. 
//                  когда мы отправляем информацию формы, это означает, 
//                  что бэкенд должен создать что-то новое, 
//                  используя эту информацию формы
// PUT (Обновить)  => update the information  =>  обновить информацию
//                 => ex: we send any kind of info so that backend update it 
//                    on database
//                 => отправляем любую информацию, чтобы бэкенд 
//                    обновит ее в базе данных  
// PATCH (Частично обновить)  =>  update the information partially
// DELETE (Удалить)  =>  delete the information  =>  удалить информацию

// ============================================================
// JSON  ->  Java Script Object Notation  =>  "{}"
// let obj = {}
// let z = JSON.stringify(obj)  //  =>  "{}"
// let y = JSON.parse(z)        //  =>  {}
// ============================================================
// status_code == 200  =>  success   - успешно
// status_code == 201  =>  created   - создано
// status_code == 404  =>  not found - не найдено
// ...... Informs us about the status of the request
// ...... Информирует нас о статусе запроса

// fetch().then().then()
// async { fetch(...) await response }
let getBtn = document.querySelector('#get-users')
let usersTable = document.querySelector('#users-talbe')

// ============================================================
// WITH async/await
let pageNumber = 1
async function get_users(e) {
    let url = `https://reqres.in/api/users?page=${pageNumber}`
    pageNumber++

    let response = await fetch(url)
   
    usersTable.style.display = 'block'
    let info = await response.json()
    let users = info.data
    
    if (users.length == 0) { 
        console.log("No data available") 
        alert("Больше данных нет")
        return
    }

    for (let user of users) {
        let tr = document.createElement('tr')
        for (let key in user) {
            let td = document.createElement('td')
            if (key === 'avatar') {
                let img = document.createElement('img')
                img.src = user[key]
                img.setAttribute('width', "100%")
                img.height = 100
                img.alt = "User picture"
                console.log(img)
                td.append(img)
            } else {
                td.innerHTML = user[key]
            }
            tr.append(td)
        }
        usersTable.append(tr)
    }
}
// ============================================================
// ============================================================
// WITH THEN
// function get_users(e) {
//     usersTable.style.display = 'block'

//     fetch(url)
//         .then(data => { return data.json() })
//         .then(info => {
//             let users = info.data

//             for (let user of users) {
//                 // {"id", "email", "first_name", "last_name", "avatar" }
//                 let tr = document.createElement('tr')
//                 for (let key in user) {
//                     let td = document.createElement('td')
//                     if (key === 'avatar') {
//                         let img = document.createElement('img')
//                         img.src = user[key]
//                         img.setAttribute('width', "100%")
//                         img.height = 100
//                         img.alt = "User picture"
//                         console.log(img)
//                         td.append(img)
//                     } else {
//                         td.innerHTML = user[key]
//                     }
//                     tr.append(td)  // to the end
//                     // prepend     // to the beginning
//                     // before      // before the element
//                     // after       // after the element
//                 }
//                 usersTable.append(tr)
//             }
//         })
// }
// ============================================================
// ============================================================
getBtn.addEventListener("click", get_users)