function printStars(num) {
    let symbol = 1// для символа 
    let numprobel = num // для пробела 
    let res = "l".repeat(num)// это дает действию циклу 

    res.split("").forEach(() => {// для работы цыкла
        console.log(" ".repeat(numprobel) + "*".repeat(symbol)) // Выполнение кода 
        symbol += 2
        numprobel -= 1
    });
}

printStars(10);