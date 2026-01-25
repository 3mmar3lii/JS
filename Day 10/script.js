import {Car} from "./Car.js"
// Bouns
function symbolObj(obj = {}) {
  if (typeof obj !== "object") {
    throw new Error(`Type ${typeof obj} must be Object !`);
  }
  const newIterableObj = {
    ...obj,
    [Symbol.iterator]: function* () {
      for (let key in this) {
        yield [key, this[key]];
      }
    },
  };

  for (let [key, val] of newIterableObj) {
    console.log("key", key, "-", "val", val);
  }
}
const obj = {
  name: "ammar",
  age: 30,
};

symbolObj(obj);

//1
const objProxey = {
  name: "ammar",
  phone: 1011016248,
  age: 12,
};

const handler = {
  set: function (target, key, newValue) {
    if (key === "name") {
      if (
        !target[key] ||
        typeof target[key] !== "string" ||
        newValue.length > 10
      ) {
        throw "Error in format Name";
      }
      return (target[key] = newValue);
    } else if (key === "phone") {
      if (
        !target[key] ||
        typeof target[key] !== "number" ||
        newValue.match(/^\+020\d{10}$/)
      ) {
        throw "Error in format Phone";
      }
      return (target[ket] = newValue);
    } else if (key === "age") {
      if (
        !target[key] ||
        typeof target[key] !== "number" ||
        (newValue < 50 && newValue > 18)
      ) {
      }
      return (target[key] = newValue);
    }
  },
  get: function (target, newValue) {},
};
const P = new Proxy(objProxey, handler);
// +2011
// 2
const testNIDs = [
  "2024-8839-1029",
  "2024-1102-5567",
  "2024-9930-4412",
  "2024-5501-3398",
  "2024-7721-6604",
];
const S = new Set(testNIDs);
console.log("Before add repated ", S);
S.add("2024-8839-1029");
console.log("After  add repated ", S);

// print use spread operator
console.log("Speard operator ", ...S);
//console.log("Speard operator ", [...S].forEach(()));

// useing for of
for (let item of S) {
  console.log("item", item);
}

let c1 = new Car("toyota", "1m", 100);

c1.display();