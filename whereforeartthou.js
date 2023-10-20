//-------------------------------------------
function whatIsInAName(collection, source) {
    let array = Object.keys(source);
    return collection.filter(object => array.every(key => object[key] === source[key]));
}

whatIsInAName([{ "apple": 1, "bat": 2 }, { "apple": 1 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "cookie": 2 });
//-------------------------------------------
