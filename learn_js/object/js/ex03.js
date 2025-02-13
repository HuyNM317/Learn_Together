// Prototype

let users = {
  name: "Huy",
  email: "huy@gmail.com",
  detail: {
    age: 21,
    job: "Dev",
    histories: [
      {
        year: 2020,
        name: "Job 1",
      },
      {
        year: 2022,
        name: "Job 2",
      },
    ],
  },

  getEmail: () => {
    console.log(this);
  },
};

let users2 = {
  name: "Duy",
  email: "huy@gmail.com",
  detail: {
    age: 21,
    job: "Dev",
    histories: [
      {
        year: 2020,
        name: "Job 1",
      },
      {
        year: 2022,
        name: "Job 2",
      },
    ],
  },

  getEmail: () => {
    console.log(this);
  },
};

// console.log(Object.prototype.getInfo());

Object.prototype.getInfo = function (name, email) {
  console.log(this);

  return name + " " + email;
};

// Object.prototype.message = "Riba";

let info = users.getInfo(users.name, users.email);
// let info2 = users2.getInfo(users2.name, users2.email);
// console.log(info.message);

// let str = "huy";

// console.log(str.message);

// console.log(info);
// console.log(info2);

// function temp() {
//   console.log("ok");
// }
// temp();
