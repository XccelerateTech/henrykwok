function processArray(arr, callback) {
    const output = [];
    arr.forEach(function(e){
      callback(e);;
      output.push(callback(e))
    });
    console.log(output);
    return output;
};



var myArray = [4, 8, 2, 7, 5];
processArray(myArray, function(a) {
    return a * 2;
});
// [ 8, 16, 4, 14, 10 ]

var myArray1 = [7, 8, 9, 1, 2];
processArray(myArray1, function (a) {
    return a + 5;
});
// [ 12, 13, 14, 6, 7 ]