// // // Câu lệnh rẽ nhánh (if else, switch case)

// // // if else

// // // 1. Câu lệnh if thiếu

// // if (5 > 3) {
// //   console.log("ok");
// // }

// // // 2. Câu lệnh if đủ

// // if (5 > 3) {
// //   console.log("ok");
// // } else {
// //   console.log("not ok");
// // }

// // // 3. Câu lệnh if nhiều nhánh

// // if (5 > 3) {
// //   console.log("ok");
// // } else if (3 < 4) {
// //   console.log("not ok");
// // } else {
// //   console.log("yes");
// // }

// // // 4. Câu lệnh if lồng nhau

// // if (5 > 3) {
// //   console.log("ok");
// //   if (4 > 2) {
// //     console.log("4 > 2");
// //   } else {
// //     console.log(" 4 < 2");
// //   }
// // } else if (3 < 4) {
// //   console.log("not ok");
// // } else {
// //   console.log("yes");
// // }

// // Đề bài: Kiểm tra xem một số có phải là số nguyên không?

// // let a = 2;
// // if (a % 1 !== 0) {
// //   console.log("a là số nguyên");
// // } else {
// //   console.log("a không phải là số nguyên");
// // }

// // 2 Câu lệnh rẽ nhánh switch case

// // - Chỉ chấp nhận so sánh ===
// // - Thường áp dụng trong trường hợp có quá nhiều nhánh

// // let day = 2;

// // switch (day) {
// //   case 2:
// //     console.log("Monday");
// //     break;
// //   case 3:
// //     console.log("Tuesday");
// //     break;
// //   case 4:
// //     console.log("Wednesday");
// //     break;
// //   default:
// //     console.log("Invalid");
// // }
// switch (action) {
//   case "create":
//   case "insert":
//   case "add":
//     console.log("Thêm");
//     break; //Ngắt nhánh

//   case "edit":
//   case "update":
//     console.log("Sửa");
//     break;

//   case "delete":
//   case "remove":
//     console.log("Xóa");
//     break;

//   default:
//     console.log("Danh sách");
//     break;
// }

// // Chuyển thành if else

// let action = "create";

// if (action === "create" || action === "insert" || action === "add") {
//   console.log("Thêm");
// } else if (action === "edit" || action === "update") {
//   console.log("Sửa");
// } else if (action === "delete" || action === "remove") {
//   console.log("Xóa");
// } else {
//   console.log("Danh sách");
// }

// Bài tập: Tính lương thực nhận sau khi đã trừ thuế

// Bảng thuế:
// - Lương < 5tr => Thuế = 3%
// - Lương từ 5tr đến 15tr => Thuế = 5%
// - Lương trên 15tr => Thuế = 10%

// let salary = 4800000;
// let receiveSalary = 0;

// if (salary < 5000000) {
//   receiveSalary = salary - salary * 0.03;
//   console.log("Lương thực nhận là:", receiveSalary);
// } else if (salary >= 5000000 && salary <= 15000000) {
//   receiveSalary = salary - salary * 0.05;
//   console.log("Lương thực nhận là:", receiveSalary);
// } else {
//   receiveSalary = salary - salary * 0.1;
//   console.log("Lương thực nhận là:", receiveSalary);
// }
