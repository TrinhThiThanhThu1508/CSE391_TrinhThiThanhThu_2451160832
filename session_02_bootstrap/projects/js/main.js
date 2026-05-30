/* ========================================================
   MAIN JAVASCRIPT (Dùng chung cho cả index.html và blog.html)
   ======================================================== */

document.addEventListener("DOMContentLoaded", function () {
    
    // ----------------------------------------------------
    // CHỨC NĂNG 1: HIỆU ỨNG NAVBAR (Trang nào cũng có - Chạy chung)
    // ----------------------------------------------------
    const navbar = document.querySelector(".navbar");
    if (navbar) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 50) {
                navbar.classList.add("shadow-sm", "py-2");
                navbar.classList.remove("py-3");
            } else {
                navbar.classList.remove("shadow-sm", "py-2");
                navbar.classList.add("py-3");
            }
        });
    }


    // ----------------------------------------------------
    // CHỨC NĂNG 2: XỬ LÝ BÌNH LUẬN (Chỉ chạy trên blog.html)
    // ----------------------------------------------------
    const commentForm = document.querySelector("form");
    const nameInput = document.querySelector('input[placeholder="Your name"]');
    const contentInput = document.querySelector('textarea[placeholder="Write your comment..."]');
    
    // Tìm khung chứa bình luận một cách an toàn
    const commentsContainer = document.querySelector(".py-5.bg-light .card:last-child .card-body") 
                              || document.querySelector(".card:last-child .card-body");

    // Chỉ khi nào ở trang blog.html (có đủ các thẻ này) thì mới chạy code comment
    if (commentForm && nameInput && contentInput && commentsContainer) {
        const submitBtn = commentForm.querySelector(".btn-success");
        
        if (submitBtn) {
            submitBtn.addEventListener("click", function (e) {
                e.preventDefault(); // Chặn load lại trang

                const name = nameInput.value.trim();
                const content = contentInput.value.trim();

                if (name === "" || content === "") {
                    alert("Thư xin lỗi, bạn vui lòng nhập đầy đủ tên và nội dung bình luận nhé! 🥰");
                    return;
                }

                // Tạo avatar ngẫu nhiên
                const randomSeed = Math.random().toString(36).substring(7);
                const avatarUrl = `https://api.dicebear.com/7.x/avataaars/svg?seed=${randomSeed}`;

                // Tạo HTML comment mới
                const newCommentHTML = `
                    <div class="d-flex gap-3 mb-4">
                        <img src="${avatarUrl}" class="rounded-circle comment-avatar" alt="${name}">
                        <div>
                            <h6 class="mb-1">${name} <span class="badge bg-success ms-2" style="font-size: 0.7rem;">New</span></h6>
                            <p class="text-secondary mb-2">${content}</p>
                            <a href="#" class="text-success text-decoration-none small fw-semibold">Reply</a>
                        </div>
                    </div>
                    <hr class="text-muted my-4">
                `;

                // Chèn vào dưới chữ "Comments"
                const commentHeader = commentsContainer.querySelector("h3");
                if (commentHeader) {
                    commentHeader.insertAdjacentHTML("afterend", newCommentHTML);
                    nameInput.value = "";
                    contentInput.value = "";
                    commentHeader.scrollIntoView({ behavior: "smooth" });
                }
            });
        }
    }

});  