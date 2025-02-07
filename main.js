function game() {
    let lives = 5
    let random_number = parseInt(Math.random() * 100);
    let pool = []

    while (true) {
        // запуск бесконечного цикла
        if (lives === 0) {
            alert("Game over")

            if (confirm("Хотите сыграть еще?")) {
                random_number = parseInt(Math.random() * 100)
                lives = 5
                pool = []
                continue
            } else {
                break
            }
        }
        let answer = prompt("Угадайте число от 1 до 100");

        answer = parseInt(answer);
        if (!isNaN(answer)) {
            if (0 < answer && answer < 100) {
                if (pool.includes(answer)) {
                    alert("Вы уже вводили это число")
                    continue
                } else {
                    pool.push(answer)
                }

                if (answer == random_number) {
                    alert("Поздравляю, вы угадали число ✅");
                    if (confirm("Хотите сыграть еще?")) {
                        random_number = parseInt(Math.random() * 100)
                        lives = 5
                        pool = []
                        continue;
                    } else {
                        break;
                    }
                } else {
                    lives--
                    if (answer > random_number) {
                        alert("Меньше, осталось жизней: " + lives);
                    } else {
                        alert("Больше, осталось жизней: " + lives);
                    }
                }
            } else {
                alert("Введите число от 1 до 100!!!");
                continue;
            }
        }
        else {
            alert("Введите число!");
            continue;
        }
    }
}



game()