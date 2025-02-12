# Bài tập buổi 05

## Bài 01: Tìm sản phẩm theo tên

Từ màn hình nhập vào cửa sổ prompt chuỗi bất kỳ. Viết chương trình in ra màn hình các sản phẩm có tên chứa chuỗi vừa nhập (Không kể chữ in hoa hay chữ in thường).

Cho trước mảng sản phẩm:

```js
const products = [
  { id: "1OT22W006", name: "Girls Windbreaker Jacket" },
  { id: "1OT22W009", name: "Boys T-shirt" },
  { id: "1OT22W032", name: "Boys Shirt" },
  { id: "1OT22W011", name: "Men's Super Warm Jacket" },
  { id: "1OT22W000", name: "Women's Party Dress" },
];

// Output:

// Nếu nhập chuỗi "jacket" cần in ra màn hình sản phẩm { id: "1OT22W006", name: "Girls Windbreaker Jacket" } và sản phẩm { id: "1OT22W011", name: "Men's Super Warm Jacket" }.
```

## Bài 02: Làm sạch dữ liệu

Có một raw data (dữ liệu thô) về users chưa được làm sạch, cần duyệt qua mảng dữ liệu này với tên không được mang giá trị falsy (0, '', null, undefined, NaN) và tuổi không được mang giá trị falsy + không được là số âm.

Vi phạm một trong 2 điều kiện trên thì sẽ bị loại khỏi mảng gốc và thêm vào một mảng mới với tên là invalidData.

```js
const datas = [
  { name: "Alice", age: 20 },
  { name: "Bob", age: 0 },
  { name: "Carol", age: -1 },
  { name: "David", age: null },
  { name: "Eve", age: NaN },
  { name: "Frank", age: undefined },
  { name: "", age: 20 },
];

// Output:

const validData = [{ name: "Alice", age: 20 }];

const invalidData = [
  { name: "Bob", age: 0 },
  { name: "Carol", age: -1 },
  { name: "David", age: null },
  { name: "Eve", age: NaN },
  { name: "Frank", age: undefined },
  { name: "", age: 20 },
];
```

## Bài 03: Tính tổng giá trị đơn hàng

Viết hàm calculateOrderTotal nhận vào một mảng các đơn hàng, mỗi đơn hàng bao gồm id, name, quantity, price. Hàm trả về tổng giá trị của tất cả các đơn hàng.

```js
const orders = [
  { id: "1", name: "A", quantity: 2, price: 100 },
  { id: "2", name: "B", quantity: 1, price: 200 },
  { id: "3", name: "C", quantity: 3, price: 300 },
];

// Output: 1300
```

## Bài 04: Sắp xếp danh sách học viên theo tên

Yêu cầu cụ thể:

- Sắp xếp danh sách học viên theo thứ tự bảng chữ cái.

- Nếu tên học viên trùng nhau thì sắp xếp theo tên đệm và họ.

- Nếu cả tên, họ và tên đệm đều trùng nhau thì để theo thứ tự mặc định.

- In ra danh sách học viên sau khi đã sắp xếp.

```js
// Input:
const students = [
  { id: 1, name: "Nguyen Manh Huy", age: 18 },
  { id: 2, name: "Nguyen Thanh An", age: 18 },
  { id: 3, name: "Phan Tuan Manh", age: 18 },
  { id: 4, name: "Nguyen Truong Giang", age: 15 },
  { id: 5, name: "Tran Ngoc Duy", age: 18 },
  { id: 6, name: "Hoang Thanh Huy", age: 18 },
  { id: 7, name: "Nguyen The Han", age: 18 },
  { id: 8, name: "Le Huu Trong", age: 17 },
  { id: 9, name: "Vu Quoc Dung", age: 18 },
  { id: 10, name: "Nguyen Hai Duong", age: 18 },
  { id: 11, name: "Nguyen Trung Hieu", age: 18 },
  { id: 12, name: "Tran Duy Dong", age: 18 },
  { id: 13, name: "Tran Minh Hoang", age: 18 },
  { id: 14, name: "Nguyen Minh Hoang", age: 18 },
  { id: 15, name: "Nhung", age: 18 },
  { id: 16, name: "Nguyễn Nhung", age: 18 },
];
```

```js
// Output:
[
  { id: 2, name: "Nguyen Thanh An", age: 18 },
  { id: 12, name: "Tran Duy Dong", age: 18 },
  { id: 9, name: "Vu Quoc Dung", age: 18 },
  { id: 10, name: "Nguyen Hai Duong", age: 18 },
  { id: 5, name: "Tran Ngoc Duy", age: 18 },
  { id: 4, name: "Nguyen Truong Giang", age: 15 },
  { id: 7, name: "Nguyen The Han", age: 18 },
  { id: 11, name: "Nguyen Trung Hieu", age: 18 },
  { id: 14, name: "Nguyen Minh Hoang", age: 18 },
  { id: 13, name: "Tran Minh Hoang", age: 18 },
  { id: 6, name: "Hoang Thanh Huy", age: 18 },
  { id: 1, name: "Nguyen Manh Huy", age: 18 },
  { id: 3, name: "Phan Tuan Manh", age: 18 },
  { id: 15, name: "Nhung", age: 18 },
  { id: 16, name: "Nguyễn Nhung", age: 18 },
  { id: 8, name: "Le Huu Trong", age: 17 },
];
```
