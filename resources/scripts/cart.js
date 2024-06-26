function updateTotalPrice() {
    let totalPrice = 0;
    const cart= JSON.parse(localStorage.getItem('cart')) || [];
    cart.forEach(product => {
        const price = product.salePrice !== undefined? parseFloat(product.salePrice.replace('$', '')) : parseFloat(product.price.replace('$', ''));
        totalPrice += price * product.quantity;
    })

    document.getElementById('total-price').innerHTML = `Total (USD)${totalPrice.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    updateTotalPrice();
});