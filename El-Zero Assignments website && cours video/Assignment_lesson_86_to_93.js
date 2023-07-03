// https://elzero.org/javascript-bootcamp-assignments-lesson-from-086-to-093/ (link )

//=================================================================================

//Assignment 1

let js1 = document.querySelector("#elzero");
let js2 = document.querySelector(".element");
let js3 = document.querySelector("div");
let js4 = document.querySelector("[name = js]");
let js5 = document.querySelectorAll("#elzero")[0];
let js6 = document.querySelectorAll(".element")[0];
let js7 = document.querySelectorAll("div")[0];
let js8 = document.querySelectorAll("[name = js]")[0];
let js9 = document.getElementById("elzero");
let js10 = document.getElementsByClassName("element")[0];
let js11 = document.getElementsByTagName("div")[0];
let js12 = document.getElementsByName("js")[0];
let js13 = document.body.firstElementChild;
let js14 = document.body.children[0];
let js15 = document.body.childNodes[1];

// console.log(js1);
// console.log(js2);
// console.log(js3);
// console.log(js4);
// console.log(js5);
// console.log(js6);
// console.log(js7);
// console.log(js8);
// console.log(js9);
// console.log(js10);
// console.log(js11);
// console.log(js12);
// console.log(js13);
// console.log(js14);
// console.log(js15);

//=================================================================================

//Assignment 2

// let imgs = document.images;

// for (let i = 0; i < imgs.length; i++) {
//   // imgs[i].alt = "Ahmed Osama Rank";
//   imgs[i].src = "https://www.codewars.com/users/Ahmed-Osama/badges/large";
// }

//=================================================================================

//Assignment 3

// let inp = document.querySelector("[name = 'dollar']");
// let result = document.querySelector(".result");
// let forms = document.forms[0];

// forms.style.cssText = `
//   margin: 30px 0;
//   border: 2px solid gray;
//   text-align: center;
// `;
// inp.style.cssText = `
//   width : 300px;
//   padding: 10px;
//   margin: 30px 20px;
//   outline:none ;
//   border: 2px solid gray
// `;
// result.style.cssText = `
//   padding-left: 20px;
//   font-family: 'Courier New', Courier, monospace;
//   color: gray;
//   text-transform: capitalize;
//   margin-bottom : 10px;
// `;
// inp.oninput = function () {
//   result.textContent = `{${inp.value}} USD Dollar = {${(
//     inp.value * 30.97
//   ).toFixed(2)}} Egyptian Pound`;
// };

//=================================================================================

//Assignment 4

// let one = document.getElementsByClassName("one")[0];
// let two = document.getElementsByClassName("two")[0];

// one.title = `${one.className}`;
// one.textContent = `${one.className
//   .slice(0, 1)
//   .toLocaleUpperCase()}${one.className.slice(1)}${
//   one.className.slice(1).length
// }`;

// two.title = `${two.className}`;
// two.textContent = `${two.className
//   .slice(0, 1)
//   .toLocaleUpperCase()}${two.className.slice(1)}${
//   two.className.slice(1).length
// }`;

//=================================================================================

//Assignment 5

let altNO = document.querySelectorAll("[decoding='async']");

// for (let i = 0; i < altNO.length; i++) {
//   altNO[i].hasAttribute("alt")
//     ? (altNO[i].alt = "old")
//     : (altNO[i].alt = "New Elzero");
// }

//=================================================================================

//Assignment 6

let container = document.getElementsByClassName("container")[0];
let forms = document.forms;
let num = document.querySelector("[placeholder='Number Of Elements']");
let txt = document.querySelector("[placeholder='Elements Text' ]");
let selects = document.querySelector("select");
let submit = document.querySelector("[value='Create']");
let results = document.getElementsByClassName("results")[0];
let inputs = document.querySelectorAll("input");
console.log(inputs);

container.style.cssText = `
  margin: 30px;
  padding: 30px;
  border: 2px solid gray;
  border-radius: 8px;
  width: 90%;
  display: flex;
  justify-content: center;
`;

forms[0].style.cssText = `
  display: flex;
  width: 100%;
  flex-direction: column;
  border-radius: 8px;
  gap: 10px;
`;

for (let i = 0; i < inputs.length; i++) {
  inputs[i].style.cssText = `
  width: 300px;
  margin: 2px auto;
  border: 1.5px solid gray;
  border-radius: 8px;
  height: 40px;
  font-size: 20px;
  padding-left: 10px;
  padding: 8px ;
  outline: none;
  `;
}
submit.style.background = "#009079";
submit.style.color = "white";

selects.style.cssText = `
  width: 318px;
  margin: 2px auto;
  border: 1.5px solid gray;
  border-radius: 8px;
  height: 40px;
  font-size: 20px;
  padding-left: 10px;
  padding: 8px ;
  outline: none;
`;
results.style.cssText = `
  width: 90%;
  height: 100%;
  margin: 10px auto;
`;

forms[0].onsubmit = function (el) {
  el.preventDefault();
  document.querySelectorAll(".box").forEach((el) => el.remove());

  for (let i = 0; i <= num.value; i++) {
    let ele = document.createElement(selects.value);
    let tex = document.createTextNode(txt.value);

    el.className = "box";
    el.id = `id-${i}`;
    el.title = "Element";

    ele.style.cssText = `
      width: 200px;
      margin: 20px;
      padding: 10px;
      color: white;
      background-color: #fc552a;
      text-align: center;
      border-radius: 8px;
      display: inline-block;
    `;

    ele.appendChild(tex);
    results.appendChild(ele);
  }
};
