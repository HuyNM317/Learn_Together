// Chữa bài tập về nhà buổi 01

// Bài 1:
// let a = 2;
// let b = 1;

// a = a + b;
// b = a - b;
// a = a - b;
// console.log("a =", a, "b =", b);

// Bài 2:
// let a = 30;
// let b = 20;
// let c = 1;

// let max;
// if (a > b && a > c) {
//   max = a;
// } else if (b > c) {
//   max = b;
// } else {
//   max = c;
// }

// console.log("Số lớn nhất là: ", max);
// alert("Số lớn nhất là:" + max);

// Bài 3:
// let a = 5;
// let b = -1;

// let result;

// if (a * b > 0) {
//   result = "Hai số cùng dấu";
// } else if (a * b < 0) {
//   result = "Hai số khác dấu";
// } else {
//   result = "Có số = 0";
// }

// alert(result);

// Bài 4:
let a = 3;
let b = 5;
let c = -1;

if (a > b) {
  let temp = a;
  a = b;
  b = temp;
}

if (a > c) {
  let temp = a;
  a = c;
  c = temp;
}

if (b > c) {
  let temp = b;
  b = c;
  c = temp;
}

console.log("Sắp xếp tăng dần:", a, b, c);
