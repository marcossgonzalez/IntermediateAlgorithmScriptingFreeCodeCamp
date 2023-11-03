//--------------------------------------------
function addTogether() {
    let [a, b] = arguments;
    if (typeof (a) !== "number") {
        return undefined;
    } else if (arguments.length === 1) {
        function add(b) {
            if (typeof (b) !== "number") {
                return undefined;
            }
            else { return a + b; }
        }
        return add;
    }
    else if (typeof b !== "number") {
        return undefined;

    } else {
        return a + b;
    }

}

addTogether(2, 3)