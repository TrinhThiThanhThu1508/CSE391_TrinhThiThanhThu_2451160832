// Dữ liệu hình ảnh (9 ảnh để map với phím 1-9)
const images = [
    { src: "https://placehold.co/800x450/1a1a1a/d8839d?text=Luffy+Cinematic", alt: "Monkey D. Luffy - Cinematic Lighting" },
    { src: "https://placehold.co/800x450/1a1a1a/d8839d?text=Zoro+Fisheye", alt: "Roronoa Zoro - Extreme Fisheye" },
    { src: "https://placehold.co/800x450/1a1a1a/d8839d?text=Nami+High+Contrast", alt: "Nami - High Contrast" },
    { src: "https://placehold.co/800x450/1a1a1a/d8839d?text=Usopp+Sniper", alt: "Usopp Sniper King" },
    { src: "https://placehold.co/800x450/1a1a1a/d8839d?text=Sanji+Shadows", alt: "Sanji - Dark Shadows" },
    { src: "https://placehold.co/800x450/1a1a1a/d8839d?text=Chopper+Neon", alt: "Tony Tony Chopper - Neon Lights" },
    { src: "https://placehold.co/800x450/1a1a1a/d8839d?text=Robin+Vintage", alt: "Nico Robin - Vintage Aesthetic" },
    { src: "https://placehold.co/800x450/1a1a1a/d8839d?text=Franky+Cyber", alt: "Franky - Cyberpunk" },
    { src: "https://placehold.co/800x450/1a1a1a/d8839d?text=Brook+Soul", alt: "Brook - Soul King" }
];

// Danh sách Commands
const commands = [
    { id: "toggle-theme", title: "Giao diện: Bật/Tắt Dark Mode" },
    { id: "play-slideshow", title: "Gallery: Phát Slideshow" },
    { id: "open-gallery", title: "Gallery: Mở trình xem ảnh (Ảnh 1)" },
    { id: "alert-hello", title: "Hệ thống: Chào mừng" }
];

// Trạng thái ứng dụng
let currentImageIndex = 0;
let isGalleryOpen = false;
let isCmdOpen = false;
let slideshowInterval = null;

// DOM Elements
const thumbnailGrid = document.getElementById("thumbnailGrid");
const galleryModal = document.getElementById("galleryModal");
const mainImage = document.getElementById("mainImage");
const slideshowStatus = document.getElementById("slideshowStatus");
const cmdPalette = document.getElementById("cmdPalette");
const cmdInput = document.getElementById("cmdInput");
const cmdList = document.getElementById("cmdList");

// ==========================================
// 1. RENDER & LOGIC GALLERY
// ==========================================
images.forEach((img, index) => {
    const btn = document.createElement("button");
    btn.className = "thumbnail";
    btn.style.backgroundImage = `url(${img.src})`;
    btn.style.backgroundSize = "cover";
    btn.setAttribute("aria-label", `Mở ảnh ${index + 1}: ${img.alt}`);
    
    btn.addEventListener("click", () => openGallery(index));
    thumbnailGrid.appendChild(btn);
});

function openGallery(index) {
    currentImageIndex = index;
    updateGalleryImage();
    galleryModal.classList.add("active");
    galleryModal.setAttribute("aria-hidden", "false");
    isGalleryOpen = true;
    document.getElementById("nextBtn").focus(); // Đưa focus vào nút để dùng Tab dễ dàng
}

function closeGallery() {
    galleryModal.classList.remove("active");
    galleryModal.setAttribute("aria-hidden", "true");
    isGalleryOpen = false;
    stopSlideshow();
    // Trả focus về thumbnail vừa click để không bị lạc (A11y rule)
    thumbnailGrid.children[currentImageIndex].focus();
}

function updateGalleryImage() {
    mainImage.src = images[currentImageIndex].src;
    mainImage.alt = images[currentImageIndex].alt;
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateGalleryImage();
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateGalleryImage();
}

