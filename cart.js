function loadCart() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItems = document.getElementById("cart-items");
  let total = 0;
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
    document.getElementById("cart-total").innerText = "";
    return;
  }

  cart.forEach((item, index) => {
    total += item.price * item.qty;

    cartItems.innerHTML += `
      <div class="d-flex justify-content-between align-items-center border-bottom py-2">
        <div>
          <img src="${item.image}" alt="${item.name}" style="width:50px; height:50px; object-fit:cover;">
          <span class="ms-2">${item.name} - $${item.price} (x${item.qty})</span>
        </div>
        <button class="btn btn-sm btn-danger" onclick="removeFromCart(${index})">Remove</button>
      </div>
    `;
  });

  document.getElementById("cart-total").innerText = `Total: $${total.toFixed(2)}`;
}

function removeFromCart(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
  updateCartCount();
}

// cart count update (navbar ke liye)
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

window.onload = () => {
  loadCart();
  updateCartCount();
};
