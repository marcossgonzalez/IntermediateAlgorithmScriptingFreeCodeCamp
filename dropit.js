//--------------------------------------------------
function dropElements(arr, func) {
    let array = arr;
    let result = func;
    let arrayFinal = [];
    for (let i = 0; i<array.length; i++){
      if(result(array[i])){
        while(i<array.length){
        arrayFinal.push(array[i]);
        i++;}
        
      }
    }
    console.log(array);
  
    return arrayFinal;
  }
  
  dropElements([0, 1, 0, 1], function(n) {return n === 1;})