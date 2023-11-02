//--------------------------------------------
function convertHTML(str) {
    let regex = /(\w*\W\w*)/gi;
    //let character = str.match(regex).join("");
    let character = str.split("")
    for (let i = 0; i < character.length; i++) {
        switch (character[i]) {
            case '"':
                character[i] = "&quot;";
                break;
            case "&":
                character[i] = "&amp;";
                break;
            case "<":
                character[i] = "&lt;";
                break;
            case ">":
                character[i] = "&gt;";
                break;
            case "'":
                character[i] = "&apos;";
                break;
        }
    }
    character = character.join("")
    return character;
}

convertHTML('Stuff in "quotation marks"')