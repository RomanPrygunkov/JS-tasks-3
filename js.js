function getDivisorsCount (number) {
    let division = 0  
    let count = 0

    if (typeof number !== "number") {
        count = NaN
    } else if (number < 0 || !Number.isInteger(number)) {
        alert ("number должен быть целым числом и больше нуля!")
    } else {

    for (let i = 1; i <= number; i += 1) {
        division = number / i
       
        if (Number.isInteger(division)) {
            count +=1;
        }
        }
        }
    return console.log(count);
}

getDivisorsCount(12)