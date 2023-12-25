// ------------------------------------------------- Promisees ----------------------------------------------------------

/*
Promises are an important part of the JavaScript language, a programming pattern that helps handle asynchronous operations better.
It allows promises that regulate the workflow of broad, concurrent processes such as file reading or network requests.
The main idea behind Promises is to provide an interface for handling time-dependent code,
so you can better handle non-immediate responses.
This does not prevent a promise from being made as an object that represents a constraint (pending), 
fulfilled (fulfilled), or rejected (rejected).

Creating a Promise In JavaScript, you can use the new Promise()
 keyword and pass two functions (resolve and reject) as arguments to handle effective results or failure of the operation. For example:
*/

// ---------------------------------------- hell callback function -------------------------------

// const title = document.getElementById("title");

// setTimeout(() => {
//   title.style.color = "red";

//   setTimeout(() => {
//     title.style.color = "green";

//     setTimeout(() => {
//       title.style.color = "blue";

//       setTimeout(() => {
//         title.style.color = "gray";

//         setTimeout(() => {
//           title.style.color = "reed";

//           setTimeout(() => {
//             title.style.color = "black";

//           }, 1000);
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);


// ---------------------------------------- Promisees function -------------------------------




const title = document.getElementById("title");

const changeColor = (color, delay) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      title.style.color = color;
      resolve();
    }, delay);
  });
};

changeColor("red", 1000)
  .then(() => changeColor("green", 1000))
  .then(() => changeColor("blue", 1000))
  .then(() => changeColor("gray", 1000))
  .then(() => changeColor("red", 1000))
  .then(() => changeColor("black", 1000))
  .catch((error) => {
    console.error("An error occurred:", error);
  });
