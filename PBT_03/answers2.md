# 📋 PHIẾU BÀI TẬP 03
## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)
### Câu A1 (5đ) — 3 Cách nhúng CSS

Đọc chương 08. Liệt kê 3 cách nhúng CSS vào HTML (inline, internal, external). Mỗi cách:
- Viết 1 ví dụ code
- Ưu điểm và nhược điểm
- Khi nào nên dùng

### 1. Inline CSS (Nhúng trực tiếp)
Viết CSS thẳng vào thuộc tính `style` của thẻ HTML.
- **VD Code:** `<h1 style="color: #2563eb; font-size: 24px;">Text</h1>`
- **Ưu điểm:** Nhanh, có độ ưu tiên cao nhất trong các cách nhúng.
- **Nhược điểm:** Code dễ bị rối, không tái sử dụng được mã nguồn, gây khó khăn cho việc bảo trì.
- **Dùng khi:** Test code nhanh, viết code cho Email HTML, hoặc dùng JavaScript can thiệp style động vào một phần tử duy nhất.

---

### 2. Internal CSS (Nhúng trong file HTML)
Viết CSS vào trong thẻ `<style>`, thường đặt ở phần `<head>` của file HTML.
- **VD Code:**
```html
<style>
    body {
        background-color: #f3f4f6;
    }
    h1 {
        color: blue;
    }
</style>
```

### 3. External CSS (Tạo file riêng)
Viết CSS ra file .css độc lập, nhúng vào HTML bằng thẻ `<link>`.
- **VD Code:** ` <link rel="stylesheet" href="styles.css">`
- **Ưu điểm** điểm: Tái sử dụng tối đa (1 file cho toàn bộ web), HTML sạch sẽ, tối ưu tốc độ tải (nhờ cache trình duyệt).
- **Nhược điểm**: Tốn thêm 1 HTTP request ban đầu (không đáng kể).
- **Dùng khi**: Tiêu chuẩn ngành (Industry Standard) - bắt buộc dùng cho các dự án thực tế, nhiều trang.

---

**Câu hỏi thêm:** Nếu cùng 1 element có cả 3 cách CSS đồng thời áp dụng, cách nào "thắng"? Giải thích tại sao.
- **INLINE** thắng

1. **Độ ưu tiên (Specificity)**: Inline CSS nhắm mục tiêu trực tiếp nhất nên luôn có trọng số cao nhất.

2. **Nguyên tắc Thác đổ (Cascade)**: Internal và External có trọng số ngang nhau. Nếu không có Inline, trình duyệt đọc từ trên xuống dưới ở thẻ `<head>`, cái nào được gọi sau cùng sẽ thắng.

3. **Ngoại lệ (The Boss): Từ khóa !important (VD: color: blue !important;)** ở bất kỳ đâu sẽ phá vỡ mọi quy tắc và ghi đè tất cả (kể cả Inline).

### Câu A2 (8đ) — CSS Selectors — Dự đoán kết quả

Cho HTML sau:

```html
<div id="app">
    <header class="top-bar dark">
        <h1>ShopTLU</h1>
        <nav>
            <a href="/" class="active">Home</a>
            <a href="/products">Products</a>
            <a href="/about">About</a>
        </nav>
    </header>
    <main>
        <article class="product">
            <h2>iPhone 16</h2>
            <p class="price">25.990.000đ</p>
            <p>Mô tả sản phẩm...</p>
        </article>
        <article class="product featured">
            <h2>MacBook Pro</h2>
            <p class="price">45.990.000đ</p>
            <p>Mô tả sản phẩm...</p>
        </article>
    </main>
</div>
```

**Không chạy code**, cho biết mỗi selector sau chọn được element nào? (Ghi cụ thể text content)

