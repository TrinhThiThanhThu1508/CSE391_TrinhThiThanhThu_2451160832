// 1. pipe() — Nối chuỗi functions
function pipe(...fns) {
    return (input) => fns.reduce((acc, fn) => fn(acc), input);
}

const process = pipe(
    x => x * 2,        // 5 → 10
    x => x + 10,       // 10 → 20
    x => x.toString(), // 20 → "20"
    x => "Kết quả: " + x
);
console.log(process(5)); // → "Kết quả: 20"


// 2. memoize() — Cache kết quả
function memoize(fn) {
    const cache = new Map();
    return (...args) => {
        const key = JSON.stringify(args);
        if (cache.has(key)) return cache.get(key);
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const expensiveCalc = memoize((n) => {
    console.log("Đang tính...");
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});
console.log(expensiveCalc(1000000)); // → "Đang tính..." → 499999500000
console.log(expensiveCalc(1000000)); // → lấy cache, không in "Đang tính..."


// 3. debounce() — Chờ user ngừng gõ mới thực hiện
function debounce(fn, delay) {
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

const search = debounce((query) => {
    console.log("Searching:", query);
}, 500);

// Ví dụ: search("a"); search("ab"); search("abc"); → chỉ "abc" chạy sau 500ms


// 4. retry() — Thử lại nếu lỗi
async function retry(fn, maxAttempts = 3) {
    let lastError;
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (err) {
            lastError = err;
            console.log(`Attempt ${attempt} failed`);
        }
    }
    throw lastError;
}

// Ví dụ sử dụng:
let count = 0;
async function unstableTask() {
    count++;
    if (count < 3) throw new Error("Lỗi tạm thời");
    return "Thành công lần " + count;
}

retry(unstableTask, 5)
    .then(res => console.log(res))
    .catch(err => console.error("Final error:", err.message));