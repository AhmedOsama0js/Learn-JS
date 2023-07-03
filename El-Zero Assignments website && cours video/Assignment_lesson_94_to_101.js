//https://elzero.org/javascript-bootcamp-assignments-lesson-from-094-to-101/ (link)

//==============================================================================================

//assignment

// let links = document.links;

// for (let i = 0; i < links.length; i++) {
//   if (links[i].className === "open" && links[i].textContent === "Elzero") {
//     console.log(links[i]);
//     console.log(links[i].href);
//     console.log(links[i].className);
//     console.log(links[i].textContent);
//     console.log(links[i].tagName);
//   }
// }

//==============================================================================================

//assignment 2

/*
let addEl = document.querySelector(".classes-to-add");
let removeEl = document.querySelector(".classes-to-remove");
let Current = document.querySelector('[title="Current"]');
let cls = document.querySelector(".classes-list div");

function addRemove() {
  // remove all element at start
  document.querySelectorAll("span").forEach((e) => e.remove());

  for (let i = 0; i < this.value.trim().split(" ").length; i++) {
    if (addEl.value) {
      Current.classList.add(addEl.value.toLowerCase().trim().split(" ")[i]);
    }

    if (removeEl.value) {
      Current.classList.remove(removeEl.value.toLowerCase().trim().split(" ")[i]);
    }
  }
  this.value = "";

  // add and remove span
  if (Current.classList.length) {
    [...Current.classList].sort().forEach((e) => {
      let clSpan = document.createElement("span");
      clSpan.textContent = e;
      cls.append(clSpan);
    });
  } else cls.textContent = "No Classes To Show";
}
addEl.onblur = addRemove;
removeEl.onblur = addRemove;
*/

//==============================================================================================

//assignment 3

/*
let main = document.querySelector(".our-element");
let strEl = document.createElement("div")
let endEl = document.createElement("div")

// remove p

deletedP = () => {
  if (main.nextElementSibling.tagName === "P") {
    main.nextElementSibling.remove()
  }
}
deletedP();

*/

/*
  ======== answer 1 ======

// add end element
addEndEl = () => {
  endEl.classList = "end";
  endEl.title = "End Element";
  endEl.setAttribute("data-value", "end");
  endEl.textContent = "End";
}
addEndEl();

// add start element
addStrEl = () => {
  strEl.classList = "Start";
  strEl.title = "Start Element";
  strEl.setAttribute('data-value',"start")
  strEl.textContent = "Start";
};
addStrEl();

*/

/*

// ======== answer 2 ======

strEndAttr = (el, ind) =>{
  el.classList = ind;
  el.title = `${ind} Element`;
  el.setAttribute("data-value", ind);
  el.textContent = ind;
}
strEndAttr(strEl, "start");
strEndAttr(endEl, "end");
// add at html page 
main.before(strEl);
main.after(endEl);
*/

// ==============================================================================================

// assignment 4

// let el = document.querySelector("div")

// ======== answer 1 ======
// console.log(el.textContent.trim().split(" ")[4]);

// ======== answer 2 ======
// console.log(el.textContent.replace(/[\n\r]+/g, "").trim().split(" ")[4]);

// ======== answer 3 ======
// console.log(el.lastChild.nodeValue.trim());

// ======== answer 4 ======
// console.log(el.textContent.slice(14, 20));

// ==============================================================================================

// assignment 5

// [...document.body.children].forEach(
//   e => (e.onclick = _ => console.log(`this is ${e.tagName}`))
// );
