let ptn = document.createElement("button");
let p = document.createElement("p");

ptn.className = "click";
ptn.textContent = "Click";

document.body.appendChild(ptn);

p.textContent = "This My Page";
p.className = "par";

document.body.appendChild(p);

ptn.addEventListener("click", () => {
  p.classList.toggle("hid");
});
