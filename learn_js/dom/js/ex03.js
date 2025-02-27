// DOM HTML

// 1. Lấy nội dung của thẻ HTML

// 1.1 innerHTML => Lấy nội dung bên trong của thẻ html (bao gồm các thẻ html và khoảng trắng)

const p = document.querySelector("p");
// console.log("ok");

// console.log(p.innerHTML);

// p.innerHTML = "ok";

// p.innerHTML = `<b>Huy</b>`;

// 1.2 innerText => Lấy nội dung bên trong thẻ html (chỉ lấy text và loại bỏ khoảng trắng)

// console.log(p.innerText);

// p.innerText = `<b>Huy</b>`;

// 1.3 textContent => Lấy nội dung bên trong thẻ html (chỉ lấy text và không loại bỏ khoảng trắng)

// console.log(p.textContent.trim().replaceAll(" ", ""));

// p.textContent = `<b>Huy</b>`;

// 1.4 outerHTML => Lấy nội dung bên trong và lấy luôn cả thẻ đang tác động

// console.log(p.outerHTML);

// p.outerHTML = `<b>Huy</b>`;

// const totalText = document.querySelector(".total");
// totalText.innerText = +totalText.innerText + 10;
// console.log(totalText.innerText);
