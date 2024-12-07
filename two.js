const student = {
    name: "Alice Johnson",
    age: 15,
    grade: "A"
  };
  
  function updateGrade(student, newGrade) {
    student.grade = newGrade;
  }
  
  updateGrade(student, "B+");
  console.log(student); // Output: { name: 'Alice Johnson', age: 15, grade: 'B+' }