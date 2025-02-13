let users = ["An", "Dương", "Vương", "Tuấn", "Đạt", "Tuấn"];

// 1. fill(value) => Thay đổi toàn bộ phần tử của mảng thành một giá trị

// users.fill("Duy", 1);

// console.log(users);

// 2. forEach(callback)

// Duyệt qua từng phần tử của mảng
// Tham số của callback sẽ là phần tử và index
// Chỉ duyệt, không trả về giá trị, và nó không dừng được

// users.forEach((user, index) => {
//   console.log(index, user);
//   if (index === 3) {
//     return;
//   }
// });

// 3. find(callback) => Trả về phần tử đầu tiên thỏa mãn điều kiện

// const name = users.find((user) => user === "Dương");

// console.log(name);

// 4. findIndex và findLastIndex

// const name = users.findIndex((user) => user === "Tuấn");

// console.log(name);

// const array1 = ["a", "b", "c", 12];
// const iterator = array1.keys();
// console.log(iterator);

// for (const key of iterator) {
//   console.log(key);
// }

// for (let i = 0; i < array1.length; i++) {
//   console.log(i);
// }

// let str = "huy";

// for (let value of str) {
//   console.log(value);
// }

// map(callback)

// Trả về một mảng mới
// Số lượng phần tử của mảng mới sẽ bằng với số lượng phần tử của mảng ban đầu
// Giá trị của từng phần tử trong mảng sẽ phụ thuộc vào return của callback

// users = users.map((user, index) => {
//   return `<span>${user}</span>`;
// });

console.log("@".charCodeAt());
console.log("^".charCodeAt());

// ^

// console.log("Passs".charCodeAt(1)); // true
