// Object = Đối tượng

// Object Literal: Đối tượng nguyên bản (gốc rễ)

// Function Constructor: Hàm tạo (Number, new String)

let users = {
  1: "Huy",
  age: 21,
  email: "huy@gmail.com",
  address: "Ha Noi",
  "shipping-address": "Hoai Duc",
  getName: function () {
    return "ok";
  },
};

// console.log(users["as"]);

// function temp() {
//   console.log(arguments);
// }

// temp(1, 2, 3, 4);
// console.log(users["shipping-address"]);

// let arr = [
//   ["name", "Duy"],
//   ["age", "25"],
// ];

// for (let value of arr) {
//   users.value = value[1];
// }
// console.log(users);

// users.'name'

// shipping-address

// users.shipping-address = 'Hoai Duc';

// users["shipping-address"] = "Yen So";
// console.log(users);

// Thêm mới

// users.height = 170;
// users["weight"] = 65;

// delete users.name;
// console.log(users);

// for (let key in users) {
//   //   console.log(users[key]);
// }

// console.log(1);

// const arrKeys = Object.keys(users).forEach((item) => {
//   console.log(item, users[item]);
// });

// console.log(arrKeys);
