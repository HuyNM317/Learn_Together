// 1. abs() => Trả về giá trị tuyệt đối

// console.log(Math.abs(-10));

// 2. ceil() => Luôn làm tròn lên

// console.log(Math.ceil(3.00001));

// 3. floor() => Luôn làm tròn xuống

// console.log(Math.floor(3.99999999));

// 4. round()

// console.log(Math.round(3.5));

// 5. random() 0 < Math.random() < 1

// console.log(Math.random());

// 6. min(), max()

// console.log(Math.min(12, 3, 7));
// console.log(Math.max(12, 3, 7));

// console.log(Math.min());

// console.log(Math.max());

// let temp = 0

// [12,3,43,4]

const validateNumber = (number) => {
  number = +number;
  if (
    Number.isNaN(number) ||
    Math.abs(number) === Infinity ||
    number <= 0 ||
    number > 100 ||
    Number.isInteger(number) === false
  ) {
    return false;
  }
  return true;
};

console.log(validateNumber("Infinity"));

let number = 0;
s;
while (number <= 7) {
  if (number < 7) {
    let secretNumber = Math.floor(Math.random() * 100);
    let selectNumber = prompt("Mời chọn số");
    console.log(!selectNumber, Number.isNaN(selectNumber), selectNumber < 0);

    if (!selectNumber || Number.isNaN(selectNumber) || selectNumber < 0) {
      alert("Vui lòng nhập vào số hợp lệ");
    } else if (selectNumber > secretNumber) {
      alert(`Số bạn đoán quá lớn! Số bí mật là ${secretNumber}`);
    } else if (selectNumber < secretNumber) {
      alert(`Số bạn đoán quá nhỏ! Số bí mật là ${secretNumber}`);
    } else {
      alert("Chúc mừng! Bạn đã đoán đúng số bí mật!");
    }
  } else {
    alert("Bạn đã hết lượt chơi!");
  }
  number += 1;
}
// const arr = [];
// for (let i = 0; i < 3000; i++) {
//   const number = Math.floor(Math.random() * 100) + 1;
//   if (!arr.includes(number)) {
//     arr.push(number);
//   }
// }
// // sort

// arr.sort((a, b) => a - b);
// // console.log(arr);
// let secretNumber = Math.floor(Math.random() * 100);
// let selectNumber = prompt("Mời chọn số");
// console.log(!selectNumber, Number.isNaN(selectNumber), selectNumber < 0);
