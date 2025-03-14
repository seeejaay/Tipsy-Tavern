document.addEventListener("DOMContentLoaded", function () {
  const checkoutBtn = document.querySelector(".checkout");
  const overlay = document.getElementById("overlay");
  const popup = document.getElementById("popup");
  const closeBtn = document.getElementById("closeBtn");
  const checkoutForm = document.getElementById("checkoutForm");
  const cartWindow = document.getElementById("_cartWindow");
  const checkoutTotal = document.querySelector(".checkout-total");

  checkoutBtn.addEventListener("click", function () {
    cartWindow.style.display = "none"; // Close the cart
    overlay.style.display = "block";
    popup.style.display = "block";

    const totalPrice = localStorage.getItem("totalPrice");
    if (totalPrice) {
      checkoutTotal.innerText = `₱${totalPrice}`;
    }
  });

  closeBtn.addEventListener("click", function () {
    overlay.style.display = "none";
    popup.style.display = "none";
    cartWindow.style.display = "block"; // Show the cart again
  });

  checkoutForm.addEventListener("submit", function (event) {
    event.preventDefault();

    checkoutForm.reset();
    // Perform any necessary actions here, such as clearing the cart
    alert("Form submitted!"); // You can replace this with actual actions
    overlay.style.display = "none";
    popup.style.display = "none";
    cartWindow.style.display = "block"; // Show the cart again
  });
});
