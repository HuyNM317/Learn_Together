// const sayHi = () => {
//   let temp = 10;
//   return temp;
// };
// console.log(temp);

// const a = sayHi();
// console.log(a);

// Kiểm tra xem một biến có phải một hàm hay không?
// Callback: là một hàm được truyền vào như một đối số của hàm khác

// const sayHi = () => {
//   console.log("hi");
//   return "hi";
// };

// // const hi = () => {
// //   console.log("hello");
// // };

// const temp = (callback) => {
//   if (typeof callback === "function") {
//     callback();
//   }
// };

// temp(sayHi);

// const getA = (callback) => {
//   setTimeout(() => {
//     console.log("a");
//     callback();
//   }, 1000);
// };

// const getB = (callback) => {
//   setTimeout(() => {
//     console.log("b");
//     callback();
//   }, 1000);
// };

// const getC = () => {
//   setTimeout(() => {
//     console.log("c");
//   }, 1000);
// };

// getA(() => {
//   getB(() => {
//     getC();
//   });
// });
// Anonymous function

// IIFE function

// (function (name) {
//   console.log(name);
// })("Huy");

// Closure function

// const sumA = (a) => {
//   const sumB = (b) => {
//     return a + b;
//   };
//   return sumB;
// };

// const temp = sumA(10);
// const result = temp(7);
// console.log(temp(9));

// console.log(result);

// Đệ quy

// const print = (n) => {
//   if (n > 0) {
//     console.log(n);
//     print(n - 1);
//   }
// };
// print(10);

// Đề bài: Sử dụng đệ quy để tính tổng một số từ số 1 đến chính nó
// const sumN = (n) => {
//   if (n === 1) return 1;
//   return n + sumN(n - 1); // 10 + 9 + 8 + ... + 1
// };

// console.log(sumN(10));
// const sumN = (n) => {
//   let sum = 0;
//   return sum;
//   if (n > 0) {
//     sum += n;
//     sumN(n - 1);
//   }
// };
// console.log(sumN(10));
