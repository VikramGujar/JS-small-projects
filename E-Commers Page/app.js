document.addEventListener('DOMContentLoaded', () => {
    const categoryNav = document.getElementById('category-nav');
    const productList = document.getElementById('product-list');
    let cart = [];
    let totalPrice = 0;

    categoryNav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') {
            e.preventDefault();
            const category = e.target.getAttribute('data-category');
            fetchProductsByCategory(category);
        }
    });

    function fetchProductsByCategory(category) {
        fetch(`https://fakestoreapi.com/products/category/${category}?limit=6`)
            .then(response => response.json())
            .then(data => displayProducts(data))
            .catch(error => console.error('Error fetching data:', error));
    }

    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');
            productItem.innerHTML = `
                <img src="${product.image}" alt="${product.title}">
                <h3>${product.title}</h3>
                <p>$${product.price}</p>
                <button onclick="addToCart('${product.image}', ${product.price}, '${product.title}')">Add to Cart</button>
            `;
            productList.appendChild(productItem);
        });
    }

    window.addToCart = function(image, price, title) {
        price = parseFloat(price); 
        cart.push({title, price});
        totalPrice += price;
        
        const cartList = document.getElementById('cart');
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `<img src="${image}" alt="${title}" width="50"> ${title} - $${price.toFixed(2)}`;
        cartList.appendChild(cartItem);
        
        document.getElementById('total-price').innerText = `Total Price: $${totalPrice.toFixed(2)}`;
    };
});
