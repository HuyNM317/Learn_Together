// Tính bât biến của kiểu dữ liệu nguyên thủy

// let str = "Huy";
// str[0] = "D";

// // str = "Duy";

// console.log(str);

// const arr = [1, 2, 3, 4];

// arr[0] = 10;
// console.log(arr);

// Short hand

// const name = "Huy";
// const age = 21;

// const user = {
//   fullName: name,
//   age,
// };

// console.log(user);

// const

//  Enhance Object Literal

// function handleRegister(email, password) {
//   // validate

//   data.push({
//     email,
//     password,
//   });
// }

// Computed Property Name

// const property = "name";

// const user = {
//   firstName: "Nguyen",
//   [property]: "Huy",
// };

// console.log(user);

// let & const

// const result = ...
// c
// let n = 100;

// while (n > 0) {
//   console.log(n);
//   n--;
// }

// const user = {
//   fullName: "Huy",
//   age: 21,
//   address: "Ha Noi",
// };

// // console.log(Object.keys(user));

// // console.log(Object.values(user));

// console.log(Object.entries(user));

// Bài tập: Viết một hàm kiểm tra xem đối số truyền vào có phải là một object hay không?

// console.log(typeof user);

// console.log(typeof 12);

// function isObject(value) {
//   if (typeof value === "object" && value !== null && !Array.isArray(value)) {
//     return "Đối số truyền vào là Object";
//   } else {
//     return "Đối số truyền vào KHÔNG PHẢI là Object";
//   }
// }

// console.log(isObject(user));

// const options = {
//   limit: 10,
//   page: 1,
//   keyword: "du an 1",
// };

// `?limit=${limit}&page=${page}&keyword=du+an+1`;
// const options = {
//   limit: 20,
//   page: 1,
//   keyword: "du an 1",
//   category: "fairy tail",
//   obj: {
//     key: "ok",
//   },
// };

// // const options =

// const temp = Object.entries(options);
// console.log(temp);
// console.log(Object.fromEntries(temp));

// function query(limit, page, keyword) {
//   options.limit = limit;
//   options.page = page;
//   options["keyword"] = keyword;

//   console.log(options);
//   return `?limit=${options["limit"]}&page=${options["page"]}&keyword=${options[
//     "keyword"
//   ].replaceAll(" ", "+")}`;
// }

// console.log(query(30, 2, "du an 2"));

// console.log(
//   `?${Object.entries(options)
//     .map((item) => {
//       return item.join("=");
//     })
//     .join("&")
//     .replaceAll(" ", "+")}`
// );

// let queryString = `?limit=20&page=1&keyword=du+an+1&category=fairy+tail`;

// queryString = queryString.slice(1);

// console.log(
//   Object.fromEntries(
//     queryString.split("&").map((item) => {
//       let temp = item.split("=");
//       temp[1] = temp[1].replaceAll("+", " ");
//       return temp;
//     })
//   )
// );

// Mảng 2 chiều là một mảng mà các phần tử của nó cũng là mảng

// Object.assign(target, ...source)

// const target = {
//   a: 1,
//   b: 2,
// };

// const source = {
//   c: 3,
//   d: 4,
// };

// const obj = {
//   e: 5,
//   f: 6,
// };

// const result = Object.assign(target, source, obj);

// console.log(result);
// console.log(target);
// const obj = {
//   name: "huy",
// };

// Object.freeze(obj);

// obj.name = "Duy";
// obj.age = 18;

// delete obj.name;

// console.log(obj);

// const obj = {
//   name: "huy",
// };

// Object.seal(obj);

// obj.name = "Duy";

// obj.age = 25;

// delete obj.name;

// console.log(obj);
