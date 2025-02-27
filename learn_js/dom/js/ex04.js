// DOM HTML: Làm việc với thuộc tính

// 1. thuộc tính có sẵn của thẻ html

// tenElement.tenThuocTinh => lấy được giá trị của thuộc tính
// tenElement.tenThuocTinh = giá trị => Thiết lập giá trị mới cho thuộc tính

// 2. Thuộc tính không có sẵn của thẻ html

// Data Attribute:
// data-*

const img = document.querySelector("img");

// Đọc thuộc tính
// console.log(img.src);
// console.log(img.alt);
// console.log(img.title);

// console.log(img.width);

// img.src = `https://picsum.photos/500/300`;
// img.alt = "ok";

// console.log(img.ok);

// console.log(img.getAttribute("data-ok"));

// console.log(img.dataset.ok);

// img.addEventListener("click", function (e) {
//   console.log(e.target.dataset.id);
// });

// img.setAttribute("data-id", "ok nha");

// img.removeAttribute("data-id");

// console.log(img.dataset.id);

// img.remove();
