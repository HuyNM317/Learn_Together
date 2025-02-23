// DOM Element: Quá trình tạo ra Element Node để thao tác với các thẻ html

// 1. Truy xuất thông qua id

// const dom = document.getElementById("dom");

// console.dir(dom);

// 2. Truy xuất thông qua class

// => Trả về một danh sách các element có cùng class
// => Muốn truy cập tới một element cụ thể => lặp qua từng phần tử

// const dom2 = document.getElementsByClassName("dom");
// console.log(dom2);

// Array.from(dom).forEach((item) => {
//   console.log(item);
// });

// 3. Truy xuất thông qua tên thẻ HTML

// const dom = document.getElementsByTagName("h2");

// console.log(dom);

// 4. Truy xuất thông qua selector css (trả về phần tử đầu tiên)

// const dom = document.querySelector("#dom");

// console.log(dom);

// 5. Truy xuất phần tử thông qua selectors css (lấy toàn bộ)

// const dom = document.querySelectorAll(".dom");
// console.log(result[1]);
// console.log(dom);

// const result = document.querySelectorAll("li");
// console.log(result[1]);

// const li = document.querySelector(".list-item ul>li:nth-child(2)");

// console.log(li.innerHTML);

// Một số trường hợp đặc biệt:
// - Truy xuất vào thẻ head: document.head
// - Truy xuất vào thẻ body: document.body
// - Truy cập vào form: document.ten thuoc tinh name

// const head = document.head;

// console.log(head);

// const body = document.body;

// console.log(body);

// const form = document.form.btn;

// console.log(form);

// const ul = document.querySelector(".list-item");

// const liList = ul.querySelectorAll("li");
// console.log(liList);
