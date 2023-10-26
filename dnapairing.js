//------------------------------------------------
function pairElement(str) {
    let array = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] == "C") {
            array.push(["C", "G"]);
        }
        else if (str[i] == "G") {
            array.push(["G", "C"]);
        }
        if (str[i] == "A") {
            array.push(["A", "T"]);
        }
        else if (str[i] == "T") {
            array.push(["T", "A"]);
        }
    }
    console.log(array);
    return array;
}

pairElement("CTCTA");
//------------------------------------------------