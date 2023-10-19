//-------------------------------------------
/*Se a função deve aceitar um número indeterminado de argumentos, também conhecida como 
função variável. Você pode acessar os argumentos adicionais adicionando um parâmetro rest 
à definição da função ou usando o objeto argumentos.
Por exemplo:
function sum(...argumentos)*/
//-------------------------------------------
function destroyer(arr) {
    //let array = [].concat.call(args);
    let array = Array.from(arguments).slice(1);
    let argumentMore = arr.filter(arrays => !array.includes(arrays));
    //array = array.filter(array=> !array[0]);
    //console.log(argumentMore)
    //for (let i=0; i<array.length; i++){
      //for (let j=0; j<argumentMore[0].length; j++){
        //if (argumentMore[0][i] === array[i]){
          //console.log(argumentMore[0]);
          //argumentMore[0][i].pop();
          //};
     // }
    //}
    
    
  
  return argumentMore;  
  }
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
//-------------------------------------------