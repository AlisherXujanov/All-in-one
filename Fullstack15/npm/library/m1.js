function sum_up(a, b) {
    return a + b
}

export default sum_up
// export { sum_up, ... }

// -------------------------
// -------------------------
// In another module  ->  we must import the function
// RU: В другом модуле -> мы должны импортировать функцию


// import sum_up from './имя-файла.js'      ->  export default
// import ... from './имя-файла.js'      ->  export default


// import { sum_up as sum, ... } from './имя-файла.js'  ->  export { sum_up

