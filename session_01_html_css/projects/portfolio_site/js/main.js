document.addEventListener('DOMContentLoaded', () => {
    // 1. XỬ LÝ BỘ LỌC DỰ ÁN (PORTFOLIO FILTER)
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Xóa class 'active' ở nút cũ và thêm vào nút vừa bấm
            document.querySelector('.filter-btn.active')?.classList.remove('active');
            button.classList.add('active');

            // Lấy giá trị danh mục cần lọc (ví dụ: 'all', 'web', 'mobile'...)
            const filterValue = button.getAttribute('data-filter');

            portfolioItems.forEach(item => {
                // Lấy danh mục của từng item dựa trên thuộc tính data-category trong HTML
                const itemCategory = item.getAttribute('data-category');

                if (filterValue === 'all' || filterValue === itemCategory) {
                    // Hiển thị item nếu khớp bộ lọc
                    item.style.display = 'block';
                    // Thêm chút hiệu ứng xuất hiện mượt mà
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 1);
                } else {
                    // Ẩn item nếu không khớp
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300); // Đợi hiệu ứng ẩn (transition) chạy xong rồi ẩn hẳn
                }
            });
        });
    });

    // 2. ĐÓNG LIGHTBOX KHI BẤM RA NGOÀI VÙNG ẢNH
    // Vì bạn dùng hiệu ứng :target magic của CSS, nên chỉ cần đổi hash (#) trên URL là đóng được
    const lightboxes = document.querySelectorAll('.lightbox');
    
    lightboxes.forEach(lightbox => {
        lightbox.addEventListener('click', (e) => {
            // Nếu người dùng bấm trúng vùng nền (chứ không phải bấm vào bức ảnh)
            if (e.target === lightbox) {
                window.location.hash = '#portfolio'; // Đẩy URL về vùng portfolio để tắt lightbox
            }
        });
    });
});