// Array: Trong JS array không phải là kiểu dữ mà nó là object dạng mảng

// Khai báo
// console.log(arr);

// let arr1 = Array(1, 2, 3);
// console.log(arr1);

// let arr2 = new Array(1, 2, 3);
// console.log(arr2);

// Kiểm tra xem có phải là một mảng hay không

// if (Array.isArray(arr)) {
//   console.log("This is Array");
// } else {
//   console.log("No");
// }

// Lấy số lượng phần tử của một mảng

// console.log(arr.length);

// Thêm phần tử vào một mảng

// arr[arr.length] = 4;
// console.log(arr);

// // Sửa phần tử trong mảng

// arr[2] = 5;

// console.log(arr);
// Duyệt mảng

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// Xóa phần tử trong mảng
// let arr = [1, 2, 3];

// let indexDel = 2;

// let newArr = [];

// for (let i = 0; i < arr.length; i++) {
//   if (i !== indexDel) {
//     newArr[newArr.length] = arr[i];
//   }
// }

// arr = newArr;
// console.log(arr);

// Bài tập 1: Thêm 1 phần tử vào đầu mảng

// let arr = [1, 2, 3, 4];

// [0,1,2,3,4]

// let arr = [1, 2, 3, 4];
// let newArr = [0];
// for (let i = 0; i < arr.length; i++) {
//   newArr[newArr.length] = arr[i];
//   console.log(newArr);
// }

// Bài 2: Nối 2 mảng vào thành 1 và 2 mảng ban đầu không thay đổi

// // result = [1,2,3,4,5,6,7];
// let arr = [1, 2, 3, 4];
// let length1 = arr.length;
// let arr1 = [5, 6, 7];
// let length2 = arr1.length;

// let length = arr.length + arr1.length;

// let result = [];

// for (let i = 0; i < length1; i++) {
//   result[i] = arr[i];
// }
// for (let j = length1; j < length; j++) {
//   result[j] = arr1[j - length1];
// }

// console.log(result);
let arr = [1, 2, 3, 4];
let arr1 = [5, 6, 7];
let result = [];

// for (let i = 0; i < arr.length; i++) {
//   result[result.length] = arr[i];
// }
// for (let i = 0; i < arr1.length; i++) {
//   result[result.length] = arr1[i];
// }
// console.log(result);

// Cách 1 vòng lặp

// for (let i = 0; i < arr.length + arr1.length; i++) {
//   if (i < arr.length) {
//     result[result.length] = arr[i];
//   } else {
//     result[result.length] = arr1[i - arr.length];
//   }
// }

// console.log(result);
