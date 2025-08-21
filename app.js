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