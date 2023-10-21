//-------------------------------------------------
function spinalCase(str) {
    let strCopy = str;
    let regexSpace = /\w+/gi;
    if (regexSpace.test(strCopy)){
      console.log(strCopy.split(/[^a-zA-Z]/gi).join("-").toLowerCase());
      return strCopy.split(/[^a-zA-Z]/gi).join("-").toLowerCase();
    }
    return str;
  }
  
spinalCase("The_Andy_Griffith_Show")