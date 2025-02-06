// Chữa bài tập buổi 03

// Bài 1:

const printFibonacci = (n, a = 1, b = 1, result = "") => {
  if (n === 0) return result.trim();
  return printFibonacci(n - 1, b, a + b, result + a + " ");
};

// 1 1 2
// 1 1 2 3 5 8 13 21 34 55

// console.log(printFibonacci(10));

// Bài 2:

const fullName = " nGuyễN MẠnh hUY   ";

const standardizeName = (fullname) => {
  fullname = fullname.trim();
  fullname = fullname.toLowerCase(); // "nguyễn mạnh huy"
  fullname = fullname.charAt(0).toUpperCase() + fullname.slice(1); // Nguyễn Mạnh Huy

  for (let i = 1; i < fullname.length; i++) {
    let char = fullname.charAt(i);
    if (char === " ") {
      let index = i + 1;
      fullname =
        fullname.slice(0, index) +
        fullname.charAt(index).toUpperCase() +
        fullname.slice(index + 1);
    }
  }
  return fullname;
};

console.log(standardizeName(fullName));
