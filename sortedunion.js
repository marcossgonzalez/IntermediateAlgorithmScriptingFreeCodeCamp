//---------------------------------------------
function uniteUnique(arr, arr2, arr3) {
  let unite = arr.concat(arr2).concat(arr3);
  let arrayRepeat = [];
  let arrayFinal = [];
  console.log(unite);
  for (let i = 0; i< unite.length; i++){
    let k = 1;
    {arrayRepeat.push(unite[i]);
    console.log(arrayRepeat[0])
    for (let j = k; i< unite.length; j++){
      if (arrayRepeat[i] == unite[j]){
        
      }
    }
  }
  return arrayRepeat;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);