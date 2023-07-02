function addition(a, b, c = 0, d = 0) {
    return a + b + c + d;
  }
  
  function subtraction(a, b, c = 0, d = 0) {
    return a - b - c - d;
  }
  
  function multiplication(a, b, c = 1, d = 1) {
    return a * b * c * d;
  }
  
  function division(a, b, c = 1, d = 1) {
    return a / b / c / d;
  }
  
  // Testing the functions
  console.log(addition(7, 5));                 // Output: 12
  console.log(addition(7, 5, 3));              // Output: 15
  console.log(addition(7, 5, 3, 1));           // Output: 16
  
  console.log(subtraction(7, 5));             // Output: 2
  console.log(subtraction(7, 5, 3));          // Output: -1
  console.log(subtraction(7, 5, 3, 1));       // Output: -2
  
  console.log(multiplication(7, 5));           // Output: 35
  console.log(multiplication(7, 5, 3));        // Output: 105
  console.log(multiplication(7, 5, 3, 1));     // Output: 105
  
  console.log(division(7, 5));                // Output: 1.4
  console.log(division(7, 5, 3));             // Output: 0.4666666666666666
  console.log(division(7, 5, 3, 1));          // Output: 0.4666666666666666