// Vòng lặp: Cú pháp trong lập trình, cho phép một đoạn chương trình lặp đi lặp lại với số lần nhất định

// 1. Vòng lặp for

// for(bien chay; dieu kien dung; buoc nhay) {
//     Nội dung
// }

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// 2. While (Không xác định được số lần lặp trước)

// let i = 1;

// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// function ranNum() {
//   return Math.floor(Math.random() * 10) + 1;
// }

// while (ranNum() !== 7) {
//   console.log("loop");
// }

// Đề bài: In các số từ 100 đến 1

// let a = 1;

// for (; a <= 10; a++) {
//   console.log(a);
// }
// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   for (let j = 1; j <= 10; j++) {
//     console.log(`${i}, ${j}`);
//   }
// }

// Đề bài:
// *
// **
// ***
// ****
// *****

// let str = "";
// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     str += "*";
//     if (j === i) str += "\n";
//   }
// }

// console.log(str);

// Đề bài: In ra các số nguyên tố trong khoảng từ 1 đến 30

// for (let i = 1; i <= 30; i++) {
//   if ((i % 2 !== 0) & (i % 3 !== 0) && i % 5 !== 0) {
//     console.log(i);
//   }
// }

// const checkPrime = (n) => {
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// 3. Vòng lặp do while
// Luôn luôn chạy ít nhất 1 lần

// let i = 1;

// do {
//   console.log(i);
//   //   i++;
// } while (i === 10);

// while (i === 10) {
//   console.log("ok");
// }

// break và continue

// break: dừng
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
//   if (i === 7) break;
// }

// continue: bỏ qua
// for (let i = 1; i <= 10; i++) {
//   if (i === 7) continue;
//   console.log(i);
// }
