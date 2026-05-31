## 📝 Bài 0.1 — Chạy React đầu tiên (5 phút)
1. File `.jsx` khác gì file `.js`
Về cơ bản, `.jsx` là một phần mở rộng cú pháp (syntax extension) của JavaScript, được gọi là JavaScript XML.

- File `.js` (JavaScript thuần): Chỉ chứa mã JavaScript tiêu chuẩn. Nếu bạn viết thẻ HTML trực tiếp vào file .js (như `<h1>Xin chào</h1>`), trình duyệt hoặc trình biên dịch sẽ báo lỗi cú pháp ngay lập tức.

- File `.jsx` (React): Cho phép bạn viết code HTML ngay trong JavaScript một cách tự nhiên. Bản chất của file .jsx giúp code giao diện (UI) trực quan hơn.

Bản chất phía sau: Trình duyệt không tự hiểu được .jsx. Khi bạn chạy npm run dev, công cụ Vite sẽ tự động chuyển đổi (compile) những đoạn HTML-in-JS đó thành các hàm JavaScript thuần (React.createElement) trước khi gửi đến trình duyệt.

2. Tại sao phải `export default App`
Trong ứng dụng React (và JavaScript hiện đại), mỗi file được coi là một module độc lập. Code ở file này muốn file khác sử dụng được thì bắt buộc phải "mở cửa" cho phép xuất dữ liệu ra ngoài.

- Dòng `export default App` có nghĩa là: "Tôi muốn xuất component App này ra làm giá trị mặc định của file này".

- Nhờ có dòng này, ở file `src/main.jsx` (file gốc của project), React mới có thể import (nhập) component App vào để hiển thị lên màn hình thông qua cú pháp:
`import App from './App.jsx'`

3. Thử xóa `export default` → chuyện gì xảy ra?
Nếu bạn xóa dòng export default App, ngay lập tức ứng dụng của bạn sẽ bị lỗi (Crash) và màn hình trình duyệt sẽ trắng xóa (hoặc hiển thị bảng lỗi màu đỏ của Vite).

## Bài 0.2 — JSX là HTML "xịn hơn"
### Bài 1: Component UserProfile

```
function UserProfile() {
    return (
        <div className="profile">
            <h1>Hồ sơ cá nhân</h1>
            <img src="photo.jpg" alt="Ảnh đại diện" />
            <table>
                <tbody> {/* Thêm thẻ tbody để tránh cảnh báo (warning) của React/HTML */}
                    <tr>
                        <td>Họ tên:</td>
                        <td>Minh</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>minh@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;

```
### Bài 2: Component ProductInfo

```
function ProductInfo() {
    return (
        <div className="product">
            <h2>iPhone 15</h2>
            <p className="price">25.000.000đ</p>
            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>
            <button>Mua ngay</button>
        </div>
    );
}

export default ProductInfo;

```