```css
1. h1                           → Chọn: ShopTLU
-Bộ chọn thẻ (Element selector), tìm tất cả thẻ `<h1>`.
2. .price                       → Chọn: 25.990.000đ và 45.990.000đ
-Bộ chọn class, tìm tất cả phần tử có class là `price`.
3. #app header                  → Chọn:Shop TLU, home, product,about
-Bộ chọn con cháu (Descendant selector). Tìm thẻ <header> nằm bên trong phần tử có id là app.  Nó chọn cả khối header chứ không chỉ riêng các thẻ <a>.
4. nav a:first-child             → Chọn: Home
-Chọn thẻ <a> là đứa con đầu tiên nằm trong thẻ <nav>.
5. .product.featured h2         → Chọn: MacBook Pro
-.product.featured(viết liền không khoảng trắng) nghĩa là tìm thẻ có đồng thời cả 2 class này (chính là article của MacBook). Sau đó tìm thẻ <h2> nằm trong nó.
6. article > p                  → Chọn: 25.990.000đ, Mô tả sản phẩm... (của iPhone) VÀ 45.990.000đ, Mô tả sản phẩm... (của MacBook)
-Ký hiệu > là bộ chọn con trực tiếp (Child selector). Nó sẽ lấy tất cả các thẻ <p> nằm ngay sát lớp bên trong của thẻ <article>. Vì mỗi <article> có 2 thẻ <p>, nên tổng cộng nó chọn được 4 thẻ.
7. a[href="/"]                  → Chọn:Home
-Bộ chọn thuộc tính (Attribute selector). Tìm thẻ <a> nào có chính xác thuộc tính href="/".
8. .top-bar.dark h1              → Chọn: ShopTLU
-Giải thích: Tìm phần tử có đồng thời class top-bar và dark (chính là thẻ header), sau đó chọn thẻ <h1> nằm bên trong nó.
```

**Sau khi trả lời**, tạo file `selectors_test.html` để kiểm chứng đáp án. Chụp screenshot.

### Câu A3 (7đ) — Box Model — Tính toán kích thước

Đọc chương 11 (Box Model). Tính **kích thước thực tế** (chiều rộng thực tế render trên browser) cho mỗi trường hợp sau:

```css
/* Trường hợp 1: content-box (mặc định) */
.box-1 {
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400px + (20px x 2) +(5px x 2) = 450px
→ Không gian chiếm trên trang = 450px + (10px x 2) = 470px

/* Trường hợp 2: border-box */
.box-2 {
    box-sizing: border-box;
    width: 400px;
    padding: 20px;
    border: 5px solid black;
    margin: 10px;
}
→ Chiều rộng hiển thị = 400px
→ Kích thước content thực tế = 400px - (20px x 2) - (5px x 2) = 350px
→ Không gian chiếm trên trang = 400px + (10px x 2) = 420px

/* Trường hợp 3: Margin collapse */
.box-a { margin-bottom: 25px; }
.box-b { margin-top: 40px; }
→ Khoảng cách giữa box-a và box-b = 40px (vì 40px > 25px ; trình duyệt lấy giá trị lớn nhất trong 2 giá trị margin) 
→ Giải thích tại sao KHÔNG PHẢI 65px : KHÔNG PHẢI 65px vì Margin ngang (trái/phải) KHÔNG bị collapse. Chỉ margin dọc (trên/dưới) mới bị chúng kh cộng dồn mà lấy cái lớn nhất
```

**Nâng cao:** Nếu `.box-a` có `margin-bottom: -10px` và `.box-b` có `margin-top: 40px`, khoảng cách = 30px

### Câu A4 (5đ) — Specificity (Độ ưu tiên)

Cho các CSS rules sau cùng target 1 element `<p class="price" id="main-price">`:

```css
p { color: black; }                    /* Rule A */
.price { color: blue; }               /* Rule B */
#main-price { color: red; }           /* Rule C */
p.price { color: green; }             /* Rule D */
```
**1. Tính specificity score (a, b, c) cho mỗi rule:**
Cách tính điểm dựa trên công thức `(ID, Class/Attribute/Pseudo-class, Element/Pseudo-element)`:
- **Rule A (`p`):** Chỉ có 1 thẻ. 
  → Score: **(0, 0, 1)**
- **Rule B (`.price`):** Chỉ có 1 class. 
  → Score: **(0, 1, 0)**
- **Rule C (`#main-price`):** Có 1 ID. 
  → Score: **(1, 0, 0)**
- **Rule D (`p.price`):** Có 1 thẻ và 1 class. 
  → Score: **(0, 1, 1)**

**2. Element sẽ có màu gì? Giải thích:**
- **Màu:** Đỏ (Red) - Nhận từ Rule C.
- **Giải thích:** Dựa vào điểm Specificity tính ở trên, `(1, 0, 0)` của Rule C là điểm cao nhất (ID luôn lớn hơn Class và Element). Do đó, Rule C ghi đè tất cả các rule còn lại.

