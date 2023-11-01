//---------------------------------------------
function uniteUnique(...args) {
  let unite = [...args];
  let arrayRepeat = [];
  console.log(unite);
  let allArgs = [...args];
  let allArgsIndex = allArgs.length;
  console.log(allArgsIndex);


     for (let i = 0; i<unite.length; i++){
        for ( let j = 0; j < allArgs[i].length; j++){
          
          if (!arrayRepeat.includes(args[i][j])) {
        arrayRepeat.push(args[i][j]);
      }
     }}
     
  
  console.log(arrayRepeat);
    
  return arrayRepeat;
}

uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])