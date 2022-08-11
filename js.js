function getDivisorsCount(number) {
    let count = 0

    if (typeof number !== "number") {
        count = NaN
    } else if (number < 0 || !Number.isInteger(number)) {
        alert("number должен быть целым числом и больше нуля!")
    } else {
        for (let i = 1; i <= number; i += 1)
            if (number % i === 0) {
                count += 1;
            }
    }
     return console.log(count);   
}   

getDivisorsCount(30)