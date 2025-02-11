// Các phương thức xử lý mảng
// console.log(Array.prototype);
// let arr = [1, 2, 3, 4];
// let arr1 = [5, 6, 7];

// let str = "Huy";

// console.log(str[0]);

// 1. at(index) => Trả về phần tử theo index
// console.log(arr.at(2));

// 2. concat(arr1, arr2,....)
// console.log(arr.concat(arr1));

// 3. indexOf(value) => Tìm vị trí xuất hiện đầu tiên của phần tử cần tìm trong mảng
// log

// 4. lastIndexOf(value) => .... tìm phần tử cuối cùng trả về index

// 5. includes(value) => Trả về boolean

// 6. slice(start, end) => tương tự chuỗi

// 7. join(sep) => Nối các phần tử trong mảng thành một chuỗi và nó ngắn cách bằng chuỗi được truyền vào

// console.log(arr.join("*"));

// 8. push(value) => Thêm một phần tử vào cuối mảng
// Trả về số lượng phần tử sau khi thêm
// Có thay đổi mảng ban đầu
// console.log(arr.push(6));
// console.log(arr);

// 9. unshift(value) => Thêm phần tử vào đầu mảng trả về số lượng phần tử của mảng sau khi thêm
// Có thay đổi mảng gốc

// console.log(arr.unshift(6));
// console.log(arr);

// 10. pop() => Xóa phần tử cuối mảng và trả về giá trị vừa xóa
// Có thay đổi mảng gốc

// console.log(arr.pop());
// console.log(arr);

// 11. shift() => Xóa phần tử đầu mảng trả về phần tử bị xóa
// Có thay đổi mảng gốc
// console.log(arr.shift());

// 12. splice(index, number, ...) => Xóa number phần tử bắt đầu từ vị trí index
// let arr = [1, 2, 3, 4, 5];

// console.log(arr.splice(1, 3, 7, 8, 9));

// console.log(arr);

// 13. sort() => Sắp xếp mảng theo thứ tự tăng dần hoặc giảm dần

// let arr = ["a", "c", "b", "e", "d"];
// let n = 0;
// arr.sort(function (next, prev) {
//   if (next < prev) {
//     return -1;
//   }
// });

// console.log(arr);

// Bài tập:

// let customers = [
//   "Trần Ngọc Duy",
//   "Nguyễn Nhật Huy",
//   "Nguyễn Mạnh Huy",
//   "Tạ Hoàng An",
//   "Đặng Ngọc Sơn",
//   "Phan Tuấn Mạnh",
//   "Ngô Văn Công",
//   "Nguyễn Minh Hoàng",
// ];

// const getName = (fullName, index) => {
//   let temp = fullName.split(" ");
//   let lastName = temp.slice(-1).join("");
//   let firstName = temp.slice(0, temp.length - 1).join(" ");

//   if (index === 0) {
//     return firstName;
//   }
//   return lastName;
// };

// customers.sort(function (next, prev) {
//   if (getName(next, 1) < getName(prev, 1)) {
//     return -1;
//   } else if (getName(next, 1) === getName(prev, 1)) {
//     if (getName(next, 0) < getName(prev, 0)) {
//       return -1;
//     }
//   }
// });

// console.log(customers);
