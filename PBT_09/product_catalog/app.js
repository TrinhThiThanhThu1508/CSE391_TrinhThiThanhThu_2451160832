// ==========================================
// 1. DỮ LIỆU SẢN PHẨM (Đã điều chỉnh phù hợp)
// ==========================================
const products = [
    { id: 1, name: "iPhone 16 Pro", price: 28990000, category: "phone", image: "https://placehold.co/200x200/ffb6c1/ffffff?text=iPhone+16", rating: 4.9, inStock: true },
    { id: 2, name: "Samsung Z Flip 6", price: 23990000, category: "phone", image: "https://placehold.co/200x200/ffb6c1/ffffff?text=Z+Flip+6", rating: 4.7, inStock: true },
    { id: 3, name: "Oppo Find N3", price: 40000000, category: "phone", image: "https://placehold.co/200x200/ffb6c1/ffffff?text=Oppo", rating: 4.2, inStock: false },
    { id: 4, name: "Son Dior Rouge", price: 950000, category: "makeup", image: "https://placehold.co/200x200/ff69b4/ffffff?text=Son+Dior", rating: 4.8, inStock: true },
    { id: 5, name: "Phấn phủ Chanel", price: 1500000, category: "makeup", image: "https://placehold.co/200x200/ff69b4/ffffff?text=Chanel", rating: 4.9, inStock: true },
    { id: 6, name: "Cushion YSL", price: 1800000, category: "makeup", image: "https://placehold.co/200x200/ff69b4/ffffff?text=YSL", rating: 4.6, inStock: true },
    { id: 7, name: "Serum Estee Lauder", price: 2200000, category: "skincare", image: "https://placehold.co/200x200/ffc0cb/ffffff?text=Serum", rating: 4.8, inStock: true },
    { id: 8, name: "Kem chống nắng LRP", price: 450000, category: "skincare", image: "https://placehold.co/200x200/ffc0cb/ffffff?text=KCN", rating: 4.5, inStock: true },
    { id: 9, name: "Toner Paula's Choice", price: 850000, category: "skincare", image: "https://placehold.co/200x200/ffc0cb/ffffff?text=Toner", rating: 4.4, inStock: false },
    { id: 10, name: "Dây chuyền Swarovski", price: 3500000, category: "jewelry", image: "https://placehold.co/200x200/e6e6fa/ffffff?text=Necklace", rating: 4.9, inStock: true },
    { id: 11, name: "Vòng tay Pandora", price: 2100000, category: "jewelry", image: "https://placehold.co/200x200/e6e6fa/ffffff?text=Bracelet", rating: 4.7, inStock: true },
    { id: 12, name: "Khuyên tai Chanel", price: 9500000, category: "jewelry", image: "https://placehold.co/200x200/e6e6fa/ffffff?text=Earrings", rating: 4.8, inStock: true },
];

// Trạng thái (State) quản lý ứng dụng
let appState = {
    searchQuery: "",
    category: "all",
    sortBy: "default",
    cartCount: 0
};

// ==========================================
// 2. KHỞI TẠO GIAO DIỆN BẰNG JS (100% Content render)
// ==========================================
const app = document.getElementById("app");

function buildBaseUI() {
    // Dùng innerHTML một lần duy nhất để dựng khung (Shell) ban đầu
    app.innerHTML = `
        <header>
            <h1>My Boutique </h1>
            <div style="display: flex; gap: 15px; align-items: center;">
                <button id="themeToggle">🌙 Dark Mode</button>
                <div class="cart-icon">🛒<span class="cart-badge" id="cartBadge">0</span></div>
            </div>
        </header>
        <div class="controls">
            <input type="text" id="searchInput" placeholder="Tìm kiếm sản phẩm...">
            <select id="sortSelect">
                <option value="default">Sắp xếp: Mặc định</option>
                <option value="priceAsc">Giá: Thấp đến cao</option>
                <option value="priceDesc">Giá: Cao đến thấp</option>
                <option value="nameAsc">Tên: A-Z</option>
                <option value="ratingDesc">Đánh giá cao nhất</option>
            </select>
            <div id="filterButtons">
                <button class="filter-btn active-filter" data-cat="all">Tất cả</button>
                <button class="filter-btn" data-cat="phone">Điện thoại</button>
                <button class="filter-btn" data-cat="makeup">Trang điểm</button>
                <button class="filter-btn" data-cat="skincare">Dưỡng da</button>
                <button class="filter-btn" data-cat="jewelry">Trang sức</button>
            </div>
        </div>
        <div class="product-grid" id="productGrid"></div>
        <div class="modal-overlay" id="modalOverlay">
            <div class="modal-content" id="modalContent"></div>
        </div>
    `;
    setupEventListeners();
}

