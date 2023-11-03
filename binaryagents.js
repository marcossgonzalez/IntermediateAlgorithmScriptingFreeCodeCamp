//-------------------------------------------------
function binaryAgent(str) {
    let string = str;
    let binaryString = '';
    let array = [];
    for (let i = 0; i < string.length; i++) {
        if (string[i] != " ") {
            console.log(string[i])
            binaryString += string[i];
            if (binaryString.length % 8 == 0) {
                let letter = parseInt(binaryString, 2);
                console.log(letter);
                binaryString = '';
                array.push(String.fromCharCode(letter));
            }
        }
    } console.log(array.join(''));
    return array.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");