**3. Nếu thêm `<p class="price" id="main-price" style="color: orange;">`, element có màu gì?**
- **Màu:** Cam (Orange).
- **Giải thích:** Đây là Inline CSS. Inline CSS có độ ưu tiên cao hơn tất cả các ID, Class hay Element Selectors (điểm của nó có thể coi là `1, 0, 0, 0`). Do đó nó sẽ đánh bại Rule C.

**4. Nếu Rule A thêm `!important`, element có màu gì? Tại sao?**
- **Màu:** Đen (Black) - Nhận từ Rule A (`p { color: black !important; }`).
- **Giải thích:** Từ khóa `!important` là "kẻ phá luật" trong CSS. Khi một thuộc tính được gắn `!important`, nó sẽ bỏ qua toàn bộ hệ thống tính điểm Specificity (kể cả Inline CSS) và bắt buộc trình duyệt phải áp dụng giá trị đó. Do đó, dù Rule A chỉ là Element Selector yếu ớt, nhờ `!important` nó lại trở thành kẻ chiến thắng.


## PHẦN B — Thực hành
### B1: Liệt kê 5 loại Selector đã sử dụng trong file `style.css`:

---

## 1. Universal Selector (Selector Toàn cục)
- ` { box-sizing: border-box; }`
- Tác dụng: Chọn toàn bộ các phần tử trên trang để reset model hộp (box model)

## 2. Element Selector (Selector Theo Thẻ HTML)
-   ```css
    body { background-color: #fff0f5; color: #4a373d; }
    h2 { color: #6d4c57; } 

- Tác dụng: Chọn trực tiếp bằng cách gọi tên các thẻ HTML (`body`, `h2`, `table`, `footer`). Style này sẽ tự động áp dụng đồng loạt cho toàn bộ các thẻ cùng loại xuất hiện trên trang web

## 3. Class Selector (Selector Theo Lớp)
- ```css
  header nav ul li a.active {
      color: #6d4c57;
      background-color: #ffffff;
  }
- Tác dụng: Chọn toàn bộ các phần tử trên trang để reset model hộp (box model)

