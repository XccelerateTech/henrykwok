var marks = [89,90,71,75,67,55,40,68]

var totalmarks = marks.reduce (function (sum, currentValue){
  return sum + currentValue
},);

var averageMarks = Math.floor (totalmarks/marks.length);
console.log(averageMarks);