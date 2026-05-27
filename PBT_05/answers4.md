# PHIẾU BÀI TẬP 05
# **CSS RESPONSIVE & SCSS — Responsive Design, Media Queries, Sass**
## PHẦN A 
### Câu A1— Viewport & Mobile-First

1. Viết chính xác thẻ `<meta viewport>` chuẩn. Giải thích từng thuộc tính.

### ```<meta name="viewport" content="width=device-width, initial-scale=1.0">```
- width=device-width: Ép chiều rộng của trang web bằng đúng với chiều rộng vật lý của màn hình thiết bị.
- initial-scale=1.0: Đặt mức thu phóng ban đầu là 100% (không tự động phóng to hay thu nhỏ khi mới tải trang).

2. Nếu THIẾU thẻ này, iPhone sẽ hiển thị trang web như thế nào? 
- Trình duyệt trên điện thoại sẽ giả định đây là trang web dành cho máy tính (thường rộng khoảng 980px) và tự động "thu nhỏ" toàn bộ trang lại để nhét vừa vào màn hình điện thoại. Kết quả là chữ và nút bấm sẽ bé xíu, người dùng phải zoom lên mới đọc được.

3. 
- Mobile-First: Code CSS cho giao diện điện thoại trước (mặc định), sau đó dùng @media (min-width) để phóng to/thêm cột cho màn hình lớn.
- vd: .box { width: 100%; } 
    @media (min-width: 768px) { .box { width: 50%; } }
- Desktop-First: Code CSS cho máy tính trước, sau đó dùng @media (max-width) để bóp nhỏ layout cho điện thoại.
- vd: .box { width: 50%; } 
@media (max-width: 768px) { .box { width: 100%; } }
- Nên dùng Mobile-First: Tối ưu hiệu suất cho điện thoại (tải ít code thừa hơn), ưu tiên tập trung vào nội dung và tính năng cốt lõi nhất trước khi mở rộng.
### Câu A2 — Breakpoints
- framework Bootstrap

| Breakpoint | Kích thước pixel | Thiết bị đại diện | Ví dụ: Lưới sản phẩm |
| :--- | :--- | :--- | :--- |
| **xs** (Extra small) | `< 576px` | Điện thoại thông minh (chế độ dọc) | 1 cột |
| **sm** (Small) | `≥ 576px` | Điện thoại thông minh (chế độ ngang) / Phablet | 2 cột |
| **md** (Medium) | `≥ 768px` | Máy tính bảng (Tablet/iPad) | 3 cột |
| **lg** (Large) | `≥ 992px` | Laptop / Màn hình desktop nhỏ | 4 cột |
| **xl** (Extra large) | `≥ 1200px` | Màn hình desktop lớn | 4 - 6 cột |
| **xxl** (Extra extra large)| `≥ 1400px` | Màn hình desktop rất lớn | 6 cột |

### Câu A3 — Media Queries
```css
.container { width: 100%; padding: 10px; }

@media (min-width: 576px) { .container { width: 540px; } }
@media (min-width: 768px) { .container { width: 720px; } }
@media (min-width: 992px) { .container { width: 960px; } }
@media (min-width: 1200px) { .container { width: 1140px; } }
```

| Chiều rộng màn hình | `.container` width |Giải thích|
|---------------------|--------------------|-----------|
| 375px (iPhone SE) | 100% |Nhỏ hơn 576px, nhận giá trị CSS mặc định |
| 600px | 540px |Lớn hơn 576px nhưng chưa tới 768px|
| 800px | 720px |Lớn hơn 768px nhưng chưa tới 992px|
| 1000px | 960px |Lớn hơn 992px nhưng chưa tới 1200px |
| 1400px | 1140px |Nằm trong khoảng từ 1200px trở lên |

### Câu A4 — SCSS Basics
1. Variables (`$primary-color`)
- Variables (Biến): Lưu các giá trị dùng chung (màu sắc, font) để tái sử dụng và dễ đổi hàng loạt.
- vd: $primary: #007bff;
    button { color: $primary; }
2. Nesting (viết CSS lồng nhau)
- Nesting (Lồng nhau): Viết CSS phân cấp theo cấu trúc HTML, code gọn và dễ đọc hơn.
- vd: nav { 
    ul { list-style: none; }
    }
3. Mixins (`@mixin`, `@include`)
- Mixins: Tạo ra một khối code (như một hàm) để gọi lại nhiều lần, có thể truyền tham số
- vd:@mixin flex-center { display: flex; align-items: center; justify-content: center; }
.box { @include flex-center; }
4. `@extend` / Inheritance
- @extend (Kế thừa): Cho phép một class sao chép toàn bộ thuộc tính của một class khác
- vd:.btn { padding: 10px; border: none; }
.btn-red { @extend .btn; background: red; }

- Trình duyệt KHÔNG đọc được file `.scss` vì nó chỉ hiểu được mã CSS thuần túy 
- Để chuyển SCSS → CSS cần sử dụng một trình biên dịch (Compiler) như Node Sass, Dart Sass, hoặc các extension cài trên VS Code (như Live Sass Compiler) để "dịch" file .scss thành file .css bình thường rồi mới nhúng file .css đó vào HTML

