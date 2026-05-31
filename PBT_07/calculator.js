function calculate(num1, operator, num2) {
  // Kiểm tra edge case: Input không phải là số hợp lệ
  if (
    typeof num1 !== "number" || 
    typeof num2 !== "number" || 
    Number.isNaN(num1) || 
    Number.isNaN(num2)
  ) {
    return "Lỗi: Input không phải số";
  }

  // Kiểm tra edge case: Chia cho 0 (áp dụng cho cả phép chia lấy nguyên và chia lấy dư)
  if ((operator === "/" || operator === "%") && num2 === 0) {
    return "Lỗi: Không thể chia cho 0";
  }

  // Xử lý các phép tính hợp lệ
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num1 / num2;
    case "%":
      return num1 % num2;
    case "**":
      return num1 ** num2;
    default:
      // Xử lý edge case: Operator không hợp lệ
      return `Lỗi: Operator '${operator}' không hợp lệ`;
  }
}

// ================= TEST CASES =================
console.log(calculate(10, "+", 5));    // → 15
console.log(calculate(10, "/", 0));    // → "Lỗi: Không thể chia cho 0"
console.log(calculate(10, "^", 5));    // → "Lỗi: Operator '^' không hợp lệ"
console.log(calculate("abc", "+", 5)); // → "Lỗi: Input không phải số"
console.log(calculate(2, "**", 10));   // → 1024