# 📋 PHIẾU BÀI TẬP 02
## PHẦN A — KIỂM TRA ĐỌC HIỂU (25 điểm)
### Câu A1—Input Types
         
Liệt kê **10 input types** khác nhau trong HTML5, cho mỗi type:
- Giao diện hiển thị (mô tả bằng lời)
- Validation tự động (nếu có)
- Use case cụ thể trong trang E-Commerce  

1. type="email" → Ô nhập giống text dành cho email , kiểm tra có dấu @ và format email → Dùng cho đăng ký tài khoản

2. type="password" → Ô nhập bị ẩn ký tự → Dùng cho mật khẩu

3. type="number" → Ô nhập số có nút tăng/giảm, chỉ nhập số → Dùng nhập số lượng sản phẩm

4. type="tel" → Ô nhập số điện thoại → Dùng cho thông tin giao hàng

5. type="date" → Hiển thị lịch chọn ngày → Dùng chọn ngày sinh hoặc ngày giao hàng

6. type="checkbox" → Ô tick nhiều lựa chọn → Dùng chọn đồng ý điều khoản

7. type="radio" → Chọn 1 trong nhiều → Dùng chọn giới tính / phương thức thanh toán

8. type="file" → Upload file → Dùng upload ảnh sản phẩm

9. type="text" → Ô nhập văn bản 1 dòng → Nhập tên khách, tên sản phẩm cần tìm kiếm

10. type="search" → Ô tìm kiếm → Dùng tìm sản phẩm trong shop

Nguồn tham chiếu: tuan_1_html5/07_forms_interactive.md/Form cơ bản — Anatomy

### Câu A2— Validation Attributes

**TH 1 (Required): `<input type="text" required value="">`**
* **Dự đoán:** Khi bấm Submit, form sẽ **không** được gửi đi. Trình duyệt sẽ chặn lại, focus vào ô này và hiển thị cảnh báo (ví dụ: *"Vui lòng điền vào trường này"* hoặc *"Please fill out this field"*).
* **Giải thích:** Thuộc tính `required` bắt buộc người dùng không được phép bỏ trống trường nhập liệu. Do thuộc tính `value=""` (đang rỗng) nên dữ liệu không thỏa mãn điều kiện xác thực.
![TH1](TH1.png)

**TH 2 (Email): `<input type="email" value="abc">`**
* **Dự đoán:** Khi bấm Submit, form sẽ **không** được gửi đi. Trình duyệt chặn lại và báo lỗi sai định dạng (ví dụ: *"Vui lòng bao gồm '@' trong địa chỉ email"* hoặc *"Please include an '@' in the email address"*).
* **Giải thích:** Thuộc tính `type="email"` yêu cầu dữ liệu bắt buộc phải tuân theo cấu trúc của một email hợp lệ (phải chứa ký tự `@` và tên miền). Chuỗi `"abc"` chỉ là text thông thường, thiếu ký tự `@` nên bị đánh giá là không hợp lệ.
![TH2](TH2.png)

**TH 3 (Min/Max): `<input type="number" min="1" max="10" value="15">`**
* **Dự đoán:** Khi bấm Submit, form sẽ **không** được gửi đi. Trình duyệt hiện cảnh báo giá trị đã vượt quá mức quy định (ví dụ: *"Giá trị phải nhỏ hơn hoặc bằng 10"* hoặc *"Value must be less than or equal to 10"*).
* **Giải thích:** Thẻ sử dụng `type="number"` kết hợp với thuộc tính `max="10"`, tức là quy định con số lớn nhất được phép gửi đi là 10. Giá trị khởi tạo `value="15"` đã vượt quá giới hạn trần này.
![TH3](TH3.png)

**TH 4 (Pattern): `<input type="text" pattern="[0-9]{10}" value="abc123">`**
* **Dự đoán:** Khi bấm Submit, form sẽ **không** được gửi đi. Trình duyệt hiện thông báo dữ liệu không khớp với định dạng yêu cầu (ví dụ: *"Vui lòng khớp với định dạng được yêu cầu"* hoặc *"Please match the requested format"*).
* **Giải thích:** Thuộc tính `pattern` sử dụng Biểu thức chính quy (Regular Expression). Chuỗi Regex `[0-9]{10}` quy định người dùng bắt buộc phải nhập **chỉ các chữ số** và có **độ dài chính xác là 10 ký tự**. Chuỗi `"abc123"` vi phạm quy tắc vì chứa cả chữ cái và chỉ có độ dài là 6.
![TH4](TH4.png)

