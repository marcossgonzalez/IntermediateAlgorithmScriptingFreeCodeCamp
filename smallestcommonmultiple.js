//----------------------------------------
function smallestCommons(arr) {
    function gcd(a, b) {
        var remainder = a % b;

        return (remainder === 0) ? b : gcd(b, remainder);
    }

    let arr1 = arr[0];
    let arr2 = arr[1];
    let gcdNumber = gcd(arr2, arr1);
    console.log(gcdNumber);
    let array = [];
    let biggerNumber = Math.max(arr1, arr2);
    let minNumber = Math.min(arr1, arr2);
    console.log(biggerNumber);
    for (let i = minNumber; i <= biggerNumber; i++) {
        array.push(i);
        console.log(array);
    }

    let lcm = (a, b) => a * b / gcd(a, b);
    return array.reduce((multiple, curr) => lcm(multiple, curr));
}

smallestCommons([1, 5])
