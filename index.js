document.getElementById('shop-now').addEventListener('click', function() {
    alert('Redirecting to products page!');
});

let cartCount = parseInt(localStorage.getItem('cartCount')) || 0;
updateCartDisplay();

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function() {
        const product = this.getAttribute('data-product');
        cartCount++;
        localStorage.setItem('cartCount', cartCount);
        updateCartDisplay();
        alert(`${product} added to cart!`);
    });
});

function updateCartDisplay() {
    // Assuming you add a cart icon in nav, e.g., <li id="cart">Cart (<span id="cart-count">0</span>)</li>
    const cartCountElement = document.getElementById('cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cartCount;
    }
}
