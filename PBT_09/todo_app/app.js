// Khởi tạo state từ LocalStorage
let todos = JSON.parse(localStorage.getItem("todos")) || [];
let currentFilter = "all";

// Lấy các DOM elements chính
const todoInput = document.getElementById("newTodo");
const todoList = document.getElementById("todoList");
const footer = document.getElementById("footer");
const todoCount = document.getElementById("todoCount");
const filtersContainer = document.getElementById("filters");
const clearCompletedBtn = document.getElementById("clearCompleted");

// ==========================================
// 1. RENDER & CREATE ELEMENTS (Đúng chuẩn 5đ)
// ==========================================
function render() {
    // Xóa rỗng danh sách cũ
    todoList.innerHTML = ""; 

    // Lọc theo trạng thái
    let filteredTodos = todos;
    if (currentFilter === "active") {
        filteredTodos = todos.filter(t => !t.completed);
    } else if (currentFilter === "completed") {
        filteredTodos = todos.filter(t => t.completed);
    }

    // Dùng createElement (Không dùng innerHTML cho items)
    filteredTodos.forEach(todo => {
        const li = document.createElement("li");
        li.className = `todo-item ${todo.completed ? "completed" : ""}`;
        li.dataset.id = todo.id;

        const span = document.createElement("span");
        span.textContent = todo.text;

        const input = document.createElement("input");
        input.type = "text";
        input.className = "edit-input";
        input.value = todo.text;

        const deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.textContent = "❌";

        // Gắn các thành phần con vào thẻ li
        li.appendChild(span);
        li.appendChild(input);
        li.appendChild(deleteBtn);
        
        // Gắn li vào ul
        todoList.appendChild(li);
    });

    updateFooter();
    saveData();
}

function updateFooter() {
    const activeCount = todos.filter(t => !t.completed).length;
    todoCount.textContent = `${activeCount} item${activeCount !== 1 ? "s" : ""} left`;
    footer.className = todos.length > 0 ? "" : "hidden";
}

function saveData() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// ==========================================
// 2. EVENTS - ADD & FILTER
// ==========================================
todoInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const text = e.target.value.trim();
        if (text) {
            todos.push({ id: Date.now(), text, completed: false });
            e.target.value = "";
            render();
        }
    }
});

filtersContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("filter-btn")) {
        // Cập nhật class active cho nút bấm
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        
        currentFilter = e.target.dataset.filter;
        render();
    }
});

clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(t => !t.completed);
    render();
});

// ==========================================
// 3. EVENT DELEGATION: Bind sự kiện lên thẻ cha #todoList (Đúng chuẩn 5đ)
// ==========================================

// Bắt sự kiện Click (Dùng cho Delete và Toggle completed)
todoList.addEventListener("click", (e) => {
    const li = e.target.closest(".todo-item");
    if (!li) return;
    
    const id = parseInt(li.dataset.id);

    // Bấm nút xóa
    if (e.target.classList.contains("delete-btn")) {
        todos = todos.filter(t => t.id !== id);
        render();
    } 
    // Bấm vào chữ -> Toggle class
    else if (e.target.tagName === "SPAN") {
        const todo = todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
            render();
        }
    }
});

// Bắt sự kiện Double Click (Chuyển sang chế độ Edit)
todoList.addEventListener("dblclick", (e) => {
    if (e.target.tagName === "SPAN") {
        const li = e.target.closest(".todo-item");
        li.classList.add("editing");
        
        const input = li.querySelector(".edit-input");
        input.focus();
        // Đưa con trỏ chuột về cuối dòng chữ
        input.selectionStart = input.selectionEnd = input.value.length;
    }
});

// Bắt sự kiện Keydown cho ô Edit (Lưu khi nhấn Enter, Hủy khi nhấn Esc)
todoList.addEventListener("keydown", (e) => {
    if (e.target.classList.contains("edit-input")) {
        if (e.key === "Enter") {
            finishEdit(e.target);
        } else if (e.key === "Escape") {
            render(); // Hủy thao tác, vẽ lại giao diện cũ
        }
    }
});

// Bắt sự kiện Focusout (Lưu khi click chuột ra ngoài ô Edit)
todoList.addEventListener("focusout", (e) => {
    if (e.target.classList.contains("edit-input")) {
        finishEdit(e.target);
    }
});

// Hàm xử lý lưu trữ sau khi Edit xong
function finishEdit(inputEl) {
    const li = inputEl.closest(".todo-item");
    if (!li) return;
    
    const id = parseInt(li.dataset.id);
    const newText = inputEl.value.trim();
    
    if (newText) {
        const todo = todos.find(t => t.id === id);
        todo.text = newText;
    } else {
        // Nếu xóa trắng text, tự động xóa luôn todo đó
        todos = todos.filter(t => t.id !== id);
    }
    render();
}

// Chạy lần đầu tiên khi load trang
render();