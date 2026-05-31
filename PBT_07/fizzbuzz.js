// ==========================================
// Version 1: Classic FizzBuzz
// In từ 1 đến 100
// ==========================================
console.log("=== VERSION 1: CLASSIC FIZZBUZZ ===");
for (let i = 1; i <= 100; i++) {
    let output = "";
    
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    
    // Nếu output rỗng (không chia hết cho 3 hay 5), in ra chính số đó
    console.log(output || i);
}


// ==========================================
// Version 2: Custom FizzBuzz
// ==========================================
console.log("\n=== VERSION 2: CUSTOM FIZZBUZZ ===");

function customFizzBuzz(n, rules) {
    // Chạy vòng lặp từ 1 đến n
    for (let i = 1; i <= n; i++) {
        let output = "";
        
        // Duyệt qua BẤT KỲ bộ rules nào được truyền vào
        for (let j = 0; j < rules.length; j++) {
            if (i % rules[j].divisor === 0) {
                output += rules[j].word;
            }
        }
        
        // In ra output hoặc chính số đó nếu không khớp rule nào
        // Lưu ý: Mình in kèm số 'i' để bạn dễ dàng đối chiếu kết quả
        console.log(`${i} = ${output || i}`);
    }
}

// Test với bộ rules tùy chỉnh
// (Đổi n thành 105 để có thể nhìn thấy các trường hợp như 35 và 105)
customFizzBuzz(105, [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
]);