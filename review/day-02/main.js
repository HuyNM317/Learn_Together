/**
 * Bài 1: Tìm số nguyên tố trong một khoảng
Viết một chương trình nhập vào hai số nguyên a và b. 
In ra tất cả các số nguyên tố nằm trong khoảng từ a đến b.
 */

// const checkPrime = (n) => {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) return false;
//   }
//   return true;
// };

// function printPrime(a, b) {
//   if (a > b) {
//     let sum = a + b;
//     a = sum - a;
//     b = sum - b;
//   }
//   console.log(`Các số nguyên tố trong khoảng tử ${a} đến ${b} là:`);
//   for (let i = a; i <= b; i++) {
//     if (checkPrime(i)) {
//       console.log(i);
//     }
//   }
// }

// let result = printPrime(21, 1);

// B2;

// function kiemTraDoiXung(n) {
//   if (n < 0) return "Số nhập vào không hợp lệ";
//   let num = 0;
//   let original = n;
//   let m = 0;
//   while (n > 0) {
//     m = n % 10;
//     num = num * 10 + m;
//     n = n / 10 - m / 10;
//   }

//   if (num === original) {
//     return `Số ban đầu nhập vào là ${original}. Số đảo lại là ${num}. Vì thế Đây là số đối xứng`; //Không tìm ra được lỗi sai chỗ này.
//   } else {
//     return `Số ban đầu nhập vào là ${original}. Số đảo lại là ${num}. Vì thế Đây KHÔNG PHẢI là số đối xứng`;
//   }
// }

// console.log(kiemTraDoiXung(121));
// B9:

// const countNum = (n) => {
//   let count = 0;
//   while (n > 1) {
//     n = n / 10;
//     count++;
//   }
//   return count;
// };

// const checkArmstrong = (n) => {
//   const temp = countNum(n);
//   let origin = n;
//   let total = 0;
//   while (n > 0) {
//     total += (n % 10) ** temp;
//     n = n / 10 - (n % 10) / 10;
//   }
//   return total === origin;
// };

// console.log(checkArmstrong(153));

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }
