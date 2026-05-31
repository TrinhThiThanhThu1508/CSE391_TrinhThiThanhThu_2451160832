function createCart() {
    // Private data (Closure) - Không thể truy cập trực tiếp từ bên ngoài
    let items = [];
    let currentDiscountCode = null;

    // Hàm hỗ trợ format tiền tệ (Ví dụ: 25000000 -> 25.000.000)
    const formatCurrency = (amount) => {
        return amount.toLocaleString("vi-VN");
    };

    return {
        // Thêm sản phẩm (nếu đã có → tăng quantity)
        addItem(product, quantity = 1) {
            const existingItem = items.find((item) => item.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({ ...product, quantity });
            }
        },

        // Xóa sản phẩm theo id
        removeItem(productId) {
            items = items.filter((item) => item.id !== productId);
        },

        // Cập nhật số lượng
        updateQuantity(productId, newQuantity) {
            const item = items.find((item) => item.id === productId);
            if (item) {
                if (newQuantity <= 0) {
                    this.removeItem(productId);
                } else {
                    item.quantity = newQuantity;
                }
            }
        },

        // Tính tổng tiền
        getTotal() {
            let total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

            if (currentDiscountCode === "SALE10") {
                total = total * 0.9;
            } else if (currentDiscountCode === "SALE20") {
                total = total * 0.8;
            } else if (currentDiscountCode === "FREESHIP") {
                total = Math.max(0, total - 30000);
            }

            return total;
        },

        // Áp dụng mã giảm giá
        applyDiscount(code) {
            const validCodes = ["SALE10", "SALE20", "FREESHIP"];
            if (validCodes.includes(code)) {
                currentDiscountCode = code;
            } else {
                console.log(`Mã giảm giá "${code}" không hợp lệ!`);
            }
        },

        // Lấy tổng số lượng sản phẩm
        getItemCount() {
            return items.reduce((sum, item) => sum + item.quantity, 0);
        },

        // Xóa toàn bộ giỏ
        clearCart() {
            items = [];
            currentDiscountCode = null;
        },

        // In giỏ hàng dạng bảng ASCII
        printCart() {
            if (items.length === 0) {
                console.log("Giỏ hàng đang trống!");
                return;
            }

            const borderLen = 61;
            console.log("┌" + "─".repeat(borderLen) + "┐");
            console.log("│ # │ Sản phẩm          │ SL │ Đơn giá      │ Tổng         │");

            items.forEach((item, index) => {
                let stt = String(index + 1).padEnd(1, " ");
                let name = item.name.padEnd(17, " ");
                let qty = String(item.quantity).padStart(2, " ");
                let price = formatCurrency(item.price).padStart(12, " ");
                let itemTotal = formatCurrency(item.price * item.quantity).padStart(12, " ");

                console.log(`│ ${stt} │ ${name} │ ${qty} │ ${price} │ ${itemTotal} │`);
            });

            console.log("├" + "─".repeat(borderLen) + "┤");

            // Format dòng tổng cộng
            let finalTotal = formatCurrency(this.getTotal()) + "đ";
            let discountText = "";
            
            if (currentDiscountCode === "SALE10") discountText = " (Giảm 10%)";
            if (currentDiscountCode === "SALE20") discountText = " (Giảm 20%)";
            if (currentDiscountCode === "FREESHIP") discountText = " (-30k Ship)";

            let footerTitle = `Tổng cộng${discountText}:`;
            // Căn lề phải cho số tiền tổng
            let paddingSpace = borderLen - footerTitle.length - finalTotal.length - 2;
            console.log(`│ ${footerTitle}` + " ".repeat(paddingSpace > 0 ? paddingSpace : 0) + `${finalTotal} │`);
            console.log("└" + "─".repeat(borderLen) + "┘");
        }
    };
}

// === TẤT CẢ TEST CASES THEO YÊU CẦU ===
console.log("\n--- TEST GIỎ HÀNG BAN ĐẦU ---");
const cart = createCart();
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); // Tăng lên 2

cart.printCart();

console.log("\n--- TEST ÁP DỤNG MÃ SALE10 ---");
cart.applyDiscount("SALE10");
cart.printCart();

console.log("\n--- TEST ĐẾM & XÓA SẢN PHẨM ---");
console.log("Số SP trong giỏ:", cart.getItemCount()); // → 4

cart.removeItem(3); // Xóa AirPods Pro khỏi giỏ
console.log("Số SP sau khi xóa AirPods:", cart.getItemCount()); // → 2  