//--------------------------------------------------
function dropElements(arr, func) {
    let array = arr;
    console.log(array);
    
    return arr;
  }
  
  dropElements([1, 2, 3], function(n) {return n < 3; });