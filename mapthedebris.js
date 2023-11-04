//-----------------------------------------------
function orbitalPeriod(arr) {
    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    let array = arr;
    let arrayOrbitals = [];
    let twoPi = 2 * Math.PI;


    for (let orbitals in array) {
        let orbitalPeriod = Math.round(
            twoPi * Math.sqrt(Math.pow(array[orbitals].avgAlt + earthRadius, 3) / GM)
        );
        arrayOrbitals.push({ name: array[orbitals].name, orbitalPeriod: orbitalPeriod });
    }
    //if (arr.length == 1){
    //arrayOrbitals = arrayOrbitals +("[{" +"name: " + '"'+array[i].name + '"'+ ", orbitalPeriod: " + orbitalPeriod + "}]");
    //console.log(arrayOrbitals)
    //arrayOrbitals = JSON.stringify(arrayOrbitals);
    //console.log(arrayOrbitals)
    //arrayOrbitals = JSON.parse(arrayOrbitals);
    //console.log(arrayOrbitals)
    //return arrayOrbitals;
    //}
    //if (i == 0){
    //arrayOrbitals = arrayOrbitals +("[{" +"name : " + '"'+array[i].name + '"'+ ", orbitalPeriod: " + orbitalPeriod + "}, ");
    //}
    //else if (i == arr.length-2){
    // arrayOrbitals = arrayOrbitals +("{" +"name: " + '"'+array[i].name + '"'+ ", orbitalPeriod: " + orbitalPeriod + "}, ");
    //}else{
    // arrayOrbitals = arrayOrbitals +("{" +"name: " + '"'+array[i].name + '"'+ ", orbitalPeriod: " + orbitalPeriod + "}]");
    //}
    // }
    //console.log(arrayOrbitals)
    //console.log(arrayOrbitals)
    //arrayOrbitals = JSON.stringify(arrayOrbitals);
    //arrayOrbitals = JSON.parse(arrayOrbitals);
    console.log(arrayOrbitals);

    return arrayOrbitals;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);