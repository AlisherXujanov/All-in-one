// OBJECTS

// Beginner level

// 1. Create an object called car with the following properties: brand, model, color, year. Print each property on the console.
// RU: Создайте объект под названием car с следующими свойствами: brand, model, color, year. 
// Выведите каждое свойство в консоль.

// 2. Given an object, get the length of the object keys and values.
// RU: Учитывая объект, получите длину ключей и значений объекта.

// 3. Create a function that takes object and a key as parameters.
// Then delete the key from the object and return remaining object.
// RU: Создайте функцию, которая принимает объект и ключ в качестве параметров. Затем удалите ключ из объекта и верните оставшийся объект.

// 4. Createa a function to sort an array of users objects by their age.
// RU: Создайте функцию для сортировки массива объектов пользователей по их возрасту.

// INTERMEDIATE LEVEL

// 1. Create a function that takes an object as a parameter and returns the sum of all the values that are numbers.
// RU: Создайте функцию, которая принимает объект в качестве параметра и возвращает сумму всех значений, которые являются числами.

// 2. Create a function that takes an object as a parameter and 
// converts each key into reversed case and returns the new object.
// RU: Создайте функцию, которая принимает объект в качестве параметра и
// преобразует каждый ключ в обратный регистр (назад-вперёд) и возвращает новый объект.

// 3. Create a function that takes as many objects as you want and
// returns an object which contains all the keys and values of the passed objects.
// RU: Создайте функцию, которая принимает столько объектов, сколько захотите, и возвращает объект, который содержит все ключи и значения переданных объектов.

// 4. Create a function that takes an object as a parameter and returns the object sorted by its values (not keys).
// RU: Создайте функцию, которая принимает объект в качестве параметра и возвращает объект, отсортированный по его значениям (а не ключам).


// ADVANCED LEVEL

// 1. Write a function to count how many times each value occurs in a object.
// RU: Напишите функцию, чтобы подсчитать, сколько раз каждое значение встречается в объекте.

// 2. Write a function to get a copy of the object where the keys have become the values and the values the keys.
// RU: Напишите функцию, чтобы получить копию объекта, где ключи стали значениями, а значения ключами.

// 3. Write a Python program to get the maximum and minimum values (if it is a number) in a dictionary.
// RU: Напишите программу на Python, чтобы получить максимальное и минимальное значения (если это число) в словаре.

// WORKING WITH API 

// 4. Get all users from this link https://jsonplaceholder.typicode.com/users
// and separate them by email-endings (for example: com, net, org, etc.)
// For this, create a function and pass an array of objects (users) as a parameter.
// So that function will return an object where each key is an email-ending and value a number of users with such email-ending.
// RU: Получите всех пользователей по этой ссылке https://jsonplaceholder.typicode.com/users
// и разделите их по окончаниям электронной почты (например: com, net, org и т. д.)
// Для этого создайте функцию и передайте массив объектов (пользователей) в качестве параметра.
// Таким образом, функция вернет объект, где каждый ключ - это окончание электронной почты, 
// а значение - количество пользователей с таким окончанием электронной почты.

// EXAMPLE: 
// const emailEndings = {
//     'com': 5,
//     'net': 2,
//     // ...
// }


// 1. Fetch all users from the URL and log them to the console.
// RU: Получите всех пользователей по URL и зарегистрируйте их в консоли.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => console.log(users));


// 2. Fetch a single user by ID from the URL and log them to the console
// RU: Получите одного пользователя по ID из URL и зарегистрируйте его в консоли.
let id = 1; // replace with desired ID
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => console.log(user));


// 3. Fetch all users and log only their names to the console.
// RU: Получите всех пользователей и зарегистрируйте только их имена в консоль.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users.forEach(user => console.log(user.name)));


// 4. Fetch all users and create an object from them where the key is the user ID and the value is the user's name.
// RU: Получите всех пользователей и создайте из них объект, где ключ - это ID пользователя, а значение - имя пользователя.
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        const usersObj = {};
        users.forEach(user => usersObj[user.id] = user.name);
        console.log(usersObj);
    });



// CONVERTING  Promise/then  TO  async/await
// RU: КОНВЕРТАЦИЯ  Promise/then  В  async/await

// 1. Convert the following Promise/then code to async/await:
// RU: Преобразуйте следующий код Promise/then в async/await:
async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    console.log(users);
}
fetchUsers();


// 2. Convert the following Promise/then code to async/await:
// RU: Преобразуйте следующий код Promise/then в async/await:
async function fetchUserById(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    const user = await response.json();
    console.log(user);
}
fetchUserById(1);

// 3. Convert the following Promise/then code to async/await:
// RU: Преобразуйте следующий код Promise/then в async/await:
async function fetchUsersNames() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    users.forEach(user => console.log(user.name));
}
fetchUsersNames();

// 4. Convert the following Promise/then code to async/await:
// RU: Преобразуйте следующий код Promise/then в async/await:
async function fetchUsersObj() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    const usersObj = {};
    users.forEach(user => usersObj[user.id] = user.name);
    console.log(usersObj);
}
fetchUsersObj(); 




// =/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/=/
// 1. Random Joke Generator: Fetch a random joke from an API like the Official Joke API and display it on the screen.
// RU: Генератор случайных шуток: Получите случайную шутку из API, такого как Official Joke API и отобразите её на экране.

// 2. Weather App: Fetch weather data for a given city from an API like OpenWeatherMap.
// RU: Погодное приложение: Получите данные о погоде для заданного города из API, такого как OpenWeatherMap.

// 3. Currency Converter: Fetch current exchange rates from an API like ExchangeRate-API and create a currency converter.
// RU: Конвертер валют: Получите текущие обменные курсы из API, такого как ExchangeRate-API и создайте конвертер валют.

// 4. Todo List with Server: Create a todo list where the todos are fetched from a server using JSONPlaceholder.
// RU: Список дел с сервером: Создайте список дел, где дела получаются с сервера с использованием JSONPlaceholder.

// 5. Image Gallery: Fetch images from an API like Unsplash and display them in a gallery.
// RU: Галерея изображений: Получите изображения из API, такого как Unsplash и отобразите их в галерее.

// 6. Blog Post Fetcher: Fetch blog posts from an API like JSONPlaceholder and display them.
// RU: Получение постов блога: Получите посты блога из API, такого как JSONPlaceholder и отобразите их.

// 7. User Profile Fetcher: Fetch user data from an API like RandomUser and display a user profile.
// RU: Получение профиля пользователя: Получите данные пользователя из API, такого как RandomUser и отобразите профиль пользователя.

// 8. Movie Search App: Fetch movie data from an API like OMDB and create a search functionality to find movies.
// RU: Приложение для поиска фильмов: Получите данные о фильмах из API, такого как OMDB и создайте функцию поиска фильмов.

// 9. GitHub User Info: Fetch user information from the GitHub API and display it.
// RU: Информация о пользователе GitHub: Получите информацию о пользователе из GitHub API и отобразите её.

// 10. Recipe Search App: Fetch recipe data from an API like Edamam and create a search functionality to find recipes.
// RU: Приложение для поиска рецептов: Получите данные о рецептах из API, такого как Edamam и создайте функцию поиска рецептов.


// The basic structure of an async/await fetch function looks like this
// RU: Базовая структура функции async/await fetch выглядит следующим образом


async function fetchData(url) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // Do something with data
    } catch (error) {
        console.error('Error:', error);
    }
}


// RU: Вам нужно заменить комментарий // Do something with data  кодом, который 
// фактически использует полученные вами данные, что будет зависеть от конкретного упражнения.
