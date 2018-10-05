function reverse (num) {
  var arr = (num);
  var newarr = arr.toString();
  var newString = newarr.split("");
  var revString = newString.reverse ("");
  var newNum = "";
  for (i = 0; i < revString.length ; i++) {
    newNum += parseInt(revString[i]);
  } 
  return newNum;
 
}

reverse (12345);