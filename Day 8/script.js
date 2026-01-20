// 1
function build(obj = {}, newPassword) {
  let objName;
  let updated = false;
  if (obj && obj.name && obj.password) {
    objName = obj.name;
    updated = true;
  }
  return {
    name: objName,
    updated: updated,
    password: newPassword,
  };
}

function updatedPass(user, updatePass) {
  
  return {
    ...user,
    newpassword: updatePass,
    udpdate: true
  }
}

let user = { name: 'ahmed', password: '123' }


  let res = updatedPass(user , '7896')
console.log(res);

console.log(build({ name: "ALi", password: "466asd" }, "newPass"));

// 2
//function swap(val1, val2) {
//  const [fristValue, secondValue] = [...arguments];
//  val2 = fristValue;
//  val1 = secondValue;
//  console.log(val1);
//  console.log(val2);
//}

//swap(9, 10);


//var a = 10
//var b = 20

//var [b, a] = [a, b]
//console.log(b);


// 3
const shopOrdered = [
  "America Coffe",
  "French Coffe",
  "Tea",
  "Latte Coffe ",
  "Green Tea",
  "Mokka ",
  "Milk",
];

let notCoffe = shopOrdered.filter(ele => !ele.toLocaleLowerCase().includes("coffe") && !ele.includes('Tea') )


console.log(notCoffe);



var coffeLength = 0;
var notCoffeOrTea = 0;
const orderedOfShopHaveCoffe = shopOrdered.map((order) => {
  if (order.includes("Coffe")) {
    coffeLength++;
  }
  if (!order.includes("Coffe") && !order.includes("Tea")) {
    notCoffeOrTea++;
  }
});

console.log("coffeLengthHave", coffeLength);
console.log("coffeLengthNotHave", orderedOfShopHaveCoffe.length - coffeLength);
console.log("coffeLengthNotHave", orderedOfShopHaveCoffe.length - coffeLength);
console.log("not tea or coffec ", notCoffeOrTea);

function coffeStartWith() {
  console.log(orderedOfShopHaveCoffe);
  return shopOrdered.map((el) => "⭐ " + el);
}
console.log(coffeStartWith());

shopOrdered.forEach((el) => console.log("New Stat" + el));

console.log(
  "IS String useing some",
  shopOrdered.map((el) => el).some((el) => typeof el === "string"),
);
console.log(
  "IS String useing every",
  shopOrdered.map((el) => el).every((el) => typeof el === "string"),
);

// 4

const students = [
  { name: "Ahmed", grade: 150 },
  { name: "Ammar", grade: 100 },
  { name: "Soha", grade: 120 },
  { name: "Mohammed", grade: 75 },
  { name: "Menna", grade:150 },
];

const gradeMoreThan100 = students.filter((el) => {
  return el.grade >= 100;
});
console.log("gradeMoreThan100", gradeMoreThan100);

const startWithS = students.filter((el) => {
  return el.name.toLocaleLowerCase().startsWith("S".toLocaleLowerCase())
}).length;
console.log("startWithS", startWithS);

const studentHaveFullMark = students
  .filter((el) => {
    return el.grade === 150;
  })
  .sort((a, b) => {
    return a - b;
  });


console.log("studentHaveFullMark", studentHaveFullMark);
  

function isJsFile(jsFile) {
  return jsFile.endsWith(".js") || jsFile.endsWith(".jsx");
}
console.log(isJsFile("heelo/why.ts"));
console.log(isJsFile("heelo/why.jsx"));
console.log(isJsFile("heelo/why.js"));
isJsFile("heelo/why.ts"); // false
isJsFile("heelo/why.jsx") // true
isJsFile("heelo/why.js") // true