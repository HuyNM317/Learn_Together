# Bài tập về nhà buổi 06

## Bài 1: Mô phỏng tính năng đăng ký, đăng nhập

### Viết 1 để thực hiện đăng ký và hàm sẽ có 3 tham số: name, password và email.

Tạo một hàm register nhận vào nhiều tham số để thực hiện đăng ký, nếu đăng ký thành công thì đẩy dữ liệu vào mảng data.

Yêu cầu:

- Kiểm tra tất cả thông tin có đầy đủ không, nếu không đủ, báo lỗi và dừng chương trình.

- Nếu đăng ký thêm một lần nữa, phải trả về được thông tin 2 người.

- Tự động thêm `role: "user"` cho mỗi đối tượng.

### Tạo một hàm login nhận vào 2 tham số email và password.

Yêu cầu:

- Nếu thông tin hợp lệ với một trong các đối tượng đã đăng ký ở trên, trả về thông tin của đối tượng đó.

- Nếu không, báo cho người dùng rằng “Thông tin đăng nhập không hợp lệ”.

Input:

```js
const data = [];
const dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);
const dataRegister = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);
const dataLogin = handleLogin("nguyenvanb@email.com", "1234567");
```

Output:

```js
data = [
  {
    name: "Nguyen Van A",
    password: "123456",
    email: "nguyenvana@email.com",
    role: "user",
  },
  {
    name: "Nguyen Van B",
    password: "1234567",
    email: "nguyenvanb@email.com",
    role: "user",
  },
];
dataLogin = {
  name: "Nguyen Van B",
  password: "1234567",
  email: "nguyenvanb@email.com",
  role: "user",
};
```

## Bài 2: (Vận dụng vòng lặp reduce)

Yêu cầu:
Viết một hàm `getAllEmails` nhận vào một mảng chứa các đối tượng người dùng đã đăng ký và sử dụng vòng lặp reduce để trả về một mảng chỉ chứa `email` của tất cả người dùng.

Input:

```js
const users = [
  {
    name: "Nguyen Van A",
    password: "123456",
    email: "nguyenvana@email.com",
    role: "user",
  },
  {
    name: "Nguyen Van B",
    password: "1234567",
    email: "nguyenvanb@email.com",
    role: "user",
  },
];

const emails = getAllEmails(users);
```

Output:

```js
["nguyenvana@email.com", "nguyenvanb@email.com"];
```