// ==========================================
// 3. RENDER PRODUCTS (Dùng createElement chuẩn yêu cầu)
// ==========================================
function renderProducts(list) {
    const grid = document.getElementById("productGrid");
    grid.innerHTML = ""; // Xóa grid cũ
    
    if (list.length === 0) {
        grid.innerHTML = "<p>Không tìm thấy sản phẩm nào phù hợp.</p>";
        return;
    }

    list.forEach(product => {
        // Tạo thẻ div bọc ngoài
        const card = document.createElement("div");
        card.className = "product-card";
        
        // Tạo Ảnh
        const img = document.createElement("img");
        img.src = product.image;
        img.alt = product.name;
        
        // Tạo Tên
        const title = document.createElement("h3");
        title.textContent = product.name;
        
        // Tạo Giá
        const price = document.createElement("p");
        price.className = "price";
        price.textContent = product.price.toLocaleString("vi-VN") + "đ";

        // Tạo Đánh giá & Tình trạng
        const meta = document.createElement("p");
        meta.style.fontSize = "12px";
        meta.style.marginBottom = "10px";
        meta.textContent = `⭐ ${product.rating} | ${product.inStock ? "✅ Còn hàng" : "❌ Hết hàng"}`;

        // Tạo Nút Thêm giỏ hàng
        const btn = document.createElement("button");
        btn.className = "add-to-cart-btn";
        btn.textContent = product.inStock ? "Thêm vào giỏ" : "Tạm hết hàng";
        btn.disabled = !product.inStock;

        // Xử lý sự kiện: Click card -> Mở Modal (Loại trừ nút Thêm giỏ)
        card.addEventListener("click", (e) => {
            if (e.target !== btn) {
                showModal(product);
            }
        });

        // Xử lý sự kiện: Click Thêm giỏ hàng
        btn.addEventListener("click", () => {
            appState.cartCount++;
            document.getElementById("cartBadge").textContent = appState.cartCount;
        });

        // Append tuần tự vào Card
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(meta);
        card.appendChild(btn);

        // Append Card vào Grid
        grid.appendChild(card);
    });
}

// ==========================================
// 4. LỌC, TÌM KIẾM & SẮP XẾP ĐỒNG THỜI
// ==========================================
function updateView() {
    let result = [...products];

    // Search (searchProducts)
    if (appState.searchQuery) {
        result = result.filter(p => p.name.toLowerCase().includes(appState.searchQuery));
    }

    // Filter by Category (filterByCategory)
    if (appState.category !== "all") {
        result = result.filter(p => p.category === appState.category);
    }

    // Sort (sortProducts)
    if (appState.sortBy === "priceAsc") {
        result.sort((a, b) => a.price - b.price);
    } else if (appState.sortBy === "priceDesc") {
        result.sort((a, b) => b.price - a.price);
    } else if (appState.sortBy === "nameAsc") {
        result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (appState.sortBy === "ratingDesc") {
        result.sort((a, b) => b.rating - a.rating);
    }

    renderProducts(result);
}

// ==========================================
// 5. GẮN SỰ KIỆN (EVENTS) VÀ MODAL
// ==========================================
function setupEventListeners() {
    // Event: Input Search realtime
    document.getElementById("searchInput").addEventListener("input", (e) => {
        appState.searchQuery = e.target.value.toLowerCase().trim();
        updateView();
    });

    // Event: Filter Buttons
    document.getElementById("filterButtons").addEventListener("click", (e) => {
        if (e.target.classList.contains("filter-btn")) {
            // Đổi style nút active
            document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active-filter"));
            e.target.classList.add("active-filter");
            
            appState.category = e.target.dataset.cat;
            updateView();
        }
    });

    // Event: Sort Dropdown
    document.getElementById("sortSelect").addEventListener("change", (e) => {
        appState.sortBy = e.target.value;
        updateView();
    });

    // Event: Dark Mode Toggle
    document.getElementById("themeToggle").addEventListener("click", (e) => {
        document.body.classList.toggle("dark-mode");
        e.target.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    });

    // Event: Đóng Modal khi click ra ngoài
    document.getElementById("modalOverlay").addEventListener("click", (e) => {
        if (e.target.id === "modalOverlay") {
            document.getElementById("modalOverlay").classList.remove("active");
        }
    });
}

function showModal(product) {
    const modalContent = document.getElementById("modalContent");
    // Render ruột modal (Được phép dùng innerHTML ở đây vì dữ liệu nội bộ đáng tin cậy)
    modalContent.innerHTML = `
        <button class="close-modal" id="closeModal">×</button>
        <img src="${product.image}" style="width: 100%; border-radius: 8px; margin-bottom: 15px;" alt="${product.name}">
        <h2>${product.name}</h2>
        <p style="color: var(--primary-color); font-size: 20px; font-weight: bold; margin: 10px 0;">
            ${product.price.toLocaleString("vi-VN")}đ
        </p>
        <p>⭐ Đánh giá: ${product.rating} / 5</p>
        <p>Tình trạng: ${product.inStock ? "Sẵn sàng giao hàng" : "Đang chờ nhập thêm"}</p>
        <p style="margin-top: 15px; color: gray;">Mã sản phẩm: #${product.id} - Phân loại: ${product.category}</p>
    `;

    document.getElementById("modalOverlay").classList.add("active");
    
    // Gắn sự kiện nút đóng
    document.getElementById("closeModal").addEventListener("click", () => {
        document.getElementById("modalOverlay").classList.remove("active");
    });
}

// ==========================================
// 6. KHỞI CHẠY ỨNG DỤNG
// ==========================================
buildBaseUI();
updateView(); // Tự động load danh sách gốc