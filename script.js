let cartItems = [];

function addToCart(productName, price) {
    cartItems.push({ name: productName, price: price });
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    cartList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - R$ ${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    totalElement.textContent = `Total: R$ ${total.toFixed(2)}`;
}