**TH 5 (Minlength): `<input type="password" minlength="8" value="123">`**
* **Dự đoán:** Khi bấm Submit, form sẽ **không** được gửi đi. Trình duyệt hiện thông báo chuỗi nhập vào chưa đủ độ dài (ví dụ: *"Vui lòng kéo dài văn bản này thành từ 8 ký tự trở lên"* hoặc *"Please lengthen this text to 8 characters or more"*).
* **Giải thích:** Thuộc tính `minlength="8"` bắt buộc độ dài tối thiểu của chuỗi mật khẩu phải là 8 ký tự. Giá trị đang được nhập là `"123"` mới chỉ đạt 3 ký tự nên đã bị trình duyệt chặn lại. 
![TH5](TH5.png)

Nguồn tham chiếu: tuan_1_html5/07_forms_interactive.md/Form cơ bản — Anatomy

### Câu A3 — Accessibility

**1. Tại sao `<label for="email">` quan trọng cho người dùng screen reader?**
Khi sử dụng Screen Reader (trình đọc màn hình), thuộc tính `for` đóng vai trò là "cầu nối" định danh.

*   **Mở rộng diện tích click:** Giúp người dùng bình thường dễ dàng click vào dòng chữ để kích hoạt ô nhập liệu (đặc biệt hữu ích trên mobile).
* **Tạo sự liên kết ngữ nghĩa:** Thuộc tính `for` trong thẻ `<label>` sẽ liên kết chặt chẽ với thuộc tính `id` của thẻ `<input>` (ví dụ: `<input id="email">`). 
* **Hỗ trợ Screen Reader:** Khi một người khiếm thị sử dụng phím Tab để di chuyển đến ô nhập liệu, trình đọc màn hình (Screen Reader) sẽ tự động đọc to nội dung của thẻ `<label>` được liên kết. Nếu không có `for`, trình đọc màn hình sẽ chỉ đọc là "Edit text" (Ô nhập chữ) và người dùng sẽ không biết ô đó yêu cầu nhập cái gì (email, mật khẩu hay họ tên).

**2. Khi nào dùng `<fieldset>` + `<legend>`? Cho ví dụ cụ thể.**
* **Khi nào dùng:** Cặp thẻ này được sử dụng để **nhóm các trường dữ liệu (inputs) có liên quan logic lại với nhau** trong một form lớn. `<fieldset>` tạo ra một khối bao bọc nhóm đó, còn `<legend>` đóng vai trò làm tiêu đề giải thích ý nghĩa cho cả nhóm. Đặc biệt bắt buộc dùng khi nhóm các nút Radio hoặc Checkbox để Screen Reader hiểu chúng thuộc cùng một câu hỏi.
* **Ví dụ (Nhóm phương thức thanh toán):**
  ```html
  <fieldset>
    <legend>Chọn phương thức thanh toán</legend>
    
    <input type="radio" id="visa" name="payment" value="visa">
    <label for="visa">Thẻ Visa/Mastercard</label><br>

    <input type="radio" id="momo" name="payment" value="momo">
    <label for="momo">Ví MoMo</label>
</fieldset>```

**3. aria-label dùng khi nào? Tại sao KHÔNG nên dùng aria-label khi đã có `<label>`?**

* **Khi nào dùng:**  aria-label được sử dụng để cung cấp "nhãn ẩn" cho các phần tử không có chữ hiển thị trên giao diện để mô tả chức năng của nó. Trường hợp phổ biến nhất là các nút bấm chỉ chứa Icon (ví dụ: Nút có hình kính lúp để tìm kiếm, nút hình dấu X để đóng popup). Người sáng mắt nhìn icon là hiểu, nhưng người khiếm thị thì cần `<button aria-label="Đóng cửa sổ"> ❌ </button>` để máy đọc cho họ nghe.

Tại sao KHÔNG nên dùng chung với `<label>`: 
* Nguyên tắc tối thượng của Accessibility là: Native HTML (thẻ chuẩn) luôn tốt hơn ARIA.
* Nếu đã dùng `<label for="...">` để gán nhãn rõ ràng rồi mà lại tiếp tục thêm aria-label vào thẻ `<input>`, trình đọc màn hình có thể sẽ bị bối rối, đọc lặp lại 2 lần (ví dụ: "Email, Email, edit text") gây hiệu ứng nói lắp, làm trải nghiệm của người dùng khiếm thị trở nên tồi tệ hơn. Chỉ dùng ARIA khi HTML tiêu chuẩn không thể giải quyết được.

