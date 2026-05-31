// ===== Câu A1 =====

// Đoạn 1
console.log("Đoạn 1:");
try {
    console.log(x);
    var x = 5;
} catch (e) {
    console.log("Error:", e.message);
}

// Đoạn 2
console.log("\nĐoạn 2:");
try {
    console.log(y);
    let y = 10;
} catch (e) {
    console.log("Error:", e.message);
}

// Đoạn 3
console.log("\nĐoạn 3:");
try {
    const z = 15;
    z = 20;
    console.log(z);
} catch (e) {
    console.log("Error:", e.message);
}

// Đoạn 4
console.log("\nĐoạn 4:");
try {
    const arr = [1, 2, 3];
    arr.push(4);
    console.log(arr);
} catch (e) {
    console.log("Error:", e.message);
}

// Đoạn 5
console.log("\nĐoạn 5:");
try {
    let a = 1;
    {
        let a = 2;
        console.log("Trong block:", a);
    }
    console.log("Ngoài block:", a);
} catch (e) {
    console.log("Error:", e.message);
}