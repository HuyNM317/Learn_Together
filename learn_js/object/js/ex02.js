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
  getInfo: function () {
    const temp = () => {
      console.log(this);
    };
    temp();
  },
  getEmail: () => {
    console.log(this);
  },
};

users.getInfo();

// function temp() {
//   let x = 10;
//   return x;
// }

// temp();