Nguồn tham chiếu: tuan_1_html5/07_forms_interactive.md/Accessibility — Form cho mọi người

### Câu A4 — Media

### Câu A4: Media (Hình ảnh và Video)

**1. Thuộc tính `loading="lazy"` trên thẻ `<img>`**
* **Giải thích & Cải thiện:** `loading="lazy"` (Tải lười biếng) là một kỹ thuật thông báo cho trình duyệt web **trì hoãn việc tải hình ảnh** cho đến khi người dùng cuộn chuột đến gần khu vực chứa ảnh đó. 
    * Cải thiện **Tốc độ tải trang ban đầu (Performance):** Trang web sẽ load nhanh hơn rất nhiều vì không phải tải cùng lúc hàng chục bức ảnh.
    * Cải thiện **Băng thông (Bandwidth):** Tiết kiệm dữ liệu mạng cho người dùng nếu họ không cuộn xuống xem hết trang.
* **Khi KHÔNG nên dùng:** Không dùng `lazy` cho các hình ảnh nằm "Above the fold" (Những hình ảnh đập ngay vào mắt người dùng khi vừa mở web lên mà chưa cần cuộn chuột, ví dụ: Logo, Ảnh banner to ở đầu trang, Ảnh chính của sản phẩm). Việc lazy load các ảnh này sẽ làm chậm thời gian hiển thị nội dung chính (ảnh hưởng xấu tới điểm LCP trong SEO). Các ảnh này nên để mặc định là `loading="eager"`.

**2. Tại sao nên cung cấp nhiều `<source>` trong thẻ `<video>`? Liệt kê ít nhất 3 format video web phổ biến.**

* **Nên cung cấp nhiều `<source>` trong thẻ `<video>` vì**  các trình duyệt web khác nhau (Chrome, Safari, Firefox, Edge) sử dụng các "bộ giải mã" (codec) video khác nhau. Việc cung cấp nhiều thẻ `<source>` giúp tạo ra một cơ chế "dự phòng" (fallback). Trình duyệt sẽ đọc từ trên xuống dưới, format nào nó hỗ trợ thì nó sẽ tải và phát, bỏ qua các thẻ còn lại. Đảm bảo video chạy mượt trên mọi thiết bị.

* **3 format video web phổ biến:** 
    * **MP4 (`video/mp4`):** Phổ biến nhất, tương thích 100% với mọi trình duyệt và thiết bị (kể cả di động).
    * **WebM (`video/webm`):** Định dạng do Google phát triển, tối ưu cực tốt cho web (dung lượng nhẹ hơn MP4 mà chất lượng tương đương), hỗ trợ nền trong suốt.
    * **Ogg (`video/ogg`):** Định dạng mã nguồn mở (mặc dù hiện tại ít được dùng hơn MP4 và WebM nhưng vẫn được hỗ trợ làm chuẩn dự phòng trên Firefox/Opera).

**3. Thuộc tính `alt` trên `<img>`**
* **Tác dụng:** `alt` (Alternative Text - Văn bản thay thế) có 3 vai trò cực kỳ quan trọng:
  1. **Hiển thị thay thế:** Hiện ra khi link ảnh bị hỏng hoặc mạng quá chậm không tải được ảnh.
  2. **Accessibility (Khả năng tiếp cận):** Phần mềm đọc màn hình sẽ đọc dòng chữ này cho người khiếm thị nghe để họ hình dung được bức ảnh.
  3. **SEO:** Giúp Googlebot hiểu nội dung bức ảnh để xếp hạng trên Google Images.

* **Ví dụ cách viết `alt` tốt cho 3 trường hợp:**
  * **Ảnh sản phẩm iPhone 16:** Cần mô tả rõ ràng, chính xác. 
    `alt="Điện thoại iPhone 16 màu Xanh Teal với cụm hai camera đặt dọc và nút Action mới"`
  * **Ảnh trang trí (decorative):** Không làm phiền người dùng Screen Reader bằng những thông tin thừa thãi (như mấy cái hình khối, đường kẻ, hoa lá cành chỉ để cho đẹp). Bắt buộc phải để rỗng để trình đọc màn hình bỏ qua, không làm phiền người khiếm thị.
    `alt=""`
  * **Ảnh biểu đồ doanh thu Q1/2026:** 
    `alt="Biểu đồ cột doanh thu quý 1 năm 2026: Đạt 500 tỷ đồng, tăng trưởng 15% so với quý trước"` 

