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

 //2 && 3
const genderSelect = document.querySelector(".gender-select");
const nameInput = document.querySelector(".name-input");
const greetingMessage = document.getElementById("greeting-message");
let password = document.getElementById("user-password");
const showPasswordElment = document.querySelector(".show-pass");

function Greeting() {
  const gender = genderSelect.value;
  const name = nameInput.value.trim();

  if (gender && name) {
    const prefix = gender === "male" ? "Mr." : "Ms.";
    greetingMessage.textContent = `Your Name: ${prefix} ${name}`;
  } else {
    greetingMessage.textContent = "";
  }
}

function handleShowPassword() {
  if (showPasswordElment.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

genderSelect.addEventListener("change", Greeting);
nameInput.addEventListener("input", Greeting);
showPasswordElment.addEventListener("click", handleShowPassword);

// 4
  const arrPhotos = ["", "one.png", "two.png", "three.png", "four.png"];
  let currentIndex = 1;
  const totalImages = arrPhotos.length - 1;

  const imgBox = document.querySelector(".img-box");
  const prevBtn = document.querySelector(".left");
  const nextBtn = document.querySelector(".right");
  const pointsContainer = document.getElementById("points");

  function updateGallery(index) {
    if (index < 1 || index > totalImages) return;
    
    currentIndex = index;
    imgBox.src = arrPhotos[index];

    document.querySelectorAll("#points span").forEach((span, i) => {
      span.classList.toggle("active", i + 1 === index);
    });
  }

  // Go to specific photo
  function handleGoToSpecificPhoto(spanNumber) {
    updateGallery(spanNumber);
    resetSlideshow();
  }

  // Event delegation for dots
  pointsContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "SPAN") {
      const num = parseInt(e.target.textContent, 10);
      handleGoToSpecificPhoto(num);
    }
  });

  // Navigation
  prevBtn.addEventListener("click", () => {
    if (currentIndex > 1) updateGallery(currentIndex - 1);
  });

  nextBtn.addEventListener("click", () => {
    if (currentIndex < totalImages) updateGallery(currentIndex + 1);
  });

  let slideshowInterval;

  function startSlideshow() {
    slideshowInterval = setInterval(() => {
      if (currentIndex < totalImages) {
        updateGallery(currentIndex + 1);
      } else {
        updateGallery(1); 
      }
    }, 2000);
  }

  function resetSlideshow() {
    clearInterval(slideshowInterval);
    startSlideshow();
  }

startSlideshow();
  

// 5

const targetParagraph = document.getElementById('targetParagraph');
function applyStyle() {


    const fontFamily = getSelectedValue('fontFamily');
    const textAlign = getSelectedValue('textAlign');
    const lineHeight = getSelectedValue('lineHeight');
    const letterSpacing = getSelectedValue('letterSpacing');
    const textIndent = getSelectedValue('textIndent');
    const textTransform = getSelectedValue('textTransform');
    const textDecoration = getSelectedValue('textDecoration');

    targetParagraph.style.fontFamily = fontFamily;
    targetParagraph.style.textAlign = textAlign;
    targetParagraph.style.lineHeight = lineHeight;
    targetParagraph.style.letterSpacing = letterSpacing;
    targetParagraph.style.textIndent = textIndent;
    targetParagraph.style.textTransform = textTransform;
    targetParagraph.style.textDecoration = textDecoration;
}

function getSelectedValue(name) {
    const radios = document.querySelectorAll(`input[name="${name}"]`);
  for (let radio of radios) {
      console.log("the radio all is",radio)
    if (radio.checked) {
          console.log("selectedddddddd",radio)
          console.log("selectedddddddd",radio.value)
            return radio.value;
        }
    }
    return '';
}

document.addEventListener('DOMContentLoaded', function () {
    const allRadios = document.querySelectorAll('input[type="radio"]');
    allRadios.forEach(radio => {
        radio.addEventListener("click", applyStyle);
    });

    applyStyle();
});