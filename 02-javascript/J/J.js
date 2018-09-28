function number (n) {
  if (isNaN(n)){
    throw new Error ('Error');
  } else if (n<=0) {
    throw new Error ('Error');
  } else if (n > 0 && n < 1000000) {
    for (var i=2; i < 1000000; i*10) {
      return i;
    } 
  } else if (n > 1000000) {
    return n;
  }
}