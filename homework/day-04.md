# Bài tập về nhà buổi 04

**_Bài tập về nhà lần này anh sẽ có 2 lựa chọn để làm. Lựa chọn thứ nhất là anh sẽ hoàn thành bài tập theo yêu cầu như trong video và mức độ khó của bài tập sẽ cao hơn một chút đối với những dạng mà em đã hướng dẫn anh trong buổi học, còn lựa chọn thứ 2 là anh sẽ cần phải tìm hiểu trước một chút thao tác với object để hoàn thành bài tập nha._**

## Lựa chọn 1:

### Hoàn thành bài tập theo yêu cầu trong video sau: [https://www.youtube.com/watch?v=L6fG2DhKjnw](https://www.youtube.com/watch?v=L6fG2DhKjnw) theo 2 cách.

- Cách 1: Sử dụng mảng

- Cách 2: Không sử dụng mảng

## Lựa chọn 2:

**Một số thao tác với object**

```js
//Truy cập vào key trong object
//Cách 1: tenobject.tenkey
//Cách 2: tenobject['tenkey']
// console.log(user.name);
// console.log(user.email);
// console.log(user["address"]);
// console.log(user.getName());

//Thêm key mới vào trong object
// user.age = 31;
// user["job"] = "Teacher";

// //Cập nhật giá trị của key đã tồn tại
// user.age = 32;
// user["address"] = "Nam Từ Liêm - HN";

// //Xóa
// delete user.age;
```

### **Bài 1: Lọc sản phẩm theo danh mục**

**Tình huống thực tế:** Trong một ứng dụng thương mại điện tử, cần lọc danh sách sản phẩm theo danh mục mà người dùng chọn.

**Yêu cầu:**  
Viết hàm `filterProductsByCategory(products, category)` để lọc danh sách sản phẩm theo danh mục.

**Dữ liệu mẫu:**

```js
let products = [
  { id: 1, name: "Laptop", category: "Electronics" },
  { id: 2, name: "Shirt", category: "Clothing" },
  { id: 3, name: "Phone", category: "Electronics" },
  { id: 4, name: "Shoes", category: "Clothing" },
];

console.log(filterProductsByCategory(products, "Electronics"));
// Kết quả mong muốn: [{ id: 1, name: "Laptop", category: "Electronics" }, { id: 3, name: "Phone", category: "Electronics" }]
```

---

### **Bài 2: Phân trang dữ liệu (Pagination)**

**Tình huống thực tế:** Khi hiển thị danh sách bài viết trên một trang web, cần chia nhỏ danh sách thành từng trang.

**Yêu cầu:**  
Viết hàm `paginateData(data, page, pageSize)` để lấy danh sách phần tử thuộc trang `page`, mỗi trang chứa `pageSize` phần tử.

**Dữ liệu mẫu:**

```js
let posts = [
  "Post 1",
  "Post 2",
  "Post 3",
  "Post 4",
  "Post 5",
  "Post 6",
  "Post 7",
  "Post 8",
  "Post 9",
  "Post 10",
];

console.log(paginateData(posts, 2, 3));
// Kết quả mong muốn: ["Post 4", "Post 5", "Post 6"]
```

---

### **Bài 3: Gộp giỏ hàng từ nhiều nguồn**

**Tình huống thực tế:** Một người dùng có thể thêm sản phẩm vào giỏ hàng từ nhiều thiết bị khác nhau. Khi đăng nhập, cần gộp tất cả sản phẩm lại, tăng số lượng nếu sản phẩm trùng nhau.

**Yêu cầu:**  
Viết hàm `mergeCarts(cart1, cart2)` để gộp hai giỏ hàng lại thành một.

**Dữ liệu mẫu:**

```js
let cart1 = [
  { id: 1, name: "Laptop", quantity: 1 },
  { id: 2, name: "Mouse", quantity: 2 },
];

let cart2 = [
  { id: 1, name: "Laptop", quantity: 2 },
  { id: 3, name: "Keyboard", quantity: 1 },
];

console.log(mergeCarts(cart1, cart2));
// Kết quả mong muốn:
// [
//   { id: 1, name: "Laptop", quantity: 3 },
//   { id: 2, name: "Mouse", quantity: 2 },
//   { id: 3, name: "Keyboard", quantity: 1 }
// ]
```
