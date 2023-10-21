//-------------------------------------------------
function spinalCase(str) {
    let strCopy = str;
    let regexSpace = /\w+/g;
    if (regexSpace.test(strCopy)) {
        console.log(strCopy.split(/[^a-zA-Z]/g).join("-").toLowerCase());
        return strCopy.split(/[^a-zA-Z]/g).join("-").toLowerCase();
    }
    return str;
}

spinalCase("The_Andy_Griffith_Show")