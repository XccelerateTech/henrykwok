var transLetter = [
  "j","a","b","c","d","e","f","g","h","i"
];

function transform (num) {
  var num1 = num.toString ();
  console.log (num1);

  var num1splited = num1.split("");
  console.log (num1splited);

  var num1sort = num1splited.sort();
  console.log (num1sort);

  var newWord = num1sort.reduce(function(acc, elements) {
      acc.push(transLetter[elements]);
      return acc
  },[]);

  var actualWord = newWord.join("");
  return actualWord;
}

transform (213);