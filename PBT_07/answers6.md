# PHIẾU BÀI TẬP 07
## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)
### Câu A1 — var / let / const
Đọc chương 03. **Không chạy code**, dự đoán output cho từng đoạn:

```javascript
// Đoạn 1
console.log(x);
var x = 5;

// Đoạn 2
console.log(y);
let y = 10;

// Đoạn 3
const z = 15;
z = 20;
console.log(z);

// Đoạn 4
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);

// Đoạn 5
let a = 1;
{
    let a = 2;
    console.log("Trong block:", a);
}
console.log("Ngoài block:", a);
```

Ghi dự đoán → Tạo file `var_let_const.js`, chạy → So sánh. Giải thích các kết quả bất ngờ.

- Đoạn 1 → `undefined` (var hoisted nhưng chưa gán).
- Đoạn 2 → `ReferenceError` (let trong TDZ).
- Đoạn 3 → `TypeError` (const không gán lại được).
- Đoạn 4 → `[1, 2, 3, 4]` (const giữ tham chiếu, mảng vẫn thay đổi).
- Đoạn 5 →  
  - Trong block: `2`  
  - Ngoài block: `1`  
  (let có phạm vi block).

---

### Câu A2 — Data Types & Coercion

Không chạy code, dự đoán kết quả:

```javascript
console.log(typeof null);              // ???
console.log(typeof undefined);         // ???
console.log(typeof NaN);              // ???
console.log("5" + 3);                 // ???
console.log("5" - 3);                 // ???
console.log("5" * "3");              // ???
console.log(true + true);            // ???
console.log([] + []);                // ???
console.log([] + {});                // ???
console.log({} + []);                // ???
```

Sau khi trả lời, chạy code kiểm tra. Giải thích **tại sao** `"5" + 3` và `"5" - 3` cho kết quả khác nhau.


- `typeof null` → `"object"` (lỗi lịch sử JS).  
- `typeof undefined` → `"undefined"`.  
- `typeof NaN` → `"number"`.  
- `"5" + 3` → `"53"` (chuỗi nối).  
- `"5" - 3` → `2` (ép chuỗi sang số).  
- `"5" * "3"` → `15` (ép cả hai sang số).  
- `true + true` → `2` (true → 1).  
- `[] + []` → `""` (mảng rỗng → chuỗi rỗng).  
- `[] + {}` → `"[object Object]"`.  
- `{} + []` → `"[object Object]"` (parser coi `{}` là block, sau đó cộng với `[]`).

---

## Giải thích đặc biệt

- Toán tử `+` có hai nghĩa: nối chuỗi hoặc cộng số.  
  - Nếu một toán hạng là chuỗi → nối chuỗi.  
  - Nếu cả hai là số → cộng số.  
- Toán tử `-`, `*`, `/` chỉ có nghĩa số học → JS ép chuỗi sang số trước khi tính.  
  → Vì vậy `"5" + 3` khác `"5" - 3`.


### Câu A3 (5đ) — So sánh == vs ===

Dự đoán `true` hay `false`:

```javascript
console.log(5 == "5");                // ???
console.log(5 === "5");               // ???
console.log(null == undefined);       // ???
console.log(null === undefined);      // ???
console.log(NaN == NaN);             // ???
console.log(0 == false);             // ???
console.log(0 === false);            // ???
console.log("" == false);            // ???
```

**Quy tắc:** Từ giờ trở đi, bạn nên dùng `==` hay `===`? Tại sao?

- `5 == "5"` → true (ép kiểu chuỗi "5" thành số 5).
- `5 === "5"` → false (so sánh cả kiểu, số khác chuỗi).
- `null == undefined` → true (quy tắc đặc biệt).
- `null === undefined` → false (khác kiểu).
- `NaN == NaN` → false (NaN không bằng chính nó).
- `0 == false` → true (false ép thành 0).
- `0 === false` → false (khác kiểu).
- `"" == false` → true (chuỗi rỗng ép thành 0).

Quy tắc: **Luôn dùng `===`** để tránh ép kiểu ngầm gây bất ngờ. `==` chỉ nên dùng khi thật sự muốn cho phép ép kiểu.

