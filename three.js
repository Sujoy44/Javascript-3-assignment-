function countProperties(obj) {
    return Object.keys(obj).length;
  }
  
  const myObj = { a: 1, b: 2, c: 3 };
  console.log(countProperties(myObj)); // Output: 3