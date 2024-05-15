
const products = [
    { name: 'Black T-Shirt ',
    productId: 1, 
    price: '15.99$',
    salePrice: '10.99$',
    imageUrl: 'resources/images/black-t-shirt.jpg',  
    imageAlt: 'black t-shirt image', 
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'White T-Shirt ',
    productId: 2, 
    price: '15.99$', 
    salePrice: '10.99$', 
    imageUrl: 'resources/images/white-t-shirt.jpg', 
    imageAlt: 'white t-shirt image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Black Regular-Fit Jeans ', 
    price: '25.99$',
    productId: 3, 
    salePrice: '21.99$',
    imageUrl: 'resources/images/black-regular-fit-jeans.jpg', 
    imageAlt: 'black Regular-Fit Jeans image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Gray Shirt ',
    productId: 4, 
    price: '22.99$', 
    salePrice: '17.99$',
    imageUrl: 'resources/images/gray-shirt.jpg',  
    imageAlt: 'gray shirt image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'White Fedora ',
    productId: 5, 
    price: '12.99$', 
    salePrice: '8.99$',
    imageUrl: 'resources/images/white-fedora.jpg', 
    imageAlt: 'white fedora image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Black Tie ',
    productId: 6, 
    price: '6.99$', 
    salePrice: '3.99$',
    imageUrl: 'resources/images/black-tie.jpg', 
    imageAlt: 'black tie image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Black Shoes',
    productId: 7, 
    price: '85$',
    imageUrl: 'resources/images/black-shoes.jpg',  
    imageAlt: 'black shoes image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'White Shoes',
    productId: 8, 
    price: '99.99$',
    imageUrl: 'resources/images/white-shoes.jpg', 
    imageAlt: 'white shoes image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Black Trunks',
    productId: 9, 
    price: '12$',
    imageUrl: 'resources/images/black-trunks.jpg', 
    imageAlt: 'white shoes image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'White Trunks',
    productId: 10, 
    price: '12$',
    imageUrl: 'resources/images/white-trunks.jpg', 
    imageAlt: 'white trunks image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
]

function filterProductsBySalePrice(products, showSaleProducts) {
    return products.filter(product => {
        if (showSaleProducts) {
            return product.salePrice !== undefined;
        } else {
            return product.salePrice === undefined;
        }
    });
}

function generateProductCards(products, showSaleProducts) {
    const container = document.getElementById('productContainer');
    container.innerHTML = "";

    if (showSaleProducts === true) {
    
    const filteredProducts = filterProductsBySalePrice(products, showSaleProducts);


    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
            <div class="col">
                <div class="card h-100" style="width: 18rem;">
                    <img src="${product.imageUrl}" class="card-img-top" alt="${product.imageAlt}" style="width: 100%; height: 400px;">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}<span class="badge text-bg-danger">SALE!</span><strong>${product.salePrice}</strong></h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary"><s>${product.price}</s></h6>
                        <p class="card-text">${product.description}</p>
                        <div class="card-footer">
                            <button class="btn btn-primary" id="add-to-cart-btn" onclick="addToCart(${product.productId})"> Add to Cart</button>
                            <button class="btn btn-success" onclick="checkoutProceed()"> Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
} else {
    const filteredProducts = filterProductsBySalePrice(products, showSaleProducts);
    filteredProducts.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
            <div class="col">
                <div class="card h-100" style="width: 18rem;">
                    <img src="${product.imageUrl}" class="card-img-top" alt="${product.imageAlt}" style="width: 100%; height: 400px;">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${product.price}</h6>
                        <p class="card-text">${product.description}</p>
                        <div class="card-footer">
                            <button class="btn btn-primary" id="add-to-cart-btn" onclick="addToCart(${product.productId})"> Add to Cart</button>
                            <button class="btn btn-success" onclick="checkoutProceed()"> Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    }
)};
}

const showAlert = (alertId) => {
    document.getElementById(alertId).style.display = 'block';
    setTimeout(() => {
        document.getElementById(alertId).style.display = 'none';
    }, 2000);
}

