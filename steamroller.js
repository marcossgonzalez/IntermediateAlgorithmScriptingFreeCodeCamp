//---------------------------------------------
function steamrollArray(arr) {
    let flattened = [];
    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            flattened.push(...steamrollArray(arr[i]));
        } else {
            flattened.push(arr[i]);
        }
    }

    console.log(flattened);
    return flattened;
}

steamrollArray([1, {}, [3, [[4]]]]);