function toggleSlideshow() {
    if (slideshowInterval) {
        stopSlideshow();
    } else {
        slideshowStatus.classList.remove("hidden");
        slideshowInterval = setInterval(nextImage, 2000);
    }
}

function stopSlideshow() {
    clearInterval(slideshowInterval);
    slideshowInterval = null;
    slideshowStatus.classList.add("hidden");
}

document.getElementById("closeGallery").addEventListener("click", closeGallery);
document.getElementById("nextBtn").addEventListener("click", nextImage);
document.getElementById("prevBtn").addEventListener("click", prevImage);

// ==========================================
// 2. LOGIC COMMAND PALETTE
// ==========================================
function renderCommands(filterText = "") {
    cmdList.innerHTML = "";
    const filtered = commands.filter(c => c.title.toLowerCase().includes(filterText.toLowerCase()));
    
    if (filtered.length === 0) {
        cmdList.innerHTML = `<li style="padding: 15px; color: gray;">Không tìm thấy lệnh nào.</li>`;
        return;
    }

    filtered.forEach((cmd, index) => {
        const btn = document.createElement("button");
        btn.className = "cmd-item";
        btn.textContent = cmd.title;
        btn.setAttribute("role", "option");
        
        btn.addEventListener("click", () => executeCommand(cmd.id));
        // Cho phép dùng phím mũi tên Lên/Xuống bằng Tab
        cmdList.appendChild(btn);
    });
}

function openCmdPalette() {
    cmdPalette.classList.add("active");
    cmdPalette.setAttribute("aria-hidden", "false");
    isCmdOpen = true;
    cmdInput.value = "";
    renderCommands();
    cmdInput.focus(); // Tự động focus vào ô search
}

function closeCmdPalette() {
    cmdPalette.classList.remove("active");
    cmdPalette.setAttribute("aria-hidden", "true");
    isCmdOpen = false;
    document.body.focus();
}

cmdInput.addEventListener("input", (e) => renderCommands(e.target.value));

// Xử lý khi ấn Enter trong ô search
cmdInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        const firstVisibleCmd = cmdList.querySelector(".cmd-item");
        if (firstVisibleCmd) firstVisibleCmd.click();
    }
});

function executeCommand(id) {
    closeCmdPalette();
    switch(id) {
        case "toggle-theme": document.body.classList.toggle("dark-mode"); break;
        case "open-gallery": openGallery(0); break;
        case "play-slideshow": 
            if (!isGalleryOpen) openGallery(0);
            toggleSlideshow();
            break;
        case "alert-hello": alert("Xin chào bạn!"); break;
    }
}

// ==========================================
// 3. EVENT LISTENER TỔNG CHO KEYBOARD SHORTCUTS
// ==========================================
document.addEventListener("keydown", (e) => {
    // Ctrl + K (Hoặc Cmd + K trên Mac) để mở Command Palette
    if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault(); // Ngăn trình duyệt mở thanh tìm kiếm mặc định
        isCmdOpen ? closeCmdPalette() : openCmdPalette();
        return;
    }

    if (isCmdOpen) {
        if (e.key === "Escape") closeCmdPalette();
        return;
    }

    if (isGalleryOpen) {
        switch(e.key) {
            case "Escape": 
                closeGallery(); 
                break;
            case "ArrowRight": 
                nextImage(); 
                break;
            case "ArrowLeft": 
                prevImage(); 
                break;
            case " ": // Phím Space
            case "Spacebar":
                e.preventDefault(); // Ngăn trình duyệt cuộn trang xuống
                toggleSlideshow();
                break;
            default:
                // Nhấn phím từ 1 đến 9
                if (e.key >= "1" && e.key <= "9") {
                    const idx = parseInt(e.key) - 1;
                    if (idx < images.length) {
                        currentImageIndex = idx;
                        updateGalleryImage();
                    }
                }
                break;
        }
    }
});