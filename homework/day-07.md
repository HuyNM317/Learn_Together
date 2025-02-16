# Bài tập về nhà buổi 07

### **Bài 1: Tạo và quản lý người dùng bằng Function Constructor**

**Đề bài:** Tạo một `function constructor` có tên `User` để tạo các đối tượng người dùng với các thuộc tính `name`, `email`, và `role`. Thêm một phương thức `changeRole` vào `prototype` của `User` để thay đổi vai trò của người dùng.

```js
const user1 = new User("Alice", "alice@example.com", "user");
console.log(user1); // {name: "Alice", email: "alice@example.com", role: "user"}

user1.changeRole("admin");
console.log(user1); // {name: "Alice", email: "alice@example.com", role: "admin"}
```

---

### **Bài 2: Kiểm tra dữ liệu sản phẩm**

**Đề bài:** Viết function `validateProducts(products)` để kiểm tra danh sách sản phẩm. Một sản phẩm hợp lệ khi:

- `id` là số nguyên dương
- `name` là chuỗi không rỗng
- `price` là số dương

Trả về một object gồm hai danh sách: `validProducts` và `invalidProducts`.

#### **Input:**

```js
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: -2, name: "Phone", price: 800 },
  { id: 3, name: "", price: 500 },
  { id: 4, name: "Tablet", price: -100 },
];
```

#### **Output mong muốn:**

```js
{
  validProducts: [
    { id: 1, name: 'Laptop', price: 1200 }
  ],
  invalidProducts: [
    { id: -2, name: 'Phone', price: 800 },
    { id: 3, name: '', price: 500 },
    { id: 4, name: 'Tablet', price: -100 }
  ]
}
```

---

### **Bài 3: Chuyển đổi cấu trúc dữ liệu logs**

**Đề bài:** Viết function `transformLogs(logs)` để chuyển đổi danh sách logs dạng mảng thành object theo `userId`.

#### **Input:**

```js
const logs = [
  { userId: 1, action: "login", timestamp: 1700000000 },
  { userId: 2, action: "logout", timestamp: 1700000500 },
  { userId: 1, action: "view", timestamp: 1700001000 },
];
```

#### **Output mong muốn:**

```js
{
  1: [
    { action: 'login', timestamp: 1700000000 },
    { action: 'view', timestamp: 1700001000 }
  ],
  2: [
    { action: 'logout', timestamp: 1700000500 }
  ]
}
```

---

### **Bài 4: Cho danh sách sinh viên, viết hàm thực hiện các công việc sau:**

**Đề bài:**

- Tìm ra sinh viên có điểm cao nhất lớp và sinh viên có điểm thấp nhất lớp.

- Nhóm các sinh viên thành các nhóm dựa trên điểm số, nhóm A (điểm từ đủ 8 đến 10), nhóm B (điểm từ đủ 6 đến nhỏ hơn 8), nhóm C (điểm từ đủ 4 đến nhỏ hơn 6), nhóm D còn lại.

#### **Input:**

```js
const students = [
  { name: "Nguyen Van A", score: 9 },
  { name: "Tran Thi B", score: 7 },
  { name: "Le Van C", score: 5 },
  { name: "Pham Thi D", score: 3 },
  { name: "Doan Van E", score: 10 },
  { name: "Hoang Thi F", score: 6 },
];
```

#### **Output mong muốn:**

```js
{
    highest: { name: 'Doan Van E', score: 10 },
    lowest: { name: 'Pham Thi D', score: 3 },
    group: {
        A: [
            { name: 'Nguyen Van A', score: 9 },
            { name: 'Doan Van E', score: 10 },
        ],
        B: [
            { name: 'Tran Thi B', score: 7 },
            { name: 'Hoang Thi F', score: 6 },
        ],
        C: [
            { name: 'Le Van C', score: 5 },
        ],
        D: [
            { name: 'Pham Thi D', score: 3 },
        ],
    },
}
```
