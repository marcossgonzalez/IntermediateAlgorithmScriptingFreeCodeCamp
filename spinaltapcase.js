//-------------------------------------------------
function spinalCase(str) {
    let strCopy = str;
    let regexSpace = /\w+/;
    if (regexSpace.test(strCopy)) {
        strCopy = strCopy.split(/(?:_| )+/gi).join("-").replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
        strCopy = strCopy.split(" ").join("-")
        console.log(strCopy)
        return strCopy.split(/(?:_| )+/gi).join("-").toLowerCase();
    }
    return str;
}

spinalCase("AllThe-small Things")