// Number là kiểu dữ liệu nguyên thủy

// Hàm tạo là Number

// console.log([Number]);

// let a = 10;
// console.log(typeof a);

// Số NaN (Not a Number)

// - Ép kiểu số thật bại
// - Các phép toán có toán hạng không phải là số (trừ chuỗi số)

// const temp = "h";

// if (isNaN(temp)) {
//   console.log("this is NaN");
// } else {
//   console.log("this is not NaN");
// }

// Infinity

// console.log(1 / 0);

// console.log(1 / 0 === Infinity);

// console.log(typeof Infinity);

// console.log(Number.parseInt(12.3));

// console.log(Number.parseFloat(12.3));

// console.log(Number.parseFloat("3.14abc"));
// console.log(Number.parseFloat("    3.14"));

// var numbers = [
//   1,
//   5,
//   9,
//   "2",
//   8,
//   "a",
//   undefined,
//   null,
//   NaN,
//   Infinity,
//   -Infinity,
//   true,
//   false,
// ];
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//   if (
//     typeof numbers[i] !== "boolean" &&
//     !Number.isNaN(numbers[i]) &&
//     numbers[i] % 2 === 0 &&
//     numbers[i] !== null
//   ) {
//     console.log(numbers[i]);

//     sum += +numbers[i];
//   }
// }
// console.log(sum);
