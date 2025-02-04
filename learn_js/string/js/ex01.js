// Chuỗi (String): nGUYÊN thủy
// - Tập hợp các ký tự
// - Để xử lý chuỗi:
// + Học các hàm để xử lý chuỗi
// + Tìm hiểu một số giải thuật liên quan đến xử lý chuỗi
// + Cách đọc các ký tự trong chuỗi

// Khai báo một chuỗi:

// let str = "Huy";
// console.log(str);

// let temp = String("Huy");
// console.log(typeof temp);

// let a = new String("Huy");
// console.log(typeof a);

// Các thuộc tính và phương thức:
let temp = "Javascript";
// 1. .length

// console.log("Huy".length);

// 2. charAt(index) => Trả về ký tự tại vị index (index bắt đầu từ 0)
// console.log(temp.charAt(9));

// 3. charCodeAt(index) => Trả về mã ASCII của ký tự theo index
// console.log(temp.charCodeAt(3));

// 4. concat(value1, value2, ....) => nối các chuỗi lại với nhau

// 5. indexOf(value) => Trả về index của ký tự (trả về vị trí đầu tiên), nếu không nó sẽ trả về -1

// 6. lastIndexOf(value) => Trả về index của ký tự cuối cùng được tìm thấy, ........

// 7. includes(value) => Tìm chuỗi con trong chuỗi cha và trả về true/false

// 8. slice(start, end) => Cắt từ start đến end - 1

// console.log(temp.slice(-8));

// Bài tập: Cắt username của email

// let email = "huynm@fullstack.edu.vn";

// let index = email.indexOf("@");

// let userName = email.slice(0, index);

// console.log(userName);

// 9. replace(search, with) => Tìm kiếm và thay thế chuỗi đầu tiên tìm được

// 10. replaceAll(search, with) => Tìm kiếm và thay thế toàn bộ chuỗi tìm được

// 11. split(value) => Tách chuỗi thành mảng dựa vào ký tự phân cách

// console.log(temp.split(""));

// 12. toLowerCase và toUpperCase => Chuyển toàn bộ thành chữ hoa hoặc chữ hoa

// 13. trim() => loại bỏ khoảng trắng ở hai đầu ký tự
// Loại bỏ ở đầu: trimStart()
// Loại bỏ ở sau: trimEnd()

// Kiểm tra chuỗi có được viết hoa toàn bộ hay không?
let fullName = "Nguyễn Mạnh Huy";
