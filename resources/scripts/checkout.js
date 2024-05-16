

function displayCartItemsCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-container');
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cart.forEach(product => {
        const itemElement = document.createElement('li');
        itemElement.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'lh-sm');
        let price = product.price;
        if (product.salePrice !== undefined) {
            price = product.salePrice;
        }
        itemElement.innerHTML = `
        <div>
            <h6 class="my-0">${product.name}</h6>
            <small class="text-body-secondary">Brief description</small>
        </div>
        <span class="text-body-secondary">${price}</span>
        </li>
        `;
        cartContainer.appendChild(itemElement);
    });
    
    const totalElement = document.createElement('li');
    totalElement.classList.add("list-group-item", "d-flex", "justify-content-between");
    totalElement.innerHTML = `
    <span>Total (USD)</span>
    <strong id="total-price">30$</strong>
    `;
    cartContainer.appendChild(totalElement);
};

function updateTotalCheckout() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    cart.forEach(product => {
        let price;
        if (product.salePrice !== undefined) {
            price = parseFloat(product.salePrice.replace('$', '').replace('/[^0-9.-]+/g', ""));
        } else {
            price = parseFloat(product.price.replace('$', '').replace('/[^0-9.-]+/g', ""));
        }
        totalPrice += price * product.quantity;
    });

    document.getElementById('total-price').innerHTML = `${totalPrice.toFixed(2)}$`;

    const totalCount = cart.reduce((acc, product) => acc + product.quantity, 0);
    document.getElementById('count').innerHTML = totalCount;
}

document.addEventListener('DOMContentLoaded', function() {
    const checkoutForm = document.getElementById('checkoutForm');
    checkoutForm.addEventListener('submit', function(event) {
        event.preventDefault(); 
        processCheckout();
    });
});

function processCheckout() {
    const expirationDate = document.getElementById('cc-expiration').value;

    if (expirationDate === "09/28") {
        window.location.href = 'checkout-success.html';
    } else {
        window.location.href = 'checkout-fail.html';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    displayCartItemsCheckout();
    updateTotalCheckout();
});