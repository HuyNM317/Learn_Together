// const title = document.querySelector("h1");

// console.log(title);

// console.log(title.classList);

// Các phương thức xử lý class

// 1. add() => Thêm class vào element

// title.classList.add("name", "sub-title");
// console.log(title.classList);

// 2. remove() => xóa class trong element

// title.classList.remove("title", "heading");

// 3. contains() => kiểm tra xem class có tồn tại không

// console.log(title.classList.contains("abc"));

// 4. toggle()

// - Thêm class nếu element chưa có class đó
// - Xóa class nếu element đã có class đó

// title.classList.toggle("title");
const toggleBtn = document.querySelector(".toggleBtn");
const textContent = document.querySelector("p");

const unDisplay = () => {
  textContent.classList.toggle("un-display");
  if (textContent.classList.contains("un-display")) {
    toggleBtn.innerText = "Hiện";
  } else {
    toggleBtn.innerText = "Ẩn";
  }
};

toggleBtn.onclick = unDisplay;
