function reverseString(str) {
    return str.split("").reverse().join("");
  }
  
  const str = "hello world";
  const reversedStr = reverseString(str);
  console.log(reversedStr); // Output: "dlrow olleh"