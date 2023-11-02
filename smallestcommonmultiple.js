//----------------------------------------
function smallestCommons(arr) {
    function gcd(a, b) {
    var remainder = a % b;
  
    return (remainder === 0) ? b : gcd(b, remainder);
    }
    
  function findGCD(array,arrayLength){  
      let result = array[0];  
      for (let i = 1; i < arrayLength; i++)  
      
      {  
          result = gcd(array[i], result);  
      
          if(result == 1)  
          {  
          return 1;  
          }  
      }  
      return result;  
  }
  
  
    let arr1 = arr[0];
    let arr2 = arr[1];
    let gcdNumber = gcd(arr2,arr1);
    console.log(gcdNumber);
    var array = [];
    let biggerNumber = Math.max(arr1, arr2);
    let minNumber = Math.min(arr1, arr2);
    console.log(biggerNumber);
    for (let i = minNumber; i<=biggerNumber; i++){
      array.push(i);
      console.log(array);
    }
    let arrayLength = array.length;
    let gcdAll = 0;
    
    gcdAll = findGCD;
    console.log(gcdAll);
  
    let smallestCommon = arr[1]*arr[0]/gcdNumber
    return smallestCommon;
  }
  
  smallestCommons([1, 5])