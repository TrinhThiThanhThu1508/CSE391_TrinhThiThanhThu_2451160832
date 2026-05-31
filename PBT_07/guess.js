function startGame() {
    // Máy random 1 số từ 1-100
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    const maxTries = 7;
    let attempts = 0;
    
    // Dùng mảng (hoặc Set) để lưu các số đã đoán
    const guessedNumbers = []; 

    alert("Chào mừng đến với Mini Game: Đoán số!\nMáy đã chọn một số từ 1 đến 100. Bạn có tối đa 7 lượt đoán.");

    while (attempts < maxTries) {
        let input = prompt(`Lượt ${attempts + 1}/${maxTries}.\nNhập một số từ 1 đến 100 (hoặc Cancel để thoát):`);

        // Xử lý nếu user bấm Cancel hoặc ESC
        if (input === null) {
            alert("Bạn đã thoát trò chơi.");
            return;
        }

        // Chuyển đổi input thành số nguyên
        input = input.trim();
        let guess = Number(input);

        // YÊU CẦU THÊM: Validate input (Chỉ chấp nhận số nguyên 1-100)
        if (input === "" || !Number.isInteger(guess) || guess < 1 || guess > 100) {
            alert("Lỗi: Vui lòng nhập một số nguyên hợp lệ từ 1 đến 100!");
            continue; // Bắt nhập lại, KHÔNG trừ lượt đoán
        }

        // YÊU CẦU THÊM: Kiểm tra số đã đoán 2 lần
        if (guessedNumbers.includes(guess)) {
            alert("Cảnh báo: Bạn đã đoán số này rồi! Vui lòng chọn một số khác.");
            continue; // Bắt nhập lại, KHÔNG trừ lượt đoán
        }

        // Hợp lệ -> Lưu số đã đoán và tăng số lần đoán lên 1
        guessedNumbers.push(guess);
        attempts++;

        // So sánh kết quả
        if (guess === targetNumber) {
            alert(`Đúng rồi! Bạn đoán đúng sau ${attempts} lần!`);
            return; // Kết thúc hàm, thắng game
        } else if (guess < targetNumber) {
            if (attempts < maxTries) {
                alert("Cao hơn! Số bạn vừa đoán nhỏ hơn đáp án.");
            }
        } else { // guess > targetNumber
            if (attempts < maxTries) {
                alert("Thấp hơn! Số bạn vừa đoán lớn hơn đáp án.");
            }
        }
    }

    // Nếu thoát khỏi vòng lặp while mà chưa return, tức là đã hết 7 lượt
    alert(`Bạn đã hết lượt! Thua cuộc.\nĐáp án đúng là: ${targetNumber}`);
}

// Tự động chạy game khi load trang
window.onload = startGame;