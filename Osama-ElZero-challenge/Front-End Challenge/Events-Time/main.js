let day = document.querySelector("#day");
let hour = document.querySelector("#hour");
let minute = document.querySelector("#minute");
let second = document.querySelector("#second");

let detaTarget = new Date("1-12-2025 11:59:59").getTime();

counter = setInterval(() => {
  let dateNow = new Date().getTime();

  let date = detaTarget - dateNow;

  let days = Math.floor(date / (1000 * 60 * 60 * 24));
  day.innerHTML = days;

  let hours = Math.floor((date % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  hour.innerHTML = hours;

  let minutes = Math.floor((date % (1000 * 60 * 60)) / (1000 * 60));
  minute.innerHTML = minutes;

  let seconds = Math.floor((date % (1000 * 60)) / 1000);
  second.innerHTML = Math.floor(seconds);

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
