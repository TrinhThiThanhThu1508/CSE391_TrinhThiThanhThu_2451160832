const students = [
    { name: "Tuấn", math: 8, physics: 7, cs: 9, gender: "M" },
    { name: "Mai", math: 6, physics: 9, cs: 7, gender: "F" },
    { name: "Lan", math: 9, physics: 6, cs: 8, gender: "F" },
    { name: "Kiên", math: 5, physics: 5, cs: 6, gender: "M" },
    { name: "Hoa", math: 10, physics: 8, cs: 9, gender: "F" },
    { name: "Thành", math: 3, physics: 4, cs: 5, gender: "M" },
    { name: "Ngọc", math: 7, physics: 7, cs: 7, gender: "F" },
    { name: "Bảo", math: 4, physics: 6, cs: 3, gender: "M" },
];

// Hàm hỗ trợ căn lề (tuân thủ quy tắc chỉ dùng loop)
function padRight(str, length) {
    let result = String(str);
    while (result.length < length) {
        result += " ";
    }
    return result;
}

// Khởi tạo các biến lưu trữ thống kê
let countGioi = 0, countKha = 0, countTB = 0, countYeu = 0;

let maxAvg = -1, minAvg = 11;
let bestStudent = "", worstStudent = "";

let sumMath = 0, sumPhysics = 0, sumCS = 0;

let sumMale = 0, countMale = 0;
let sumFemale = 0, countFemale = 0;

// In Header bảng
console.log("| STT | Tên      | TB   | Xếp loại    |");
console.log("|-----|----------|------|-------------|");

// Xử lý dữ liệu bằng 1 vòng lặp duy nhất
for (let i = 0; i < students.length; i++) {
    let st = students[i];

    // 1. Tính điểm trung bình
    let avg = st.math * 0.4 + st.physics * 0.3 + st.cs * 0.3;
    let avgFormatted = (Math.round(avg * 10) / 10).toFixed(1); // Làm tròn 1 chữ số thập phân

    // 2. Xếp loại & Đếm số lượng
    let rank = "";
    if (avg >= 8.0) {
        rank = "Giỏi";
        countGioi++;
    } else if (avg >= 6.5) {
        rank = "Khá";
        countKha++;
    } else if (avg >= 5.0) {
        rank = "Trung bình";
        countTB++;
    } else {
        rank = "Yếu";
        countYeu++;
    }

    // 3. In từng dòng của bảng
    let colSTT = padRight(i + 1, 3);
    let colName = padRight(st.name, 8);
    let colAvg = padRight(avgFormatted, 4);
    let colRank = padRight(rank, 11);
    console.log(`| ${colSTT} | ${colName} | ${colAvg} | ${colRank} |`);

    // 4. Tìm điểm cao nhất / thấp nhất
    if (avg > maxAvg) {
        maxAvg = avg;
        bestStudent = st.name;
    }
    if (avg < minAvg) {
        minAvg = avg;
        worstStudent = st.name;
    }

    // 5. Cộng dồn điểm để tính TB môn
    sumMath += st.math;
    sumPhysics += st.physics;
    sumCS += st.cs;

    // 6. Cộng dồn điểm theo giới tính (Bonus)
    if (st.gender === "M") {
        sumMale += avg;
        countMale++;
    } else { // st.gender === "F"
        sumFemale += avg;
        countFemale++;
    }
}

// In kết quả thống kê
console.log("\n--- THỐNG KÊ KẾT QUẢ ---");
let totalStudents = students.length;

// Đếm số SV mỗi loại
console.log(`1. Số SV mỗi loại:`);
console.log(`   - Giỏi: ${countGioi}`);
console.log(`   - Khá: ${countKha}`);
console.log(`   - Trung bình: ${countTB}`);
console.log(`   - Yếu: ${countYeu}`);

// SV có điểm TB cao nhất và thấp nhất
console.log(`\n2. Cực trị:`);
console.log(`   - Sinh viên cao điểm nhất: ${bestStudent} (${maxAvg.toFixed(1)} điểm)`);
console.log(`   - Sinh viên thấp điểm nhất: ${worstStudent} (${minAvg.toFixed(1)} điểm)`);

// Điểm TB toàn lớp cho từng môn
console.log(`\n3. Điểm trung bình toàn lớp theo môn:`);
console.log(`   - Toán: ${(sumMath / totalStudents).toFixed(1)}`);
console.log(`   - Vật lý: ${(sumPhysics / totalStudents).toFixed(1)}`);
console.log(`   - Khoa học máy tính (CS): ${(sumCS / totalStudents).toFixed(1)}`);

// Điểm TB theo giới tính
console.log(`\n4. Điểm trung bình theo giới tính (Bonus):`);
if (countMale > 0) {
    console.log(`   - Nam (M): ${(sumMale / countMale).toFixed(1)}`);
}
if (countFemale > 0) {
    console.log(`   - Nữ (F): ${(sumFemale / countFemale).toFixed(1)}`);
}