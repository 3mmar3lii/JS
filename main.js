// Task 1
//const enable = confirm("Welcome to my site");
//let yourName = prompt("Enter your name ?");
//if (enable) {
//  if (yourName != null) {
//    if (yourName && yourName != "" && isNaN(yourName)) {
//    document.writeln("Welcome " + yourName);
//  }
//  }
//}

// Task 2

//function sum(num1, num2) {
//  if (!num1 || !num2) {
//    return 0;
//  }
//  return num2 + num1;
//}

//console.log(sum(6, 2));

// Task 3

//const val = 3;
//let reuslt = val <= 0 ? true : false;
//console.log(reuslt);

//function check(val) {
//  return val <= 0 ? true : false;
//}

//console.log(check(-2))
//console.log(check(5))
//console.log(check(0))

// Task 4
//const msg = prompt("Enter day ?");
//if (msg) {
//  switch (msg) {
//    case "Fri": case "Thur":
//      alert("Its holiday");
//      break;
//    case "Sat": case "Sun" :case "Mon" :case "Tue" :case "Wen":
//      alert("Time to go work !");
//      break;
//    default:
//      alert("Invalid day");
//  }
//}

//Task 4
//function area(w, h) {
//  return (h * w) / 2;
//}

//console.log(area(3, 2));
//console.log(area(7, 4));

/////////////

//Bonus

//for (let i = 1; i < 7; i++){
//  document.writeln(`<h${i}>Welocme to my page</h${i}>`)
//}

// XSS => inject js code in input
// Solve ? 1- Always check in front end and backend
// 2- use library like xx-clean

// ES6
// let / const
// arrow functinon
// () => {}
// Defult paramter like in sum i can make num = 1 , num2=3
// `` that i use in h1 to h6
// classes

// typescript  super type || is just javascript but added types
// to prevent errors in productions and
// assign values from diff types accidenlty
// used to find errors early

//const Name = prompt("Name");
//const age = prompt("age");
//const bith = prompt("bith");

//document.querySelector(
//  ".tableDiv"
//).innerHTML = `<table style='border: 1px solid black; border-collapse: collapse';>
//    <tr >
//    <th style="border: 1px solid black; padding: 10px;">Name </th>
//    <th style="border: 1px solid black; padding: 10px;">${Name}</th>
//    </tr>
//    <tr>
//    <th style="border: 1px solid black; padding: 10px;">BirthDay</th>
//    <th style="border: 1px solid black; padding: 10px;">${bith}</th>
//    </tr>
//    <tr>
//    <th style="border: 1px solid black; padding: 10px;">Age</th>
//    <th style="border: 1px solid black; padding: 10px;">${age}</th>
//    </tr>
//    </table>
//    `;


// Last task bouns 
function handleSaveSkill() {
  // Get the input value
  let valToAddToSkill = document.querySelector(".input-skill").value;
    if (valToAddToSkill.trim() === "") {
    alert("Please enter a skill!");
    return;
  }
  
  let parent = document.querySelector(".skills-container");
  
  let skillTag = document.createElement("span");
  skillTag.className = "skill-tag";
  
  skillTag.innerHTML = `${valToAddToSkill} <span class="delete-btn" onclick="deleteSkill(this)">×</span>`;
  
  parent.appendChild(skillTag);
  
  document.querySelector(".input-skill").value = "";
  
  console.log("Skill added:", valToAddToSkill);
}

function deleteSkill(element) {
  element.parentElement.remove();
}
