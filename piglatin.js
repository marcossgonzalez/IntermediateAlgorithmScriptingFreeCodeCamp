//------------------------------------------------
function translatePigLatin(str) {
    let strCopy = str;
    let strCopyArray = Array.from(strCopy);
    let noVowels = /[^aeiou]/;
    let regexVowel = /^[a|e|i|o|u]/i;
    let regexConsonant = /([b-df-hj-np-tv-z])/i;
    let newWord = '';
    let wordFinal = '';
    if (regexVowel.test(strCopy)){
      wordFinal = strCopy.concat("way");  
      return wordFinal;
    }
    else{
      for (let i = 0; i < strCopyArray.length; i++){
        if (regexConsonant.test(strCopyArray)){
          let shifted = strCopyArray.shift(strCopyArray[i]);
          newWord = newWord+(shifted);
          console.log(strCopyArray);
            if(regexVowel.test(strCopyArray)){
            strCopyArray = strCopyArray.join('');
            console.log(strCopyArray)
            wordFinal = strCopyArray.concat(newWord.concat("ay"));
            console.log(wordFinal);
            return wordFinal;
               
         }
        }
      }
  }
  if (noVowels.test(strCopy)){
      return str.concat("ay");
    }
  }
  
  translatePigLatin("rhythm")
//------------------------------------------------