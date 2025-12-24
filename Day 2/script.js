////Task 1
//const randomArray = [
//  "Ammar1",
//  "Ammar2",
//  "Ammar3",
//  "Ammar4",
//  "Ammar5",
//  "Ammar6",
//  "Ammar7",
//  "Ammar8",
//  "Ammar9",
//  "Ammar10",
//];
//const randomIndex = Math.round(Math.random() * randomArray.length - 1);
//document.writeln(`<h1>${randomArray[randomIndex]}</h1>`);

////document.open();
////document.writeln(`<h1>${randomArray[randomIndex]}</h1>`);
////document.close();

////Task 2
//const email = prompt("Enter Your Email ?");
//function checkEmail() {
//  if (!email) {
//    return false;
//  }
//  const atIndex = email.indexOf("@");

//  return atIndex > 0 && atIndex < email.length - 1;
//}
//console.log(checkEmail());

////Task 3
//const grades = [60, 100, 10, 15, 85];
//const sortedGrades = grades.sort((a, b) => {
//  return b - a;
//});
//const targetGrades = sortedGrades.find((grade) => {
//  return grade <= 100 ? grade : "";
//});
//const gradesBelow60 = grades.filter((grade) => {
//  return grade < 60;
//});
//console.log("sorted array", sortedGrades);
//console.log("grades less than", targetGrades);
//console.log("gradesBelow60", gradesBelow60);

////Task 4
//const studentInfo = [
//  {
//    name: "Ammar",
//    degree: 100,
//  },
//  {
//    name: "Ali",
//    degree: 80,
//  },
//  {
//    name: "Abod",
//    degree: 60,
//  },
//  {
//    name: "Mohmaed",
//    degree: 10,
//  },
//  {
//    name: "Ibrahim",
//    degree: 30,
//  },
//];

//const sortedChar = studentInfo.toSorted((studentObjA, studentObjB) => {
//  return studentObjA.name.localeCompare(studentObjB.name);
//});

//console.log(sortedChar);

//const targetStudentBetween90And100 = studentInfo.find((student) => {
//  return student.degree <= 100 && student.degree >= 90;
//})?.name;
//console.log(targetStudentBetween90And100);

//const studentsLessThan60 = studentInfo
//  .filter((student) => {
//    return student.degree < 60 ? student.name : "";
//  })
//  .map((studentNames) => {
//    return studentNames.name;
//  });

//console.log("studentsLessThan60", studentsLessThan60);

//const newAddedStudent = studentInfo.push({
//  name: "newStudent",
//  degree: 80,
//});

//const removedStudent = studentInfo.pop();
//for (const student in studentInfo) {
//  console.log("Printed Student", studentInfo[student]);
//}
//console.log("---------------");

//console.log("values", studentInfo);

//const twoStudent = [
//  { name: "Added 1", degree: 10 },
//  { name: "Added 1", degree: 10 },
//];
//const addedNewStudent = studentInfo.toSpliced(2, 0, ...twoStudent);
//const removedAfterThird = studentInfo.toSpliced(3, 1);
//console.log("Final ", addedNewStudent);
//console.log("removed", removedAfterThird);

const dateInput = prompt("Enter the birthday (dd-mm-yyyy):");

if (dateInput) {
  function convertDate(dateStr) {
    const parts = dateStr.split("-");
    if (parts.length !== 3) {
      prompt("Invalid format. Use dd-mm-yyyy.");
      return;
    }

    const dd = parts[0];
    const mm = parts[1];
    const yyyy = parts[2];

    if (dd.length !== 2 || mm.length !== 2 || yyyy.length !== 4) {
      console.log(
        "Invalid format. Day and month must be 2 digits, year must be 4 digits."
      );
      return;
    }
    const day = parseInt(dd, 10);
    const month = parseInt(mm, 10);
    const year = parseInt(yyyy, 10);

    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      console.log("Invalid input. Please enter numbers only.");
      return;
    }

    // Validate with Date
    const testDate = new Date(year, month - 1, day);
    if (
      testDate.getDate() !== day ||
      testDate.getMonth() + 1 !== month ||
      testDate.getFullYear() !== year
    ) {
      console.log("Invalid date. Please enter a real date.");
      return;
    }
    console.log("Day:", day);
    console.log("Month:", month);
    console.log("Year:", year);
  }
  convertDate(dateInput);
}
