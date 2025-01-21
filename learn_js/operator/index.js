// 1 Toán tử số học
// + (có thể ép kiểu sang chuỗi), -, *, /, % (chia lấy dư), ** (lũy thừa)
// ++, -- (tăng giảm 1)

// let str = "10";

// console.log(x + y); // 13
// console.log(y - str); // 1010
// console.log(x * y); // 30
// console.log(x / y); // 3.3333333333333335
// console.log(x % y); // 1
// console.log(x ** y); // 1000

// ++x;
// console.log(x); // 11
// console.log(++x);
// console.log(x);

// let x = 10;
// let y = 3;

// let total = ++x + y-- - x++ + --y;
// console.log(total); // 11 + 3 - 11 + 1 = 4

// 2 Toán tử logic
// >, <, >=, <=, ==, ===, !=, !==
// trả về true hoặc false (boolean)

// let x = 10;
// let y = 3;
// let z = "3";

// // console.log(x > y); // true
// // console.log(x < y); // false
// // console.log(x >= y); // true
// // console.log(x <= y); // false
// // console.log(x == y); // false
// // console.log(x === y); // false
// // console.log(x != y); // true
// // console.log(x !== y); // true

// console.log(y == z); // true
// console.log(y === z); // false

// 3 Toán tử gán
// =, +=, -=, *=, /=, %=, **=

// let x = 10;
// let y = 3;

// x += y; // x = x + y
// console.log(x); // 13

// x -= y; // x = x - y
// console.log(x); // 10

// Toán tử logic
// && (and), || (or), ! (not)

// let x = 10;
// let y = 3;
// let z = 5;

// if (!x) {
//   console.log("true");
// } else {
//   console.log("false");
// }

// Toán tử 3 ngôi

// let x = 10;
// Nếu x > 5 thì result = "Lớn hơn"
// Nếu x <= 5 thì ngc lại
// const result = x > 5 ? "Lớn hơn" : "Nhỏ hơn";
// console.log(result);

// function check() {
//   if (x > 5) {
//     console.log("Lớn hơn");
//   } else {
//     console.log("Nhỏ hơn");
//   }
// }
// const result = check();
// console.log(result);

// void (hàm không trả về kết quả)
// hàm trả về kết quả (là hàm có return)

// Toán tử nullish ??
// Kiểm tra undefined và null

// let b = undefined ?? "Hello";
// console.log(b);

// let b = undefined;

// if (b === undefined || b === null) {

// } if else
//  else {
//   console.log("Hello");
// }

// console.log(b);
// let b = undefined ?? "Hello";
// let a = 10;

// let b = a === null || a === undefined ? undefined : a;

// Falsy: 0, null, undefined, false, NaN, "" (-0, 0n, document.all)
// Truthy: còn lại

// Toán tử optional chaining (?.)

// const adventurer = {
//   name: "Alice",
//   cat: {
//     name: "Dinah",
//   },
// };

// const dogName = adventurer.dog?.name;
// console.log(dogName);
// // Expected output: undefined

// console.log(adventurer.someNonExistentMethod?.());
// // Expected output: undefined

// Toán tử &&

// let a = undefined || false || 6;
// console.log(a);
