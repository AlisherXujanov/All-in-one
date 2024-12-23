// Number Guessing Game

// We will have 7 lives
// Computer will generate a random number between 1 and 100


let randomNumber = parseInt(Math.random() * 100)
let lives = 7
// Math.random()   =>    0  ->  1
// Math.random() * 100   =>    0  ->  100

alert(`
Hello! Welcome to the Number Guessing Game!     
You will have 7 lives to guess the number between 1 and 100.
`)

while (true) { // When the game is not over

    if (lives == 0) {
        alert("Game Over! You lost!")
        if (confirm("Would you like to play again?")) {
            randomNumber = parseInt(Math.random() * 100)
            lives = 7
            continue
        } else {
            alert("Goodbye!")
            break
        }
    }

    let answer = prompt("Please enter your guess: ")

    if (!isNaN(answer)) {
        // Number
        let number = parseInt(answer)  //  string -> number
        if (number > 100 || number < 0) {
            alert("Please enter a number between 1 and 100!")
            continue
        }
        else {
            if (number == randomNumber) {
                alert("Congratulations! You won!")
                if (confirm("Would you like to play again?")) {
                    randomNumber = parseInt(Math.random() * 100)
                    lives = 7
                    continue
                } else {
                    alert("Goodbye!")
                    break
                }
            } else {
                lives--
                if (number > randomNumber) {
                    alert(`Too hight! You have ${lives} lives left!`)
                } else {
                    alert(`Too low! You have ${lives} lives left!`)
                }
                continue
            }
        }
    } else {
        // not a number
        alert("Please enter a valid number!")
        continue
    }
}