document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            if (this.innerText === 'Thêm vào giỏ hàng') {
                event.preventDefault(); // Ngăn chặn hành động mặc định của nút
                alert('Sản phẩm đã được thêm vào giỏ hàng!');
            }
        });
    });
});
