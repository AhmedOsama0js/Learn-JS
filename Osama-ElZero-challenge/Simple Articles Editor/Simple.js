// const fonts = document.getElementById("fonts");
// const bold = document.querySelector(".bold");
// const n = document.querySelector(".n");
// const p = document.querySelector(".p");
// const fontNum = document.querySelector(".font-num");
// const color = document.querySelector(".color");
// const coun = document.querySelector(".coun");

// bold.addEventListener("click", () => {
//   coun.classList.toggle("bold-text");
// });

// color.addEventListener("click", () => {
//   coun.classList.toggle("black-white");
// });

// fonts.addEventListener("change", () => {
//   coun.style.fontFamily = fonts.value;
// });

// let fontSize = 16;

// n.addEventListener("click", () => {
//   if (fontSize > 12) {
//     fontSize--;
//     fontNum.innerHTML = fontSize;
//     coun.style.fontSize = `${fontSize}px`;
//   }
//   n.style.opacity = fontSize <= 12 ? "50%" : "100%";
// });

// p.addEventListener("click", () => {
//   if (fontSize < 22) {
//     fontSize++;
//     fontNum.innerHTML = fontSize;
//     coun.style.fontSize = `${fontSize}px`;
//   }
//   p.style.opacity = fontSize >=22 ? "50%" : "100%";
// });

const fonts = document.getElementById("fonts");
const bold = document.querySelector(".bold");
const n = document.querySelector(".n");
const p = document.querySelector(".p");
const fontNum = document.querySelector(".font-num");
const color = document.querySelector(".color");
const coun = document.querySelector(".coun");

// تعيين قيم افتراضية
let fontSize = 16;
let isBold = false;
let isBlackWhite = false;
let fontFamily = "Arial";

if (localStorage.getItem("fontSize")) {
  fontSize = parseInt(localStorage.getItem("fontSize"));
  fontNum.innerHTML = fontSize;
  coun.style.fontSize = `${fontSize}px`;
  n.style.opacity = fontSize === 12 ? "50%" : "100%";
  p.style.opacity = fontSize === 22 ? "50%" : "100%";
}

if (localStorage.getItem("isBold")) {
  isBold = localStorage.getItem("isBold") === "true";
  coun.classList.toggle("bold-text", isBold);
}

if (localStorage.getItem("isBlackWhite")) {
  isBlackWhite = localStorage.getItem("isBlackWhite") === "true";
  coun.classList.toggle("black-white", isBlackWhite);
}

if (localStorage.getItem("fontFamily")) {
  fontFamily = localStorage.getItem("fontFamily");
  fonts.value = fontFamily;
  coun.style.fontFamily = fontFamily;
}

bold.addEventListener("click", () => {
  isBold = !isBold;
  coun.classList.toggle("bold-text", isBold);
  localStorage.setItem("isBold", isBold);
});

color.addEventListener("click", () => {
  isBlackWhite = !isBlackWhite;
  coun.classList.toggle("black-white", isBlackWhite);
  localStorage.setItem("isBlackWhite", isBlackWhite);
});

fonts.addEventListener("change", () => {
  fontFamily = fonts.value;
  coun.style.fontFamily = fontFamily;
  localStorage.setItem("fontFamily", fontFamily);
});

n.addEventListener("click", () => {
  if (fontSize > 12) {
    fontSize--;
    fontNum.innerHTML = fontSize;
    coun.style.fontSize = `${fontSize}px`;
    localStorage.setItem("fontSize", fontSize);
  }
  n.style.opacity = fontSize === 12 ? "50%" : "100%";
});

p.addEventListener("click", () => {
  if (fontSize < 22) {
    fontSize++;
    fontNum.innerHTML = fontSize;
    coun.style.fontSize = `${fontSize}px`;
    localStorage.setItem("fontSize", fontSize);
  }
  p.style.opacity = fontSize === 22 ? "50%" : "100%";
});
