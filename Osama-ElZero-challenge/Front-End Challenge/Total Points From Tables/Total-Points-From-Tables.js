let pi_m = document.querySelectorAll("#pi-m");
let pi_s = document.querySelectorAll("#pi-s");
let total_m = document.querySelector("#total-m");
let total_s = document.querySelector("#total-s");

const arrM = Array.from(pi_m, (el) => +el.innerHTML);
const arrS = Array.from(pi_s, (el) => +el.innerHTML);

function total(arrM, arrS) {
  total_m.innerHTML = arrM.reduce((a, b) => a + b);
  total_s.innerHTML = arrS.reduce((a, b) => a + b);
}
total(arrM, arrS);