## 4. Descendant Selector (Selector Con Cháu / Phân Cấp)
- ```css
  header nav ul li a { ... }
  table thead tr { ... }

- Tác dụng: Sử dụng khoảng trắng giữa các thẻ để mô tả đường đi từ thẻ cha lớn vào đến thẻ con cháu nằm sâu bên trong. Ví dụ: `table thead tr` có nghĩa là chỉ chọn dòng `tr` nằm bên trong `thead` của một cái `table`. Selector này giúp cô lập phạm vi ảnh hưởng của CSS, không làm các thuộc tính bị ghi đè lung tung ra ngoài layout

## 5. Pseudo-class Selector (Selector Lớp Giả Định Trạng Thái)
- ```css
  header nav ul li a:hover { text-decoration: underline; }
  table tbody tr:nth-child(even) { background-color: #fff5f7; }
  table tbody tr:hover { background-color: #fbcfe8; }

- Tác dụng:  Sử dụng dấu hai chấm : để bắt các trạng thái đặc biệt hoặc các thuật toán vị trí của thẻ.

    hover dùng để thay đổi giao diện động khi người dùng di chuột máy tính vào menu hoặc các dòng trong bảng kỹ năng.

    nth-child(even) là kỹ thuật Zebra Striping tự động tính toán và tô màu nền cho các dòng mang số thứ tự chẵn (2, 4, 6...) trong bảng, giúp bảng dữ liệu trực quan và dễ theo dõi hơn.

# BÀI LÀM: BOX MODEL LAB — CÂU B2

## Phần 1 — Minh chứng content-box vs border-box

Dựa trên kết quả đo đạc thực tế từ công cụ DevTools (Tab Computed), kích thước của 2 hộp hiển thị như sau:
*   **Hộp 1 (content-box):** Chiều rộng thực tế = **350px**
*   **Hộp 2 (border-box):** Chiều rộng thực tế = **300px**

### Giải thích sự khác biệt:
*   **Với `content-box` (Hộp 1):** Thuộc tính `width: 300px` chỉ áp dụng riêng cho vùng chứa nội dung (content). Do đó, tổng chiều rộng thực tế hiển thị trên trình duyệt sẽ bị phình to ra vì phải cộng thêm `padding` và `border` của cả 2 bên (trái và phải):
    - Tổng width = 300px(content) + 20px + 2(padding) + 5px + 2(border) = 350px
*   **Với `border-box` (Hộp 2):** Thuộc tính `width: 300px` được khóa cố định làm tổng chiều rộng hiển thị của toàn bộ chiếc hộp. Trình duyệt sẽ tự động ép vùng chứa nội dung nhỏ lại (chỉ còn $300 - 40 - 10 = 250\text{px}$) để nhường không gian cho padding và border nằm vừa vặn bên trong lòng chiếc hộp.

---

## Phần 2 — Layout 3 cột

*   **Nếu KHÔNG dùng `border-box` (Mặc định `content-box`):**
    Tổng chiều rộng thực tế của 3 cột sẽ bị đẩy lên thành:
    - Cột trái = 250 + (15 x 2) = 280px
    - Cột giữa = 500 + (20 x 2) = 540px
    - Cột phải = 250 + (15 x 2) = 280px
    - Tổng cộng = 280 + 540 + 280 = 1100px
    - Vì 1100px vượt quá giới hạn 1100px của container, cột thứ 3 (Ads) sẽ **bị vỡ layout và rớt xuống dòng dưới** 

*   **Khi CÓ dùng `border-box` (Đoạn mã CSS đã tối ưu):**
    Kích thước hiển thị của cả 3 cột được giữ nguyên đúng tỷ lệ lý thuyết 250px + 500px + 250px = 1000px. Do đó, cả 3 cột sẽ đứng **gọn gàng, thẳng hàng trên cùng một dòng**, layout chuẩn xác 100%.

### B3-Specificity Battle
### 1. Liệt kê 10 rules + Specificity score
*(Công thức tính: Số ID, Số Class/Thuộc tính, Số Thẻ HTML)*

1. `*`                           → Specificity: **0,0,0** (Màu gray)
2. `p`                           → Specificity: **0,0,1** (Màu pink)
3. `.text`                       → Specificity: **0,1,0** (Màu blue)
4. `p.text`                      → Specificity: **0,1,1** (Màu green)
5. `.text.highlight`             → Specificity: **0,2,0** (Màu orange)
6. `p.text.highlight`            → Specificity: **0,2,1** (Màu purple)
7. `#demo`                       → Specificity: **1,0,0** (Màu red)
8. `p#demo`                      → Specificity: **1,0,1** (Màu brown)
9. `#demo.text.highlight`        → Specificity: **1,2,0** (Màu teal)
10. `p#demo.text.highlight`      → Specificity: **1,2,1** (Màu gold)

### 2. Element cuối cùng hiển thị màu gì? Tại sao?
- **Kết quả:** Chữ "Hello World" sẽ hiển thị màu **vàng (gold)**.
- **Tại sao:** Trình duyệt sẽ so sánh điểm số Specificity của tất cả các rules. Bộ chọn số 10 (`p#demo.text.highlight`) có điểm số cao nhất là **1,2,1** (gồm 1 ID `#demo`, 2 class `.text .highlight`, và 1 thẻ `p`). Do đó, nó đánh bại hoàn toàn 9 rules còn lại.

### 3. Screenshot kết quả
*[Chèn ảnh chụp màn hình trình duyệt hiển thị chữ "Hello World" màu gold tại đây]*

### 4. Thay đổi thứ tự rules trong CSS file. Kết quả có đổi không? Giải thích.
- **Kết quả:** Khi xáo trộn vị trí của 10 rules này trong file CSS, màu sắc của element **KHÔNG HỀ THAY ĐỔI** (vẫn là màu gold).
- **Giải thích:** Nguyên tắc **Thác đổ (Cascade - thứ tự ưu tiên từ trên xuống)** chỉ có tác dụng khi hai CSS rules có **ĐIỂM SPECIFICITY BẰNG NHAU HOÀN TOÀN**. Lúc đó rule nào nằm dưới cùng mới "thắng". Tuy nhiên, 10 rules trong bài tập này đều có điểm Specificity **khác biệt nhau**. Theo luật của CSS, Specificity luôn ưu tiên xét trước Cascade. Kẻ có điểm Specificity cao nhất sẽ luôn thắng bất kể nó được đặt ở dòng đầu tiên hay dòng cuối cùng của file CSS.


