// Vòng lặp reduce

// Vòng lặp reduce có 2 tham số

// Callback: Nhận vào 3 tham số

// + Prev value
// ++ Nếu không có giá trị khởi tạo thì nó sẽ lấy phần tử đầu tiên của mảng làm giá trị
// ++ Nếu có giá trị khởi tạo thì nó sẽ lấy giá trị khởi tạo làm giá trị
// ++ Return lần trước của callback sẽ là  giá trị của prev hiện tại

// + Current value

// + Index

// InitialValue

// => Giá trị trả về của reduce sẽ là lần return cuối cùng của callback

// const arr = [1, 2, 3, 4, 5];

// const result = arr.reduce((prev, curr) => {
//   console.log(prev);
//   return prev + curr;
// }, 0);

// console.log(result);

// Tìm max sử dụng reduce

// let numbers = [5, 2, 11, 4, 10, 7];

// const result = numbers.reduce((prev, curr) => {
//   //   return prev < curr ? curr : prev;
//   if (prev < curr) {
//     return curr;
//   }
//   return prev;
// });

// console.log(result);

// function temp() {
//   console.log(arguments[1]);
// }

// temp(1, 2, 3, 4);

const array1 = ["a", "b", "c"];

const iterator1 = array1.entries();

// [[0, 'a'], [1, 'b'], []]

// console.log(iterator1);

for (const item of array1) {
  console.log(item);
}
