let sel = document.querySelector("#font");
let cont = document.querySelector(".content");

if (localStorage.getItem("font")) {
  cont.style.fontFamily = localStorage.getItem("font");
  sel.value = localStorage.getItem("font");
}

sel.addEventListener("click", () => {
  cont.style.fontFamily = sel.value;
  localStorage.setItem("font", sel.value);
});
