## Bài 1.1 — Component render lần đầu
1. Tại sao component chỉ render 1 lần
Component chỉ render một lần duy nhất vì đây là quá trình Initial Render (Render lần đầu) khi ứng dụng vừa khởi chạy.

- Khi trình duyệt tải trang, React sẽ quét cây component và gọi hàm LifecycleDemo() để biên dịch code JSX thành các phần tử DOM thực tế và đẩy lên giao diện (giai đoạn Commit).

- Sau khi hiển thị xong, vì component này hoàn toàn là giao diện tĩnh (static UI), không lưu trữ trạng thái biến động nào và không nhận dữ liệu động từ bên ngoài, nên React giữ nguyên giao diện và không có lý do để chạy lại hàm này lần nào nữa. Do đó, dòng console.log chỉ xuất hiện đúng 1 lần.

2. Khi nào nó sẽ render lại (Re-render)
Theo lý thuyết vòng đời của React, component LifecycleDemo sẽ được kích hoạt re-render (hàm được gọi và chạy lại từ đầu) khi rơi vào một trong ba trường hợp sau:

- State (Trạng thái nội bộ) thay đổi: Khi component sử dụng các Hook quản lý trạng thái (như useState) và giá trị của state đó bị thay đổi bởi một hành động nào đó (ví dụ: click button, gõ input).

- Props (Thuộc tính truyền vào) thay đổi: Khi component cha truyền dữ liệu vào cho LifecycleDemo thông qua thuộc tính (props), và các dữ liệu này được cập nhật giá trị mới.

- Component cha re-render: Khi component chứa LifecycleDemo (component cha) bị kích hoạt render lại, theo cơ chế mặc định của React, toàn bộ các component con bên trong nó cũng sẽ bị re-render theo.

## Bài 1.2 — Biến "bình thường" vs useState
1. Kết quả khi chạy BadCounter và nhấn nút:
- Màn hình (UI): Con số hiển thị tại dòng "Bộ đếm: " không thay đổi (vẫn giữ nguyên là 0), dù có nhấn nút bao nhiêu lần.

- Hộp thoại Console (F12): Giá trị của biến count vẫn tăng lên đều đặn (1, 2, 3...) sau mỗi lần click.

- Giải thích: Do count chỉ là một biến cục bộ bình thường. Khi giá trị của nó thay đổi, React không hề nhận được thông báo nào để vẽ lại giao diện.

2. Kết quả khi chạy GoodCounter và nhấn nút:
- Màn hình (UI): Con số hiển thị tại "Bộ đếm: " cập nhật ngay lập tức theo thời gian thực (tăng lên 1, 2, 3... tương ứng với số lần bấm).

- Giải thích: Hàm setCount của useState đã thông báo cho React biết trạng thái (state) nội bộ đã thay đổi. React lập tức kích hoạt cơ chế re-render để cập nhật lại UI.

3. Số lần xuất hiện log "render" trong Console:
- Khi chạy BadCounter: Log chỉ xuất hiện đúng 1 lần duy nhất khi ứng dụng được tải (Initial Render). Khi bấm nút tăng, không có thêm log nào xuất hiện.

- Khi chạy GoodCounter: Log xuất hiện mỗi khi chúng ta nhấn nút.

## Bài 1.3 — Luồng hoạt động (Flow)

1. Giai đoạn 1: Khởi tạo ứng dụng (Initial Render)
- React gọi hàm FlowDemo().

- Dòng console.log("🔄 Component render!") chạy lần thứ 1.

- Khởi tạo step = 1 thông qua useState(1).

- Trả về (return) đoạn JSX. Màn hình hiển thị: "Bước hiện tại: 1" và dòng "👋 Bước 1: Xin chào!".

2. Giai đoạn 2: Tương tác người dùng & Re-render (Vòng lặp tuần hoàn)
Người dùng click vào nút "Bước tiếp theo →".

- Sự kiện onClick kích hoạt, chạy hàm nặc danh và gọi setStep(step + 1) (tức là setStep(2)).

- React nhận tín hiệu trạng thái của step đã đổi từ 1 sang 2.

- Kích hoạt Re-render: React lập tức gọi lại hàm FlowDemo() lần thứ 2.

- Dòng console.log("🔄 Component render!") tiếp tục chạy lần 2.

- Hàm useState lúc này trả về giá trị mới là step = 2.

- Trả về đoạn JSX mới. React so sánh và cập nhật lại màn hình: "Bước hiện tại: 2" và ẩn dòng bước 1 để hiện dòng "📖 Bước 2: Đang học React".