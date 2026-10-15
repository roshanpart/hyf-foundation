const class07Students = [];
function addStudentToClass(studentName) {
    if (studentName === "") {
        console.log("Empty name can not be included.");
        return;
    }

else if (class07Students.includes(studentName)) {
    console.log(`Student ${studentName} is already in the class`);
}
  else if (class07Students.length === 6 && studentName !== "Queen") {
    console.log("Cannot add more students to class 07");
  } else {class07Students.push(studentName);
  }




}

addStudentToClass("Petrick");
addStudentToClass("Antonio");
addStudentToClass("Roberto");
addStudentToClass("Sophie");
addStudentToClass("Michael");
addStudentToClass("Louise");
addStudentToClass("Queen");
addStudentToClass("Sophie");

  console.log(class07Students);




  function getNumberOfStudents() {
  return class07Students.length;
}
console.log(getNumberOfStudents());