---# PHIẾU BÀI TẬP 05
# **CSS RESPONSIVE & SCSS — Responsive Design, Media Queries, Sass**
## PHẦN A 
### Câu A1— Viewport & Mobile-First

1. Viết chính xác thẻ `<meta viewport>` chuẩn. Giải thích từng thuộc tính.

### ```<meta name="viewport" content="width=device-width, initial-scale=1.0">```
- width=device-width: Ép chiều rộng của trang web bằng đúng với chiều rộng vật lý của màn hình thiết bị.
- initial-scale=1.0: Đặt mức thu phóng ban đầu là 100% (không tự động phóng to hay thu nhỏ khi mới tải trang).

2. Nếu THIẾU thẻ này, iPhone sẽ hiển thị trang web như thế nào? 
- Trình duyệt trên điện thoại sẽ giả định đây là trang web dành cho máy tính (thường rộng khoảng 980px) và tự động "thu nhỏ" toàn bộ trang lại để nhét vừa vào màn hình điện thoại. Kết quả là chữ và nút bấm sẽ bé xíu, người dùng phải zoom lên mới đọc được.

3. 
- Mobile-First: Code CSS cho giao diện điện thoại trước (mặc định), sau đó dùng @media (min-width) để phóng to/thêm cột cho màn hình lớn.
- vd: .box { width: 100%; } 
    @media (min-width: 768px) { .box { width: 50%; } }
- Desktop-First: Code CSS cho máy tính trước, sau đó dùng @media (max-width) để bóp nhỏ layout cho điện thoại.
- vd: .box { width: 50%; } 
@media (max-width: 768px) { .box { width: 100%; } }
- Nên dùng Mobile-First: Tối ưu hiệu suất cho điện thoại (tải ít code thừa hơn), ưu tiên tập trung vào nội dung và tính năng cốt lõi nhất trước khi mở rộng.
### Câu A2 — Breakpoints
- framework Bootstrap

| Breakpoint | Kích thước pixel | Thiết bị đại diện | Ví dụ: Lưới sản phẩm |
| :--- | :--- | :--- | :--- |
| **xs** (Extra small) | `< 576px` | Điện thoại thông minh (chế độ dọc) | 1 cột |
| **sm** (Small) | `≥ 576px` | Điện thoại thông minh (chế độ ngang) / Phablet | 2 cột |
| **md** (Medium) | `≥ 768px` | Máy tính bảng (Tablet/iPad) | 3 cột |
| **lg** (Large) | `≥ 992px` | Laptop / Màn hình desktop nhỏ | 4 cột |
| **xl** (Extra large) | `≥ 1200px` | Màn hình desktop lớn | 4 - 6 cột |
| **xxl** (Extra extra large)| `≥ 1400px` | Màn hình desktop rất lớn | 6 cột |

### Câu A3 — Media Queries
```css
.container { width: 100%; padding: 10px; }

@media (min-width: 576px) { .container { width: 540px; } }
@media (min-width: 768px) { .container { width: 720px; } }
@media (min-width: 992px) { .container { width: 960px; } }
@media (min-width: 1200px) { .container { width: 1140px; } }
```

| Chiều rộng màn hình | `.container` width |Giải thích|
|---------------------|--------------------|-----------|
| 375px (iPhone SE) | 100% |Nhỏ hơn 576px, nhận giá trị CSS mặc định |
| 600px | 540px |Lớn hơn 576px nhưng chưa tới 768px|
| 800px | 720px |Lớn hơn 768px nhưng chưa tới 992px|
| 1000px | 960px |Lớn hơn 992px nhưng chưa tới 1200px |
| 1400px | 1140px |Nằm trong khoảng từ 1200px trở lên |

### Câu A4 — SCSS Basics
1. Variables (`$primary-color`)
- Variables (Biến): Lưu các giá trị dùng chung (màu sắc, font) để tái sử dụng và dễ đổi hàng loạt.
- vd: $primary: #007bff;
    button { color: $primary; }
2. Nesting (viết CSS lồng nhau)
- Nesting (Lồng nhau): Viết CSS phân cấp theo cấu trúc HTML, code gọn và dễ đọc hơn.
- vd: nav { 
    ul { list-style: none; }
    }
3. Mixins (`@mixin`, `@include`)
- Mixins: Tạo ra một khối code (như một hàm) để gọi lại nhiều lần, có thể truyền tham số
- vd:@mixin flex-center { display: flex; align-items: center; justify-content: center; }
.box { @include flex-center; }
4. `@extend` / Inheritance
- @extend (Kế thừa): Cho phép một class sao chép toàn bộ thuộc tính của một class khác
- vd:.btn { padding: 10px; border: none; }
.btn-red { @extend .btn; background: red; }

- Trình duyệt KHÔNG đọc được file `.scss` vì nó chỉ hiểu được mã CSS thuần túy 
- Để chuyển SCSS → CSS cần sử dụng một trình biên dịch (Compiler) như Node Sass, Dart Sass, hoặc các extension cài trên VS Code (như Live Sass Compiler) để "dịch" file .scss thành file .css bình thường rồi mới nhúng file .css đó vào HTML

---