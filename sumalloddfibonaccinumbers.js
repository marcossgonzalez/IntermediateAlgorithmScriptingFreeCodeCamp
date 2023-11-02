//-------------------------------------------
function sumFibs(num) {
    let fib = 0;
    let number = 1;
    let counter = 0;
    while (number <= num) {
        console.log(fib);
        if (number % 2 !== 0) {
            fib += number;
        }
        number += counter;
        counter = number - counter;
    }
    return fib;
}

console.log(sumFibs(4));