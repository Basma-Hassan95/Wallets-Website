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
        "https://api.whatsapp.com/send?phone=923404766631&text=Hello%20I%20want%20to%20know%20more%20about%20your%20products",
        "_blank"
      );
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".add-to-cart");

  buttons.forEach(btn => {
    btn.addEventListener("click", function (e) {
      e.preventDefault();

      const card = btn.closest(".card");
      const name = card.querySelector(".card-title").innerText;
      const price = parseFloat(card.querySelector(".fw-semibold").innerText.replace("$", ""));
      const image = card.querySelector("img").src;

      let cart = JSON.parse(localStorage.getItem("cart")) || [];

      const existing = cart.find(item => item.name === name);
      if (existing) {
        existing.qty += 1;
      } else {
        cart.push({ name, price, image, qty: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(cart));

      Swal.fire({
        icon: 'success',
        title: 'Added to Cart!',
        text: `${name} has been added.`,
        showConfirmButton: false,
        timer: 1500
      });

      updateCartCount();
    });
  });

  updateCartCount();
});

function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  document.getElementById("cart-count").innerText = cart.length;
}

