const products = [
    {
        id: 1,
        name: "Delicious Risotto",
        price: 19.99,
        image: "../images/risotto.jpg",
        description: "Risotto with spicy shrimp"
    },
    {
        id: 2,
        name: "Cheesburgers",
        price: 29.99,
        image: "../images/cheesburgers.jpg",
        description: "The best cheesburgers you can get"
    },
    {
        id: 3,
        name: "Salmon Rice Bowls",
        price: 39.99,
        image: "../images/Salmon Rice Bowls.jpg",
        description: "Easy rice bowls with salmon"
    }
];

function renderProducts() {
    const productContainer = document.getElementById("product-list");
    productContainer.innerHTML = ""; // Clear any existing products

    products.forEach((product) => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <img class="card-image" src="${product.image}" alt="${product.name}">
            <div class="card-content">
                <h3 class="card-title">${product.name}</h3>
                <p class="card-price">Price: $${product.price}</p>
                <p class="card-description">${product.description}</p>
                <button class="add-to-cart" data-id="${product.id}">Purchase Product</button>
            </div>
        `;

        productContainer.appendChild(card);
    });

    // Add event listeners for "Add to Cart" buttons
    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (e) => {
            const productId = e.target.dataset.id;
            const product = products.find(p => p.id === parseInt(productId));

            if (product) {
                addToCart(product);
            }
        });
    });
}

// Function to add product to cart
function addToCart(product) {
    const cart = getCartItems();
    const existingItem = cart.find(item => item.id === product.id);

    if (existingItem) {
        existingItem.quantity = (existingItem.quantity || 1) + 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCartItems(cart);
    alert(`${product.name} has been added to your cart.`);
}


document.addEventListener("DOMContentLoaded", renderProducts);