### Câu A4 (5đ) — Truthy & Falsy

Liệt kê TẤT CẢ giá trị Falsy trong JavaScript (đọc tài liệu). Sau đó dự đoán kết quả:

```javascript
if ("0") console.log("A");           // In hay không?
if ("") console.log("B");            // In hay không?
if ([]) console.log("C");            // In hay không?
if ({}) console.log("D");            // In hay không?
if (null) console.log("E");          // In hay không?
if (0) console.log("F");             // In hay không?
if (-1) console.log("G");            // In hay không?
if (" ") console.log("H");           // In hay không? (space)
```
### Các giá trị Falsy trong JavaScript:
- `false`
- `0`
- `-0`
- `0n` (BigInt zero)
- `""` (chuỗi rỗng)
- `null`
- `undefined`
- `NaN`

### Dự đoán:
- `"0"` → truthy → in `A`
- `""` → falsy → không in `B`
- `[]` → truthy → in `C`
- `{}` → truthy → in `D`
- `null` → falsy → không in `E`
- `0` → falsy → không in `F`
- `-1` → truthy → in `G`
- `" "` (space) → truthy → in `H`

---

### Câu A5 (5đ) — Template Literals

Viết lại 3 cách nối chuỗi sau bằng **template literal** (backtick):

```javascript
// Cách 1:
var greeting = "Xin chào " + name + "! Bạn " + age + " tuổi.";

// Cách 2:
var url = "https://api.example.com/users/" + userId + "/orders?page=" + page;

// Cách 3:
var html = "<div class=\"card\">" +
    "<h2>" + title + "</h2>" +
    "<p>" + description + "</p>" +
    "<span>Giá: " + price + "đ</span>" +
    "</div>";
```
```javascript
// Cách 1:
var greeting = `Xin chào ${name}! Bạn ${age} tuổi.`;

// Cách 2:
var url = `https://api.example.com/users/${userId}/orders?page=${page}`;

// Cách 3:
var html = `
<div class="card">
    <h2>${title}</h2>
    <p>${description}</p>
    <span>Giá: ${price}đ</span>
</div>`;
```
---

## PHẦN C — SUY LUẬN
### Câu C1 — Debug JavaScript
1. if (giaSauGiam = 0) -> === 0: Dùng sai toán tử gán thay vì so sánh bằng.
2. for (var i... -> let i (Lỗi ẩn): let tạo phạm vi khối (block scope), giúp setTimeout lưu đúng giá trị i (0 đến 4) ở mỗi vòng lặp thay vì luôn in ra 5.
3. "100000" -> 100000: Truyền đúng kiểu dữ liệu số thay vì chuỗi.
4. Kiểu trả về lộn xộn: Đã đổi thành ném lỗi (throw new Error) thay vì return chuỗi văn bản khi thông số sai.
5. Thiếu kiểm tra đầu vào: Đã thêm điều kiện bắt buộc giaBan phải là số và >= 0.
6. Khai báo biến: Đã thay var bằng const để code an toàn và chuẩn hiện đại.
- Sửa lỗi
```javascript
function tinhGiaGiamGia(giaBan, phanTramGiam) {
    if (typeof giaBan !== 'number' || giaBan < 0) {
        throw new Error("Giá bán phải là số và >= 0");
    }

    if (phanTramGiam < 0 || phanTramGiam > 100) {
        throw new Error("Phần trăm giảm không hợp lệ");
    }
    
    const giamGia = (giaBan * phanTramGiam) / 100;
    const giaSauGiam = giaBan - giamGia;
    
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
    
    return giaSauGiam;
}

// Test
try {
    const gia = tinhGiaGiamGia(100000, 20);
    console.log("Giá sau giảm: " + gia + "đ");

    const gia2 = tinhGiaGiamGia(50000, 110); 
    console.log("Giá: " + gia2);
} catch (error) {
    console.error("Lỗi: " + error.message);
}

// Vòng lặp bất đồng bộ
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i);
    }, 1000);
}
```
### Câu C2 — Bài toán thực tế
- Ở file restaurant_bill.js

