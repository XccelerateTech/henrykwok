function number (n) {
  if (isNaN(n)){
    throw new Error ('Error');
  } else if (n<=0) {
    throw new Error ('Error');
  } else if (n >= 1000000) {
    return (n);
  } else {
     while (n < 1000000) {
       n *= 10;    }
    } return (n);
  } 