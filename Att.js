"use strict";

const cDisp = document.querySelector(".clockheader");
const btnStart = document.querySelector(".btnStart");
const btnStop = document.querySelector(".btnStop");
let h = 0;
let m = 0;
let s = 0;
let timeOn = false;

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
});

btnStop.addEventListener("click", function () {
  timeOn = false;
});
