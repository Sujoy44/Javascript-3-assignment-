function hasProperty(obj, prop) {
    return obj.hasOwnProperty(prop);
  }
  
  const myObj = { name: "John", age: 25 };
  console.log(hasProperty(myObj, "name")); // Output: true
  console.log(hasProperty(myObj, "city")); // Output: false