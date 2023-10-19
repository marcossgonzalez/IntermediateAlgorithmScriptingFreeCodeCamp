//-------------------------------------------
/*Se a função deve aceitar um número indeterminado de argumentos, também conhecida como 
função variável. Você pode acessar os argumentos adicionais adicionando um parâmetro rest 
à definição da função ou usando o objeto argumentos.
Por exemplo:
function sum(...argumentos)*/
//-------------------------------------------
function destroyer(...args) {
    let array = [].concat.call(args);
    let argumentMore = array.filter(array => array[0]);
    array = array.filter(array=> !array[0]);
    for (let i=0; i<argumentMore.length; i++){
      for (let j=0; j<array.length; j++){
        if (argumentMore[0][i] == array[j])
        {argumentMore[0][i].pop();
        continue;
        };
      }
    }
    
    
  
    
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);