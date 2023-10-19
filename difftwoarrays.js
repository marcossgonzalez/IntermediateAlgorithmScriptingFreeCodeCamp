//-------------------------------------------
function diffArray(arr1, arr2) {
    let big;
    let small;
    if (arr1.length > arr2.length) {
        big = [...arr1];
        small = [...arr2];
    } else if (arr1.length < arr2.length) {
        big = [...arr2];
        small = [...arr1];
    }

    if (arr1.length != arr2.length) {
        if (arr1.some(words => arr2.indexOf(words) >= 0) == false) {
            let newArray = arr1.concat(arr2);
            console.log(newArray);
            return newArray;

        }
        const newArr = big.filter((words) => !small.includes(words))
        console.log(newArr);
        return newArr;
    }
    else if (arr1.length == arr2.length) {
        let newArr = arr1.filter((words) => !arr2.includes(words))
        let newArr2 = arr2.filter((words) => !arr1.includes(words))
        newArr = newArr.concat(newArr2);
        console.log(newArr);
        return newArr;
    }
}

diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
//-------------------------------------------