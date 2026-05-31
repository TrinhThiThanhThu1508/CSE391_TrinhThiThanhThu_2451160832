// Các DOM Elements
const form = document.getElementById("registerForm");
const submitBtn = document.getElementById("submitBtn");

const nameInput = document.getElementById("name");
const nameIcon = document.getElementById("nameIcon");

const emailInput = document.getElementById("email");
const emailError = document.getElementById("emailError");

const passInput = document.getElementById("password");
const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const confirmInput = document.getElementById("confirmPassword");
const confirmIcon = document.getElementById("confirmIcon");

const phoneInput = document.getElementById("phone");
const phoneIcon = document.getElementById("phoneIcon");

// Biến lưu trạng thái hợp lệ của từng trường
let state = {
    name: false,
    email: false,
    password: false,
    confirm: false,
    phone: false
};

// Hàm kiểm tra tổng thể để mở khóa nút Submit
function checkFormValidity() {
    const isValid = state.name && state.email && state.password && state.confirm && state.phone;
    submitBtn.disabled = !isValid;
}

// 1. Validate Tên (2 - 50 ký tự)
nameInput.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    if (val.length >= 2 && val.length <= 50) {
        nameIcon.textContent = "✅";
        state.name = true;
    } else {
        nameIcon.textContent = val.length > 0 ? "❌" : "";
        state.name = false;
    }
    checkFormValidity();
});

// 2. Validate Email bằng Regex
emailInput.addEventListener("input", (e) => {
    const val = e.target.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (val === "") {
        emailError.style.display = "none";
        state.email = false;
    } else if (emailRegex.test(val)) {
        emailError.style.display = "none";
        state.email = true;
    } else {
        emailError.style.display = "block";
        state.email = false;
    }
    checkFormValidity();
});

// 3. Password Strength Meter
passInput.addEventListener("input", (e) => {
    const val = e.target.value;
    
    // Khởi tạo regex
    const hasLetters = /[a-zA-Z]/.test(val);
    const hasNumbers = /\d/.test(val);
    const hasLower = /[a-z]/.test(val);
    const hasUpper = /[A-Z]/.test(val);
    const hasSpecial = /[^a-zA-Z0-9]/.test(val);
    
    if (val.length === 0) {
        strengthBar.style.width = "0%";
        strengthText.textContent = "";
        state.password = false;
    } 
    // Mạnh: > 8 ký tự, có hoa, thường, số, đặc biệt
    else if (val.length >= 8 && hasLower && hasUpper && hasNumbers && hasSpecial) {
        strengthBar.style.width = "100%";
        strengthBar.style.background = "#4caf50"; // Xanh
        strengthText.textContent = "Mạnh";
        strengthText.style.color = "#4caf50";
        state.password = true;
    } 
    // Trung bình: > 8 ký tự, có chữ và số
    else if (val.length >= 8 && hasLetters && hasNumbers) {
        strengthBar.style.width = "66%";
        strengthBar.style.background = "#ff9800"; // Vàng
        strengthText.textContent = "Trung bình";
        strengthText.style.color = "#ff9800";
        state.password = true;
    } 
    // Yếu
    else {
        strengthBar.style.width = "33%";
        strengthBar.style.background = "#f44336"; // Đỏ
        strengthText.textContent = "Yếu";
        strengthText.style.color = "#f44336";
        state.password = val.length >= 8 ? true : false; // Chấp nhận pass yếu nếu đủ 8 ký tự (tùy logic, ở đây mình set false nếu dưới 8)
        if(val.length < 8) state.password = false;
    }

    // Kích hoạt lại check confirm password nếu đổi pass chính
    confirmInput.dispatchEvent(new Event("input"));
    checkFormValidity();
});

// 4. Xác nhận mật khẩu
confirmInput.addEventListener("input", (e) => {
    const val = e.target.value;
    if (val === "") {
        confirmIcon.textContent = "";
        state.confirm = false;
    } else if (val === passInput.value && state.password) {
        confirmIcon.textContent = "✅";
        state.confirm = true;
    } else {
        confirmIcon.textContent = "❌";
        state.confirm = false;
    }
    checkFormValidity();
});

// 5. Tự động thêm dấu gạch nối cho Số điện thoại
phoneInput.addEventListener("input", (e) => {
    // Xóa tất cả các ký tự không phải là số
    let val = e.target.value.replace(/\D/g, "");
    
    // Giới hạn tối đa 10 số
    if (val.length > 10) val = val.substring(0, 10);
    
    // Định dạng xxxx-xxx-xxx
    let formatted = val;
    if (val.length > 4 && val.length <= 7) {
        formatted = val.substring(0, 4) + "-" + val.substring(4);
    } else if (val.length > 7) {
        formatted = val.substring(0, 4) + "-" + val.substring(4, 7) + "-" + val.substring(7);
    }
    
    // Gán lại giá trị vào input
    e.target.value = formatted;
    
    // Kiểm tra hợp lệ (đúng 10 số, tức là chuỗi có độ dài 12 tính cả 2 dấu '-')
    if (val.length === 10) {
        phoneIcon.textContent = "✅";
        state.phone = true;
    } else {
        phoneIcon.textContent = val.length > 0 ? "❌" : "";
        state.phone = false;
    }
    checkFormValidity();
});

// 6. Xử lý Submit Form và hiển thị Modal
form.addEventListener("submit", (e) => {
    e.preventDefault(); // Ngăn load lại trang
    
    const modalData = document.getElementById("modalData");
    modalData.innerHTML = `
        <strong>Họ tên:</strong> ${nameInput.value} <br><br>
        <strong>Email:</strong> ${emailInput.value} <br><br>
        <strong>Số ĐT:</strong> ${phoneInput.value}
    `;
    
    document.getElementById("modalOverlay").classList.add("active");
});

document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("modalOverlay").classList.remove("active");
    // Tùy chọn: Reset form sau khi đăng ký thành công
    // form.reset();
    // location.reload();
});