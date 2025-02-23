// DOM Event và DOM Event Listener

// 1. Event handler

// tenElement.tenSuKien = function() {
//     // logic
// }

// 2. Event Listener

// - addEventListener
// - removeEventListener

// const btn = document.querySelector("button");

// console.log(btn);

// const sayHi = () => {
//   console.log("hi");
// };

// btn.onclick = sayHi;

// btn.onmousedown = sayHi;

// btn.onmouseup = sayHi;

// btn.onmousemove = sayHi;

// btn.onmouseenter = sayHi;

// btn.onmouseleave = sayHi;

// btn.onmouseover = sayHi;

// const input = document.querySelector("input");

// input.onkeyup = sayHi;

// input.onkeydown = sayHi;
// input.onkeypress = sayHi;

// input.onchange = sayHi;

// input.oninput = sayHi;

// input.onblur = sayHi;

// 2. Event Listener

const btn = document.querySelector("button");

const sayHi = () => {
  console.log("hi");
};

const sayHello = () => {
  console.log("hello");
};

// btn.addEventListener("click", sayHi);
// btn.addEventListener("click", sayHello);
// // const input = document.querySelector("input");

// input.addEventListener("input", sayHi);
// input.removeEventListener("input", sayHi);

// btn.onclick = sayHi;

// btn.onclick = sayHello;

const form = document.form;

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("ok");
});
