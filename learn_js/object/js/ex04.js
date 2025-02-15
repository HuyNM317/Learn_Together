// // // Function constructor

// // // Không sử dụng arrow function để tạo hàm tạo (không binding được this)

// // function User(name, age, job) {
// //   this.name = name;
// //   this.age = age;
// //   this.job = job;
// //   this.address = "";
// // }

// // // const user1 = {
// // //   name: "Huy",
// // //   address: "Hanoi",
// // //   job: "dev",
// // // };
// // // const user2 = {
// // //   name: "Duy",
// // //   age: 25,
// // //   job: "Owner",
// // // };

// // const user1 = new User("Huy", 21, "Dev");
// // const user2 = new User("Duy", 21, "Dev");

// // console.log(user1);
// // console.log(user2);

// // Cơ chế autoboxing trong js

// // const str = "Huy";
// // console.log(new String("Huy"));

// // console.log(str.length);

// // console.log(str[0]);

// // const user = {
// //   name: "Duy",
// //   getName: function () {
// //     return this.name;
// //   },
// // };

// // console.log(user["name"]);

// // console.log(user.name);
// // console.log(user.getName());

// // Prototype chain (Chuỗi prototype)
// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   console.log(`Hi ${this.name}`);
// };

// const huy = new Person("Huy");

// // instance < Function Constructor

// // console.log(huy instanceof Person);

// // huy.sayHi();

// // console.log(huy._);
// // // console.log(Person.prototype);

// Object.prototype.message = "Hello";

// const str = new String("Huy");

// console.log(str.message);
