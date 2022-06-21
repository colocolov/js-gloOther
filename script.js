"use strict";

const DomElement = function (selector) {
  this.selector = selector;
  this.height = "100px";
  this.width = "100px";
  this.bg = "yellow";
  this.fontSize = "20px";
};

DomElement.prototype.newElement = function () {
  const div = document.createElement("div");

  if (this.selector[0] == ".") {
    div.className = this.selector.slice(1);
    document.body.append(div);
  } else if (this.selector[0] == "#") {
    div.id = this.selector.slice(1);
    document.body.append(div);
  }

  div.style.cssText =
    `color: black; 
  background: ` +
    this.bg +
    `;
  height: ` +
    this.height +
    `;
  width:` +
    this.width +
    `; font-size: ` +
    this.fontSize +
    `; text-align: center; position: absolute;`;

  div.innerHTML = "<p>Привет, JavaScript!";
};

const divClass = new DomElement(".selectClass");
const divId = new DomElement("#selectId");

divClass.newElement();
// divId.newElement();

const elementDiv = document.querySelector(".selectClass");

document.addEventListener("keydown", (event) => {
  switch (event.key) {
    case "ArrowLeft":
      elementDiv.style.transform += "translate(-10px, 0)";
      break;
    case "ArrowUp":
      elementDiv.style.transform += "translate(0, -10px)";
      break;
    case "ArrowRight":
      elementDiv.style.transform += "translate(10px, 0)";
      break;
    case "ArrowDown":
      elementDiv.style.transform += "translate(0, 10px)";
      break;
  }
});
