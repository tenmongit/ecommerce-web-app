const products = [
    { name: 'Black T-Shirt ', 
    price: '15.99$',
    salePrice: '10.99$',
    imageUrl: 'resources/images/black-t-shirt.jpg',  
    imageAlt: 'black t-shirt image', 
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'White T-Shirt ', 
    price: '15.99$', 
    salePrice: '10.99$', 
    imageUrl: 'resources/images/white-t-shirt.jpg', 
    imageAlt: 'white t-shirt image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Black Regular-Fit Jeans ', 
    price: '25.99$', 
    salePrice: '21.99$',
    imageUrl: 'resources/images/black-regular-fit-jeans.jpg', 
    imageAlt: 'black Regular-Fit Jeans image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Gray Shirt ', 
    price: '22.99$', 
    salePrice: '17.99$',
    imageUrl: 'resources/images/gray-shirt.jpg',  
    imageAlt: 'gray shirt image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'White Fedora ', 
    price: '12.99$', 
    salePrice: '8.99$',
    imageUrl: 'resources/images/white-fedora.jpg', 
    imageAlt: 'white fedora image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Black Tie ', 
    price: '6.99$', 
    salePrice: '3.99$',
    imageUrl: 'resources/images/black-tie.jpg', 
    imageAlt: 'black tie image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Black Shoes', 
    price: '85$',
    imageUrl: 'resources/images/black-shoes.jpg',  
    imageAlt: 'black shoes image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'White Shoes', 
    price: '99.99$',
    imageUrl: 'resources/images/white-shoes.jpg', 
    imageAlt: 'white shoes image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'Black Trunks', 
    price: '12$',
    imageUrl: 'resources/images/black-trunks.jpg', 
    imageAlt: 'white shoes image',
    description: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    },
    { name: 'White Trunks', 
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

// Update the generateProductCards function to use the filterProductsBySalePrice function
function generateProductCards(products, showSaleProducts) {
    const container = document.getElementById('productContainer');
    container.innerHTML = "";

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
                        <h6 class="card-subtitle mb-2 text-body-secondary"> ${product.price}</h6>
                        <p class="card-text">${product.description}</p>
                        <div class="card-footer">
                            <button class="btn btn-primary" onclick="addToCart()"> Add to Cart</button>
                            <button class="btn btn-success" onclick="checkoutProceed()"> Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Update the window.onload function to pass the correct parameters to generateProductCards
window.onload = generateProductCards(products, true);  // For index.html page, pass true to showSaleProducts
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

window.onload = generateProductCards(products, false);