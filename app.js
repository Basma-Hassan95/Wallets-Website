function openWhatsApp(e) {
  e.preventDefault(); // default action roke ga

  Swal.fire({
    title: "Chat on WhatsApp",
    text: "Do you want to open WhatsApp to chat with us?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Yes, Open WhatsApp",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#25d366",
  }).then((result) => {
    if (result.isConfirmed) {
      window.open(
        "https://api.whatsapp.com/send?phone=923180254231&text=Hello%20I%20want%20to%20know%20more%20about%20your%20products",
        "_blank"
      );
    }
  });
}


let cart = [];

document.querySelectorAll(".add-to-cart").forEach(button => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const name = this.getAttribute("data-name");
    const price = parseFloat(this.getAttribute("data-price"));

    // add item to cart
    cart.push({ name, price });

    // Show success alert
    Swal.fire({
      icon: 'success',
      title: 'Added to Cart!',
      text: `${name} has been added to your cart.`,
      showConfirmButton: false,
      timer: 1500
    });

    console.log(cart); // check in console
  });
});

// Add to Cart Button Click
document.querySelectorAll(".btn.btn-primary").forEach((btn, index) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    // product details collect
    const card = btn.closest(".card");
    const name = card.querySelector(".card-title").innerText;
    const price = card.querySelector(".fw-semibold").innerText.replace("$", "");
    const image = card.querySelector("img").src;

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // agar item pehle se hai to qty badhao
    let existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price, image, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // sweetalert
    Swal.fire({
      icon: "success",
      title: "Added to Cart!",
      text: `${name} has been added.`,
      showConfirmButton: false,
      timer: 1500
    });

    updateCartCount(); // count badge update
  });
});

// cart count update function
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

// page load pe bhi update karo
window.onload = updateCartCount;

