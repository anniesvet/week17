// Генерация случайных чисел: 

let arrOfNumbers = [];

function getRandom () {

    function getNumbers(min, max) {
        return Math.round((Math.random() * (max - min + 1)) + min);
    }
    
    while(arrOfNumbers.length<10) {
        let numbers = getNumbers(-10, 10);
        arrOfNumbers.push(numbers);
        }

    console.log("Сгенерировали:" + " " + arrOfNumbers);
    }

getRandom ();

// Максимальное значение (https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Math/max – для себя, чтобы повторить)

function getMaxOfArray(arrOfNumbers) {
    return Math.max.apply(null, arrOfNumbers);
}

console.log("Максимальное значение:" + " " + getMaxOfArray(arrOfNumbers));


// Минимальное значение:

function getMinOfArray(arrOfNumbers) {
    return Math.min.apply(null, arrOfNumbers);
}

console.log("Минимальное значение:" + " " + getMinOfArray(arrOfNumbers));

// Среднее арифметическое:

function average(arrOfNumbers) {
    
    let sum = 0;

    for(let i = 0; i < arrOfNumbers.length; i++) {
        sum += arrOfNumbers[i];
    } 
    return sum / arrOfNumbers.length;
}

console.log("Среднее значение" + " " + average(arrOfNumbers));

// Сумма чисел:

function sum(arrOfNumbers) {
    
    let sum = 0;

    for(let i = 0; i < arrOfNumbers.length; i++) {
        sum += arrOfNumbers[i];
    } 

    return sum;
}

console.log("Сумма чисел" + " " + sum(arrOfNumbers));


// Произведение чисел:

function mult(arrOfNumbers) {
    
    let mult = 1;

    for(let i = 0; i < arrOfNumbers.length; i++) {
        mult *= arrOfNumbers[i];
    } 

    return mult;
}

console.log("Произведение чисел" + " " + mult(arrOfNumbers));