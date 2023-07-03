// assignment 1 ==========

// let prop = window.prompt("write a Number", "from - to");
// let arr = prop.split("-").sort((a, b) => a - b)

// for (let i = arr[0]; i <= arr[1]; i++) {
//   let div = document.createElement("div");
//   document.body.append(div);
//   div.innerHTML = i;
// }

//===============================================================

// assignment 2 ==========

// let container = document.createElement("div");
// let box = document.createElement("div");
// let head = document.createElement("h1");
// let p = document.createElement("p");
// let btn = document.createElement("button");

// function popup() {
//   document.body.append(container);
//   container.style.cssText = `
// width: 100%;
// height: 100vh;
// background-color:  #0000007c;
// position: relative;
// display: flex;
// align-items: center;
// justify-content: center;
// `;

//   container.appendChild(box);

//   box.style.cssText = `
// display: flex;
// align-items: center;
// justify-content: center;
// width: 300px;
// height: 200px;
// background-color: white;
// border-radius: 8px;
// border: 1px  #eee solid;
// flex-direction: column;
// position: relative;
// `;

//   box.appendChild(head);

//   head.textContent = "Welcome ";
//   head.style.cssText = `
// color: black;
// opacity: 100%;
// font-weight: bold;
// font-family: Arial, Helvetica, sans-serif;
// margin-bottom: 10px;
// `;

//   box.appendChild(p);
//   p.textContent = "Welcome to Ahmed website";

//   p.style.cssText = `
// font-family: Arial, Helvetica, sans-serif;
// font-weight: bold;
// `;

//   box.appendChild(btn);
//   btn.textContent = "X";

//   btn.style.cssText = `
// font-family: Arial, Helvetica, sans-serif;
// opacity: 100%;
// font-weight: bold;
// width: 30px;
// height: 30px;
// background-color: rgba(209, 22, 22, 0.788);
// color: white;
// border-radius: 50%;
// position: absolute;
// top: -10px;
// right: -10px;
// cursor: pointer;
// `;
// }
// setTimeout(popup, 5000);
// btn.onclick = () => container.remove();

//=======================================================================

// assignment  3 ==========

// let num = document.createElement("div");
// document.body.append(num);
// num.textContent = `10`;
// num.style.cssText = `
//   color: red;
//   font-size: 300px;
//   margin: 100px auto;
//   font-family: Arial, Helvetica, sans-serif;
//   font-weight: bold;
//   width: 100%;
//   text-align: center;
// `;

// let count = setInterval(() => {
//   num.textContent -= 1;
//   num.textContent === "0" ? (location.href = `https://elzero.org`) : "";
// }, 1000);

//=======================================================================

// assignment 4 ==========

// let num = document.createElement("div");
// document.body.append(num);
// num.textContent = `10`;
// num.style.cssText = `
//   color: red;
//   font-size: 300px;
//   margin: 100px auto;
//   font-family: Arial, Helvetica, sans-serif;
//   font-weight: bold;
//   width: 100%;
//   text-align: center;
// `;

// let count = setInterval(() => {
//   num.textContent -= 1;
//   num.textContent === "0" ? clearInterval(count) : "";
// }, 1000);

//=======================================================================

// assignment  5 ==========

// let num = document.createElement("div");
// document.body.append(num);
// num.textContent = `10`;
// num.style.cssText = `
//   color: red;
//   font-size: 300px;
//   margin: 100px auto;
//   font-family: Arial, Helvetica, sans-serif;
//   font-weight: bold;
//   width: 100%;
//   text-align: center;
// `;

// let count = setInterval(() => {
//   num.textContent -= 1;
//   num.textContent === "0" ? clearInterval(count) : "";
//   if (num.textContent === "0") {
//     st = () =>{
//       window.open("https://elzero.org", "_blank", "width=500,height=400p,top=200,left=200")
//     }
//     st()
//   }
// }, 1000);

//=======================================================================
