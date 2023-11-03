//---------------------------------------------------------------
function truthCheck(collection, pre) {

    //var array = JSON.stringify(collection);
    //console.log(array);
    //console.log(array.length);
    //let regex = /[a-zA-Z*](\d*)/gi;
    //array = array.match(regex);
    //console.log(array)
    //const preconditions = JSON.array.map(({ pre: title}) => ({ title}));
    for (let i = 0; i < collection.length; i++) {
        if (!collection[i][pre])
            return false;

    } return true;
}

truthCheck([{ id: 1, data: { url: "https://freecodecamp.org", name: "freeCodeCamp" } }, { id: 2, data: { url: "https://coderadio.freecodecamp.org/", name: "CodeRadio" } }, { id: null, data: {} }], "id")