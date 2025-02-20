// Deep copy and Shallow copy

// Shallow copy (copy nông)

// const obj1 = {
//   name: "Huy",
//   age: 21,
//   profile: {
//     job: "Dev",
//     exp: 1,
//   },
// };

// const obj2 = {
//   name: "Duy",
//   age: 24,
//   profile: {
//     job: "Dev",
//     exp: 2,
//   },
// };

// const obj2 = { ...obj1 };

// Object.assign(obj2, obj1);

// obj2.name = "An";
// obj2.age = 18;

// obj2.profile.exp = 4;
// console.log("obj2", obj2);
// console.log("obj1", obj1);

// Deep copy (Copy sâu)

// const obj1 = {
//   name: "Huy",
//   age: 21,
//   profile: {
//     job: "Dev",
//     exp: 1,
//   },
// };

// const obj2 = JSON.parse(JSON.stringify(obj1));
// // console.log(obj2);

// obj2.name = "An";
// obj2.age = 18;

// obj2.profile.exp = 4;
// console.log("obj2", obj2);
// console.log("obj1", obj1);

// const obj1 = {
//   name: "Huy",
//   age: 21,
//   profile: {
//     job: "Dev",
//     exp: 1,
//   },
// };

// const obj2 = structuredClone(obj1);
// // console.log(obj2);

// obj2.name = "An";
// obj2.age = 18;

// obj2.profile.exp = 4;
// console.log("obj2", obj2);
// console.log("obj1", obj1);
