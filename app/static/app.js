const state = {
  signedIn: false,
  cart: [],
  products: [],
};

const shippingThresholdMessage = 50;
const shippingThresholdLogic = 75;
const shippingCost = 7.99;

const productList = document.querySelector('#product-list');
const loginForm = document.querySelector('#login-form');
const loginStatus = document.querySelector('#login-status');
const itemCount = document.querySelector('#item-count');
const subtotal = document.querySelector('#subtotal');
const shipping = document.querySelector('#shipping');
const shippingMessage = document.querySelector('#shipping-message');
const checkoutButton = document.querySelector('#checkout-button');

function currency(value) {
  return `$${value.toFixed(2)}`;
}

function cartSubtotal() {
  return state.cart.reduce((sum, item) => sum + item.price, 0);
}

function renderProducts() {
  productList.innerHTML = '';

  state.products.forEach((product) => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div>
        <div class="product-name">${product.name}</div>
        <div class="price">${currency(product.price)}</div>
      </div>
      <button type="button" data-testid="add-to-cart-${product.id}">
        Add to cart
      </button>
    `;

    const button = card.querySelector('button');
    button.addEventListener('click', () => {
      state.cart.push(product);
      updateSummary();
    });

    productList.appendChild(card);
  });
}

function updateSummary() {
  const subtotalValue = cartSubtotal();
  const qualifiesForFreeShipping = subtotalValue >= shippingThresholdLogic;
  const currentShipping = qualifiesForFreeShipping ? 0 : shippingCost;

  itemCount.textContent = String(state.cart.length);
  subtotal.textContent = currency(subtotalValue);
  shipping.textContent = currency(currentShipping);
  checkoutButton.disabled = !(state.signedIn && state.cart.length > 0);

  if (qualifiesForFreeShipping) {
    shippingMessage.textContent = 'Free shipping applied.';
  } else {
    const remaining = Math.max(shippingThresholdMessage - subtotalValue, 0);
    shippingMessage.textContent = `Add ${currency(remaining)} more to unlock free shipping.`;
  }
}

async function loadProducts() {
  const response = await fetch('/api/products');
  const data = await response.json();
  state.products = data.products;
  renderProducts();
}

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const response = await fetch('/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  const data = await response.json();

  if (!response.ok) {
    state.signedIn = false;
    loginStatus.textContent = data.error || 'Unable to sign in.';
    updateSummary();
    return;
  }

  state.signedIn = true;
  loginStatus.textContent = `Signed in as ${data.user.name}`;
  updateSummary();
});

loadProducts();
updateSummary();
