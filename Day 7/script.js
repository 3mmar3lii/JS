// Cookies
function cookieJS() {
  return {
    getCookies(cookieKey) {
      if (!cookieKey) return null;
      const cookies = document.cookie.split("; ").reduce((acc, cookie) => {
        const [key, value] = cookie.split("=");
        acc[key] = value;
        return acc;
      }, {});
      return cookies[cookieKey] || null;
    },
    setCookies(cookieKey, cookieVal, expies) {
      let expiresPart = "";
      if (expies) {
        const expiresDate = new Date(expies);
        if (isNaN(expiresDate.getTime())) {
          console.warn("Invalid expiration date provided");
        } else {
          expiresPart = `; expires=${expiresDate.toUTCString()}`;
        }
      }
      document.cookie = `${cookieKey}=${cookieVal}${expiresPart}`;
    },
    deleteCookies(cookieKey) {
      document.cookie = `${cookieKey}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    },
    allCookieList() {
      return document.cookie;
    },
    deleteCookies(cookieKey) {
      document.cookie = `${cookieKey}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    },
  };
}

// greet message

//function saveCookie() {
//  let userGreetMessage = document.querySelector("input").value;
//  //console.log(userGreetMessage);

//  const { setCookies } = cookieJS();
//  setCookies("username", userGreetMessage, Date.now() + 10000);
//  document.querySelector("input").value = "";
//  //console.log("username value from cookies", getCookies("username"));
//}
let h2 = document.createElement("h2");
function displayCookie() {
  const { getCookies } = cookieJS();
  h2.textContent = getCookies("username");
  console.log(getCookies("username"));
  document.body.append(h2);
}

function deleteCookie() {
  const { deleteCookies } = cookieJS();
  deleteCookies("username");
}

function register() {
  let username = document.querySelector(".name").value;
  let age = document.querySelector(".age").value;
  const selected = document.querySelector('input[name="photo"]:checked');
  const gender = selected ? selected.value : "not selected";

  //console.log("values",username,age,gender)
  const { setCookies } = cookieJS();
  setCookies("username",username)
  setCookies("age", age);
  setCookies("gender", gender);
  displayAllInfo()
}


function displayAllInfo() {
  const { allCookieList } = cookieJS();
  console.log("all values", allCookieList().split("; ").reduce((acc, cookie) => {
    const [key, val] = cookie.split("=");
    acc[key] = val;
    console.log(acc)
    return acc;
  }))
};


// 2-Funtion Object
function test(paramgter1, paramgter2) {
  const arrLength = [].reverse.call(arguments).length;
  if (arrLength < 2 || arrLength > 2) {
    throw new Error(
      "number of parameters either less than or exceeds 2 parameters ",
    );
  }
}

//test(10, 20);
//test(10, 20, 30);
//test(10);

//function add() {
//  const arr = [].toReversed.call(arguments);
//  console.log(arr.length);
//  if (arr.length === 0) {
//    throw new Error("Function must be called with at least one number");
//  }

//  // Check each argument is a number
//  for (let i = 0; i < arr.length; i++) {
//    if (typeof arr[i] !== "number") {
//      throw new Error(
//        `Argument at position ${i + 1} is not a number. Received: ${typeof arr[
//          i
//        ]}`,
//      );
//    }
//  }

//  // Sum
//  let sum = 0;
//  for (let num of arr) {
//    sum += num;
//  }
//  return sum;
//}

////console.log(add(1, 2, 3));
//console.log(add());

//// 3
//function arrayReverse() {
//  return [...arguments].reverse();
//}

//const arrayReverse = (...args) => {
//  return args.reverse();
//};