Nguồn tham chiếu: tuan_1_html5/04_visible_part_html.md/Media

### Câu A5 — So sánh `<figure>` vs `<img>`

```html
<!-- Cách 1 -->
<img src="product.jpg" alt="iPhone">

<!-- Cách 2 -->
<figure>
    <img src="product.jpg" alt="iPhone 16 Pro Max 256GB Titan">
    <figcaption>iPhone 16 Pro Max — 25.990.000đ</figcaption>
</figure>
```

1. Dùng `<img>`độc lập: * Chỉ là một bức ảnh rời rạc. Trình duyệt không biết chữ nằm dưới có phải là chú thích cho ảnh hay không.

    Nên dùng: Làm logo, icon, hoặc ảnh trang trí cho đẹp.
    
    ```html
    <img src="product.jpg" alt="iPhone 16">
    <p>Giá: 25.990.000đ</p>
    ```

2. Dùng `<figure> bọc <img> và <figcaption>`: * Tạo thành một khối gắn kết chặt chẽ giữa Ảnh và Chú thích.

    Nên dùng: Làm khung sản phẩm (Product Card) trên web bán hàng
    ```html
    <figure>
    <img src="product.jpg" alt="iPhone 16">
    <figcaption>Giá: 25.990.000đ</figcaption> 
    </figure>
    ```

## Phần B(TH)
- Vì HTML5 validation chỉ kiểm tra từng trường input riêng lẻ (required, pattern, minlength…) và không hỗ trợ so sánh giá trị giữa hai input. Vì vậy, việc xác nhận mật khẩu (confirm password) không thể thực hiện bằng HTML thuần mà cần sử dụng JavaScript để kiểm tra hai giá trị có giống nhau hay không---HTML chỉ kiểm tra từng ô ,không so sánh giữa các ô

## PHẦN C — PHÂN TÍCH & SUY LUẬN (20 điểm)

### Câu C1 (10đ) — Debug Form

Form dưới đây có **8 lỗi** về validation, accessibility, và best practices. Tìm và sửa tất cả.

```html
<form>
    Tên: <input type="text">
    
    <input type="email" placeholder="Email của bạn">
    
    <input type="password" placeholder="Mật khẩu">
    <input type="password" placeholder="Nhập lại mật khẩu">
    
    Phone: <input type="text" value="0901234567">
    
    <select>
        <option>Hà Nội</option>
        <option>TP.HCM</option>
    </select>
    
    <label>
        Tôi đồng ý điều khoản
    </label>
    
    <input type="submit" value="Gửi">
</form>
```
Lỗi 1:
Input "Tên" không có label
Sửa:
`<label for="name">Tên:</label>
<input type="text" id="name" name="name" required>`

Lỗi 2:
Email không có label
Sửa:
`<label for="email">Email:</label>
<input type="email" id="email" required>`

Lỗi 3:
Password không có validation
Sửa:
`<input type="password" minlength="8" required>`

Lỗi 4:
Confirm password không có name/id
Sửa:
`<input type="password" id="confirm" name="confirm" required>`

Lỗi 5:
Phone dùng type="text"
Sửa:
`<input type="tel" pattern="[0-9]{10}">`

Lỗi 6:
Select không có label
Sửa:
`<label for="city">Thành phố:</label>
<select id="city">`

Lỗi 7:
Checkbox không có input
Sửa:
`<label>
  <input type="checkbox" required>
  Tôi đồng ý điều khoản
</label>`

Lỗi 8:
Form không có method/action
Sửa:
`<form action="#" method="POST">`

### Câu C2— Thiết kế chiến lược Validation
1. Regex
CCCD:pattern="[0-9]{12}"
Số tài khoản:pattern="[0-9]{10,15}"

2. HTML5 validation KHÔNG đủ an toàn
Vì:Có thể bypass (DevTools),không bảo vệ server

3. 3 validation HTML không làm được

- So sánh password vs confirm password
- Kiểm tra email đã tồn tại
- Validate logic phức tạp (VD: ngày sinh > 18 tuổi)

4. 2 rủi ro nếu không validate backend

- Hacker gửi dữ liệu sai → phá hệ thống
- SQL Injection / dữ liệu rác

