//-------------------------------------------
function sumAll(arr) {
    let num = 0;
    let lesser = 0;
    let array = [];
    if (arr[0] > arr[1]) {
        num = arr[0];
        lesser = arr[1];
    } else {
        num = arr[1];
        lesser = arr[0];
    }
    for (let i = lesser; i < num + 1; i++) {
        array.push(i);
    }

    array = array.reduce((sum, all) => sum + all);
    console.log(array);
    return array;
}

sumAll([5, 10])
//-------------------------------------------