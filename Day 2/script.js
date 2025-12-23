//Task 1
const randomArray = [
  "Ammar1",
  "Ammar2",
  "Ammar3",
  "Ammar4",
  "Ammar5",
  "Ammar6",
  "Ammar7",
  "Ammar8",
  "Ammar9",
  "Ammar10",
];
const randomIndex = Math.round(Math.random() * randomArray.length - 1);
document.writeln(`<h1>${randomArray[randomIndex]}</h1>`);

//document.open();
//document.writeln(`<h1>${randomArray[randomIndex]}</h1>`);
//document.close();

//Task 2
const email = prompt("Enter Your Email ?");
function checkEmail() {
  if (!email) {
    return false;
  }
  const atIndex = email.indexOf("@");

  return atIndex > 0 && atIndex < email.length - 1;
}
console.log(checkEmail());

//Task 3
const grades = [60, 100, 10, 15, 85];
const sortedGrades = grades.sort((a, b) => {
  return b - a;
});
const targetGrades = sortedGrades.find((grade) => {
  return grade <= 100 ? grade : "";
});
const gradesBelow60 = grades.filter((grade) => {
  return grade < 60;
})
console.log("sorted array", sortedGrades);
console.log("grades less than", targetGrades);
console.log("gradesBelow60", gradesBelow60);

//Task 4
const studentInfo = [
  {
    name: "Ammar",
    degree: 100,
  },
  {
    name: "Ali",
    degree: 80,
  },
  {
    name: "Abod",
    degree: 60,
  },
  {
    name: "Mohmaed",
    degree: 10,
  },
  {
    name: "Ibrahim",
    degree: 30,
  },
];

const sortedChar = studentInfo.toSorted((studentObjA, studentObjB) => {
  return studentObjA.name.localeCompare(studentObjB.name);
});

console.log(sortedChar);

const targetStudentBetween90And100 = stuentInfo.find((student) => {
  return student.degree <= 100 ? student.name : "";
}).name;
console.log(targetStudentBetween90And100);

const studentsLessThan60 = studentInfo
  .filter((student) => {
    return student.degree < 60 ? student.name : "";
  })
  .map((studentNames) => {
    return studentNames.name;
  });

console.log("studentsLessThan60", studentsLessThan60);

const newAddedStudent = studentInfo.push({
  name: "newStudent",
  degree: 80,
});

const removedStudent = studentInfo.pop();
for (const student in studentInfo) {
  console.log("Printed Student", studentInfo[student]);
}
console.log("---------------");

console.log("values", studentInfo);

const twoStudent = [
  { name: "Added 1", degree: 10 },
  { name: "Added 1", degree: 10 },
];
const addedNewStudent = studentInfo.toSpliced(2, 0, ...twoStudent);
const removedAfterThird = studentInfo.toSpliced(3, 1,);
console.log("Final ", addedNewStudent);
console.log("removed", removedAfterThird);

const date = prompt("Enter the birthdary ?");

function convertDate() {
  const dd = date.split("-")[0];
  const mm = date.split("-")[1];
  const yy = date.split("-")[2];
  console.log(dd)
  console.log(mm)
  console.log(yy)
  if (date.length > 10 && 1) {

  }
}

convertDate()
