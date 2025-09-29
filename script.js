const products = [
  {
    id: 1,
    name: "Resistor",
    price: 0.10,
    image: "assets/resistor.png"
  },
  {
    id: 2,
    name: "Capacitor",
    price: 0.25,
    image: "assets/capacitor.png"
  },
  {
    id: 3,
    name: "Transistor",
    price: 0.50,
    image: "assets/transistor.png"
  }
];

const cart = [];

function renderProducts() {
  const productsDiv = document.querySelector('.products');
  productsDiv.innerHTML = '';
  products.forEach(product => {
    productsDiv.innerHTML += `
      <div class="product">
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price.toFixed(2)}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  const product = products.find(p => p.id === id);
  cart.push(product);
  renderCart();
}

function renderCart() {
  const cartDiv = document.querySelector('.cart');
  if (cart.length === 0) {
    cartDiv.innerHTML = '<strong>Cart is empty.</strong>';
    return;
  }
  let total = 0;
  cartDiv.innerHTML = '<strong>Cart:</strong><ul>';
  cart.forEach(item => {
    cartDiv.innerHTML += `<li>${item.name} - $${item.price.toFixed(2)}</li>`;
    total += item.price;
  });
  cartDiv.innerHTML += `</ul><strong>Total: $${total.toFixed(2)}</strong>`;
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();
});
