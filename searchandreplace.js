//------------------------------------------------
function myReplace(str, before, after) {
    let copyStr = str;
    let beforeCopy = before;
    let afterCopy = after;
    let regexUpper = /(?=.*[A-Z])/;
    let regexDown = /(?=.*[a-z])/;
    let checkIndex = copyStr.indexOf(beforeCopy);
    console.log(regexUpper.test(copyStr[checkIndex]));
    if (regexUpper.test(copyStr[checkIndex])){
      let indexAfter = afterCopy[afterCopy.indexOf(afterCopy)];
      indexAfter = indexAfter.toUpperCase();
      afterCopy = indexAfter.concat(afterCopy.substring(1));
      console.log(indexAfter);
      copyStr = copyStr.replace(beforeCopy, afterCopy);
      console.log(copyStr);
    }
    if (regexDown.test(copyStr[checkIndex])){
      let indexAfter = afterCopy[afterCopy.indexOf(afterCopy)];
      indexAfter = indexAfter.toLowerCase();
      afterCopy = indexAfter.concat(afterCopy.substring(1));
      console.log(indexAfter);
      copyStr = copyStr.replace(beforeCopy, afterCopy);
      console.log(copyStr);
    }
    copyStr = copyStr.replace(before, after);
    console.log(copyStr);
    
  
    return copyStr;
  }
  
  myReplace("I think we should look up there", "up", "Down")
//------------------------------------------------