# 📋 PHIẾU BÀI TẬP 09
# **DOM MANIPULATION & EVENTS**
## PHẦN A — KIỂM TRA ĐỌC HIỂU (15 điểm)

### Câu A1 (5đ) — DOM Tree

Cho HTML:

```html
<div id="app">
    <header>
        <h1>Todo App</h1>
        <nav>
            <a href="#" class="active">All</a>
            <a href="#">Active</a>
            <a href="#">Completed</a>
        </nav>
    </header>
    <main>
        <form id="todoForm">
            <input id="todoInput" type="text">
            <button type="submit">Add</button>
        </form>
        <ul id="todoList">
            <li class="todo-item">Learn HTML</li>
            <li class="todo-item completed">Learn CSS</li>
        </ul>
    </main>
</div>
```

1. Vẽ DOM tree (sơ đồ cây) cho HTML trên

```
div#app
 ├── header
 │    ├── h1 (text: "Todo App")
 │    └── nav
 │         ├── a.active (text: "All", href: "#")
 │         ├── a (text: "Active", href: "#")
 │         └── a (text: "Completed", href: "#")
 └── main
      ├── form#todoForm
      │    ├── input#todoInput (type: "text")
      │    └── button (type: "submit", text: "Add")
      └── ul#todoList
           ├── li.todo-item (text: "Learn HTML")
           └── li.todo-item.completed (text: "Learn CSS")

```

2. Viết **querySelector** cho mỗi yêu cầu:
- Chọn thẻ <h1>: document.querySelector('h1') (hoặc document.querySelector('header h1'))
- Chọn input trong form: document.querySelector('#todoInput') (hoặc document.querySelector('#todoForm input'))
- Chọn tất cả .todo-item: document.querySelectorAll('.todo-item') (Lưu ý: Phải dùng querySelectorAll để lấy danh sách).
- Chọn link đang active: document.querySelector('a.active')
- Chọn <li> đầu tiên trong #todoList: document.querySelector('#todoList li:first-child') (hoặc document.querySelector('#todoList li') vì querySelector mặc định lấy phần tử đầu tiên).

### Câu A2 — innerHTML vs textContent
1. Sự khác nhau giữa innerHTML và textContent
- innerHTML: Lấy ra hoặc thiết lập nội dung HTML bên trong một phần tử. Khi gán giá trị mới bằng innerHTML, trình duyệt sẽ phân tích cú pháp chuỗi đó thành các thẻ HTML (DOM nodes) và render chúng lên giao diện.
- textContent: Lấy ra hoặc thiết lập nội dung văn bản thuần túy (plain text). Nó bỏ qua tất cả các thẻ HTML, không phân tích cú pháp HTML. Bất kỳ thẻ nào được gán vào cũng sẽ bị biến thành chữ hiển thị thông thường.
- Dùng innerHTML khi thực sự muốn tạo ra các cấu trúc HTML mới (ví dụ: in ra một danh sách `<ul><li>...</li></ul>` từ dữ liệu an toàn của server).
- Dùng textContent khi bạn chỉ muốn hiển thị văn bản và đặc biệt là khi in ra dữ liệu do người dùng nhập vào, để đảm bảo an toàn.
2. Tại sao innerHTML gây lỗ hổng XSS?
- XSS (Cross-Site Scripting) xảy ra khi kẻ tấn công chèn các đoạn mã độc hại (thường là JavaScript) vào trang web của bạn.
- Vì innerHTML ra lệnh cho trình duyệt đọc và thực thi chuỗi truyền vào như một đoạn HTML/JS thực thụ, nên nếu dùng innerHTML để in dữ liệu người dùng nhập, các đoạn mã độc như thẻ <script> hoặc các thuộc tính sự kiện (như onerror, onload) sẽ bị kích hoạt. Hậu quả là hacker có thể đánh cắp cookie, token, hoặc điều khiển phiên đăng nhập của người dùng
3. Ví dụ và Cách sửa lỗi
```javascript
const userInput = document.querySelector("#search").value;
document.querySelector("#result").textContent = userInput; 
```
- Chỉ cần thay innerHTML bằng textContent. Lúc này, trình duyệt sẽ coi toàn bộ đoạn ```<img src=x onerror="alert('Hacked!')">``` chỉ là một chuỗi văn bản vô hại và in nó ra màn hình dưới dạng chữ bình thường

### Câu A3— Event Bubbling
1. Code ban đầu (Không có e.stopPropagation()):
- Output: BUTTON ➔ INNER ➔ OUTER
- Do cơ chế Event Bubbling (nổi bọt), sự kiện truyền từ phần tử con trong cùng lên các phần tử cha.
2. Khi bỏ comment e.stopPropagation():
- Output: BUTTON
- Tại sao: Hàm này chặn quá trình nổi bọt. Sự kiện chỉ chạy ở #btn rồi dừng lại hẳn, không lan lên các thẻ cha nữa.