function addToCart(productId) {
    document.getElementById("count").innerHTML  = parseInt(document.getElementById("count").innerHTML) + 1;
    const product = products.find(p => p.productId === productId);
    if (!product) {
        console.error('Product not found!');
        return;
    }
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingProduct = cart.find(p => p.productId === productId);
    if (existingProduct) {
        existingProduct.quantity = (existingProduct.quantity || 1) + 1; // Increment quantity if product already exists
    } else {
        product.quantity = 1; // Add quantity property for new product
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    showAlert('addToCartAlert');

    
}

function updateCartCount() {
    // Retrieve the cart from localStorage and parse it into an array
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Calculate the total number of items in the cart
    let totalCount = 0;
    for (let item of cart) {
        totalCount += item.quantity; // Assuming each item has a 'quantity' property
    }
    // Update the #count span with the total count
    document.getElementById('count').innerHTML = totalCount;
}

// Call updateCartCount on page load
document.addEventListener('DOMContentLoaded', updateCartCount);

function displayCartItems() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cart-items-container');

    if (cart.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    cartContainer.innerHTML = ''; // Clear existing items
    cart.forEach(product => {
        const productElement = document.createElement('div');
        
        if (product.salePrice !== undefined){

        
        productElement.innerHTML = `
            <div class="col-1">
                <div class="card" style="width: 18rem;">
                    <img src="${product.imageUrl}" class="card-img-top" alt="${product.imageAlt}" style="width: 100%; height: 200px;">
                    <div class="card-body">
                        <h5 class="card-title">${product.name} - <span class="badge text-bg-danger">SALE!</span><strong class="text-success">${product.salePrice}</strong></h5>
                        <p class="card-text">${product.description}</p>
                        <ul class="list-group list-group-flush">
                        <li class="list-group-item">Old price - <s>${product.price}</s></li>
                        <li class="list-group-item">Quantity - ${product.quantity}</li>
                        </ul>
                    
                            <div class="card-footer">
                            <button class="btn btn-danger" onclick="removeFromCart(${product.productId})">Remove</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        cartContainer.appendChild(productElement);
    } else {
        productElement.innerHTML = `
        <div class="col-1">
        <div class="card h-100" style="width: 18rem;">
            <img src="${product.imageUrl}" class="card-img-top" alt="${product.imageAlt}" style="width: 100%; height: 200px;">
            <div class="card-body">
                <h5 class="card-title">${product.name} - <strong class="text-success"> ${product.price}</strong></h5>
                <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
                <p class="card-text">${product.description}</p>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">Quantity - ${product.quantity}</li>
                </ul>
                <div class="card-footer">
                <button class="btn btn-danger" onclick="removeFromCart(${product.productId})">Remove</button>
                </div>
            </div>
        </div>
    </div>
        `;
        cartContainer.appendChild(productElement);

    }
});
}


function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const productIndex = cart.findIndex(p => p.productId === productId);
    if (productIndex > -1) {
        const product = cart[productIndex];
        if (product.quantity > 1) {
            product.quantity -= 1;
        } else {
            cart.splice(productIndex, 1);
        }
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems(); // Refresh the cart display
    }
}

const checkoutProceed = () => {
    window.location.href = "checkout.html";
    showAlert('checkoutAlert');
}



document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent the default form submission

        // Get user input from form fields
        const email = document.getElementById('floatingInput').value;
        const password = document.getElementById('floatingPassword').value;

        // Check if the credentials match the admin account
        if(email === 'admin@example.com' && password === 'admin') {
            // Redirect to the profile page
            localStorage.setItem('isLoggedIn', 'true'); // Set the 'isLoggedIn' flag to 'true
            window.location.href = 'profile.html';
        } else {
            // Show an error message or handle invalid credentials
            alert('Invalid credentials. Please try again.');
        }
    });
});



function updateLoginLink() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
        const loginLink = document.getElementById('login-link'); // Ensure your login link has this ID
        if (loginLink) {
            loginLink.textContent = 'Profile';
            loginLink.href = 'profile.html'; // Assuming 'profile.html' is your profile page
            // Optionally, remove attributes related to modal if they exist
            loginLink.removeAttribute('data-bs-toggle');
            loginLink.removeAttribute('data-bs-target');
        }
    }
}


window.onload = function() {
    // Determine the current page (this is a conceptual example)
    let currentPage = window.location.pathname.split("/").pop();

    // Check if the current page is 'catalogue.html' or 'index.html'
    if (currentPage === 'catalogue.html') {
        // For 'catalogue.html', show products without salePrice
        generateProductCards(products, false);
    } else if (currentPage === 'index.html') {
        // For 'index.html', show products with salePrice
        generateProductCards(products, true);
    }

    updateLoginLink();
};