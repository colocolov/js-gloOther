"use strict";

const btn = document.getElementById("btn");
const btnJmeak = document.getElementById("e_btn");
const input = document.getElementById("text");
const range = document.getElementById("range");
const rangeSpan = document.getElementById("range-span");
const square = document.getElementById("square");
const circle = document.getElementById("circle");

// 1
const bgColor = function () {
  if (input.value != "") {
    return input.value;
  } else {
    alert("Введите цвет!");
  }
};

btn.addEventListener("click", function (e) {
  square.style.backgroundColor = bgColor();
});

// 2
btnJmeak.style.display = "none";

//3
range.addEventListener("input", function (e) {
  rangeSpan.textContent = e.target.value;
  circle.style.width = e.target.value + "%";
  circle.style.height = e.target.value + "%";
});
