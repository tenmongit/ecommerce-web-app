const products = [
    { name: 'Black T-Shirt', 
    price: '15.99$',
    imageUrl: 'resources/images/black-t-shirt.jpg',  
    imageAlt: 'black t-shirt image', 
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'White T-Shirt', 
    price: '15.99$', 
    imageUrl: 'resources/images/white-t-shirt.jpg', 
    imageAlt: 'white t-shirt image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Black Regular-Fit Jeans', 
    price: '15.99$', 
    imageUrl: 'resources/images/black-regular-fit-jeans.jpg', 
    imageAlt: 'black Regular-Fit Jeans image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Gray Shirt', 
    price: '15.99$', 
    imageUrl: 'resources/images/gray-shirt.jpg',  
    imageAlt: 'gray shirt image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'White Fedora', 
    price: '15.99$', 
    imageUrl: 'resources/images/white-fedora.jpg', 
    imageAlt: 'white fedora image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Black Tie', 
    price: '15.99$', 
    imageUrl: 'resources/images/black-tie.jpg', 
    imageAlt: 'black tie image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
]

function generateProductCards(products) {
    const container = document.getElementById('productContainer');
    container.innerHTML = "";

    products.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('col');
        card.innerHTML = `
            <div class="col">
                <div class="card h-100" style="width: 18rem;">
                    <img src="${product.imageUrl}" class="card-img-top" alt="black t shirt image">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}<span class="badge text-bg-danger">SALE!</span></h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">${product.price}</h6>
                        <p class="card-text">${product.description}</p>
                            <div class="card-footer">
                                <button class="btn btn-primary" onclick="addToCart()"> Add to Cart</button>
                                <button class="btn btn-success" onclick="checkoutProceed()"> Checkout</button>
                            </div>
                    </div>
                </div>
            </div>
        `;

        if (product.price.includes('$') && product.price.split('$')[0] < 20) {
            container.appendChild(card);
        }
    });
}
const showAlert = (alertId) => {
    document.getElementById(alertId).style.display = 'block';
    setTimeout(() => {
        document.getElementById(alertId).style.display = 'none';
    }, 2000);
}

const addToCart = () => {
    document.getElementById("count").innerHTML  = parseInt(document.getElementById("count").innerHTML) + 1;
    showAlert('addToCartAlert');
}

const checkoutProceed = () => {
    window.location.href = "checkout.html";
    showAlert('checkoutAlert');
}

window.onload = generateProductCards(products);