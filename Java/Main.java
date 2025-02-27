// Xây dựng lớp Tài Khoản với các thuộc tính:

// id
// tên tài khoản
// danh sách các ghi chú của người dùng tài khoản; mỗi ghi chú có nội dung, id và ngày ghi chú
// và các phương thức:

// khởi tạo
// thêm ghi chú
// chia sẻ ghi chú cho tài khoản khác
// Một số ràng buộc như sau:

// id là một chuỗi 3 kí tự bắt đầu từ "001".
// tên tài khoản là một chuỗi kí tự
// ngày ghi chú có dạng: MMMDDYY, với MMM có thể là (Jan | Feb | Mar | ... | Dec), DD là ngày, YY là năm
// id ghi chú là một số nguyên dương bắt đầu từ 1, tự động tăng khi tài khoản được thêm hoặc được chia sẻ ghi chú

// Dữ liệu vào
// Dữ liệu vào là một testcase.

// Dòng đầu tiên là số lượng tài khoản khởi tạo 
// n
// n

// n
// n dòng tiếp theo, mỗi dòng là một tên tài khoản

// Các dòng sau đó theo định dạng:
// [id] [lựa chọn] [nội dung]

// trong đó:

// [id] là tài khoản sẽ thực hiện tác vụ trong [lựa chọn]

// [lựa chọn] có thể là một trong hai trường hợp: 1)thêm ghi chú: [lựa chọn] = Add; 2) chia sẻ ghi chú:[lựa chọn] = Share

// +) với thêm ghi chú: [nội dung] là ngày ghi chú theo định dạng, theo sau là nội dung ghi chú

// +) với chia sẻ ghi chú: [nội dung] là id của người dùng được chia sẻ, theo sau là id ghi chú


// Dữ liệu ra
// In ra tất cả ghi chú của các tài khoản theo định dạng:
// Account: tên-tài-khoản

// ngày-ghi-chú | _nội-dung-ghi-chú__

// ...

// Với tất cả dữ liệu vào không đúng theo định dạng, dữ liệu ra sẽ là: invalid input


// Ví dụ
// Input #1 

// 2
// hanoi
// hoabinh
// 001 Add Jan0123 Ngay dau tien nam 2023
// 001 Add Jan0223 Ngay thu hai nam 2023
// 001 Share 002 1
// Output #1 

// Account: hanoi
// 01 Jan 23 | Ngay dau tien nam 2023
// 02 Jan 23 | Ngay thu hai nam 2023
// Account: hoabinh
// 01 Jan 23 | Ngay dau tien nam 2023



import java.util.ArrayList;
import java.util.Scanner;

class Account {
    private String id;
    private String name;
    private ArrayList<Note> notes;

    public Account(String id, String name) {
        this.id = id;
        this.name = name;
        this.notes = new ArrayList<>();
    }

    public void addNote(String date, String content) {
        int id = notes.size() + 1;
        notes.add(new Note(id, date, content));
    }

    public void shareNoteTo(Account account, int noteId) {
        Note note = notes.get(noteId - 1);
        account.notes.add(note);
    }

    public void printNotes() {
        System.out.println("Account: " + name);
        for (Note note : notes) {
            System.out.println(note);
        }
    }
}

class Note {
    private int id;
    private String date;
    private String content;

    public Note(int id, String date, String content) {
        this.id = id;
        this.date = date;
        this.content = content;
    }

    @Override
    public String toString() {
        return String.format("%02d %s | %s", id, date, content);
    }
}

public class Main {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        scanner.nextLine();
        Account[] accounts = new Account[n];
        for (int i = 0; i < n; i++) {
            String name = scanner.nextLine();
            accounts[i] = new Account(String.format("%03d", i + 1), name);
        }
        while (scanner.hasNext()) {
            String[] tokens = scanner.nextLine().split(" ");
            if (tokens.length < 4) {
                System.out.println("invalid input");
                return;
            }
            int accountId = Integer.parseInt(tokens[0]) - 1;
            String action = tokens[1];
            String date = tokens[2];
            String content = tokens[3];
            if (action.equals("Add")) {
                accounts[accountId].addNote(date, content);
            } else if (action.equals("Share")) {
                int targetAccountId = Integer.parseInt(content) - 1;
                int noteId = Integer.parseInt(tokens[4]);
                accounts[accountId].shareNoteTo(accounts[targetAccountId], noteId);
            }
        }
        for (Account account : accounts) {
            account.printNotes();
        }
    }
}

