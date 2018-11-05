function calculator (operator, a, b) {
    switch (operator) {
      case "+":
      return a +b; 
      break;
  
      case "-":
      return a-b;
      break; 
  
      case "*":
      return a*b;
      break;
  
      case "/":
      return a/b;
      break;
    }
  }
  
  calculator ("+", 5, 9);
  calculator ("-", 7, 3);
  calculator ("*", 5, 5);
  calculator ("/", 9, 3);