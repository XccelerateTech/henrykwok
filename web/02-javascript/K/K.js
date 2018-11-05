var key = {
  "6":"a",
  "1":"b",
  "7":"d",
  "4":"e",
  "3":"i",
  "2":"l",
  "9":"m",
  "8":"n",
  "0":"o",
  "5":"t"
}

function maya (number) {
  if (number < 100 || number > 999999) {
    throw new Error ("Invalid number");
  } 

  var numberString = number.toString ();
  var result = "";

  for (var numberChar of numberString) {
    result += key[numberChar];
  } 
  return result;
}

/* function decodeMaya (numparam) {

  var decode = {
      "6":"a",
      "1":"b",
      "7":"d",
      "4":"e",
      "3":"i",
      "2":"l",
      "9":"m",
      "8":"n",
      "0":"o",
      "5":"t"
  }

   var mystr = String(numparam);
   var my word = "";
   var myArr = mystr.split("");
   for (let word of myArr) {
     myword = myword + Decode[word];
   }
    console.log ()
  }
*/
