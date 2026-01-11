// 1
//const el = document.querySelector(".auto-increase");
//  el.style.transition = "width 1s ease";

//const origianlWidth = getComputedStyle(el).width;
//el.addEventListener("focus", function () {
//  el.style.width = "400px";
//});
//el.addEventListener("blur", function () {
//  console.log("Back to original width");
//  el.style.width = origianlWidth;
//});

// 2 && 3
//const genderSelect = document.querySelector(".gender-select");
//const nameInput = document.querySelector(".name-input");
//const greetingMessage = document.getElementById("greeting-message");
//let password = document.getElementById("user-password");
//const showPasswordElment = document.querySelector(".show-pass");

//function Greeting() {
//  const gender = genderSelect.value;
//  const name = nameInput.value.trim();

//  if (gender && name) {
//    const prefix = gender === "male" ? "Mr." : "Ms.";
//    greetingMessage.textContent = `Your Name: ${prefix} ${name}`;
//  } else {
//    greetingMessage.textContent = "";
//  }
//}

//function handleShowPassword() {
//  if (showPasswordElment.checked) {
//    password.type = "text";
//  } else {
//    password.type = "password";
//  }
//}

//genderSelect.addEventListener("change", Greeting);
//nameInput.addEventListener("input", Greeting);
//showPasswordElment.addEventListener("click", handleShowPassword);

// 4
const arrPhotos = ["", "one.png", "two.png", "three.png", "four.png"];
const targetPhoto = document.querySelector(".img-box");
document.getElementById("points").addEventListener("click", function (e) {
  console.log("Hited", +e.target.textContent);
  handleGoToSpacifPhoto(+e.target.textContent);
});
function handleGoToSpacifPhoto(spanNumber) {
  console.log("values recived ", targetPhoto);
  console.log(targetPhoto.setAttribute("src",arrPhotos[spanNumber]))
  
}
