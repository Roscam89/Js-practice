"use strict";

const cDisp = document.querySelector(".clockheader");
const btnStart = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");
const btnLetsGo = document.querySelector(".btnLetsGo");
const nameactiv = document.querySelector(".nameActiv");
const activDisplay = document.querySelector(".activType");
const activInput = document.querySelector(".input");

let h = 0;
let m = 0;
let s = 0;
let timeOn = false;
//const btnActive = function () {
//if ((btnStart.style.visibility = "visible")) {
//btnStop.style.visibility = "hidden";
// } else {
//   btnStop.style.visibility = "visible";
// }
//};

const timer = setInterval(() => {
  if (timeOn === true) {
    s++;
    if (s > 59) {
      m++;
      s = 0;
    }
    if (m > 59) {
      h++;
      m = 0;
    }
    cDisp.innerHTML = ` ${h.toString().padStart(2, 0)}: ${m
      .toString()
      .padStart(2, 0)}: ${s.toString().padStart(2, 0)}`;
  }
}, 1000);

btnStart.addEventListener("click", function () {
  timeOn = true;
  activDisplay.innerHTML = activInput.value;
  btnStop.style.visibility = "visible";
  btnStart.style.visibility = "hidden";
});

btnStop.addEventListener("click", function () {
  timeOn = false;

  if (cDisp.innerHTML !== "") {
    activDisplay.innerHTML += ` - Total time spent =  ${cDisp.innerHTML}`;
  }

  cDisp.innerHTML = "";
  btnStop.style.visibility = "hidden";
  btnStart.style.visibility = "visible";
});

btnLetsGo.addEventListener("click", function () {
  if (activInput.value !== "") {
    activDisplay.innerHTML = activInput.value;
    nameactiv.style.visibility = "hidden";
    activInput.style.visibility = "hidden";
    btnLetsGo.style.visibility = "hidden";
    btnStart.style.visibility = "visible";
  }
});

//Database code
