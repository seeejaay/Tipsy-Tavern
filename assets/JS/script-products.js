const openAbout = document.getElementById("_about");
const openHome = document.getElementById("_home");
const openProd = document.getElementById("_products");
const openDesc = document.getElementById("_description");
openAbout.addEventListener("click", () => {
  window.open("./about.html", "_self");
});
openHome.addEventListener("click", () => {
  window.open("../index.html", "_self");
});
openProd.addEventListener("click", () => {
  window.open("./products.html", "_self");
});
openDesc.addEventListener("click", () => {
  window.open("./info.html", "_self");
});

// Section shortcuts (only on pages that have them)
window.onload = function () {
  [["newArrivalsLink", "#newarrivals"], ["bestSellersLink", "#bestsellers"], ["categoriesLink", "#categories"], ["specialsLink", "#specials"]].forEach(function (pair) {
    var el = document.getElementById(pair[0]);
    if (!el) return;
    el.style.cursor = "pointer";
    el.addEventListener("click", function () {
      window.location.href = pair[1];
    });
  });
};
// The payment form is only on the products page
var paymentSelect = document.getElementById("payment");
if (paymentSelect) paymentSelect.addEventListener("change", function () {
  var creditCardInfo = document.getElementById("creditCardInfo");
  var cardNumber = document.getElementById("cardNumber");
  var expiryDate = document.getElementById("expiryDate");
  var cvv = document.getElementById("cvv");

  if (this.value === "credit-card") {
    creditCardInfo.style.display = "block";
    cardNumber.setAttribute("required", "true");
    expiryDate.setAttribute("required", "true");
    cvv.setAttribute("required", "true");
  } else {
    creditCardInfo.style.display = "none";
    cardNumber.removeAttribute("required");
    expiryDate.removeAttribute("required");
    cvv.removeAttribute("required");
  }
});
