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

window.onload = function () {
  var newArrivalsDiv = document.getElementById("newArrivalsLink");
  newArrivalsDiv.style.cursor = "pointer";
  newArrivalsDiv.addEventListener("click", function () {
    window.location.href = "#newarrivals";
  });

  var bestSellersH5 = document.getElementById("bestSellersLink");
  bestSellersH5.style.cursor = "pointer";
  bestSellersH5.addEventListener("click", function () {
    window.location.href = "#bestsellers";
  });

  var categoriesH5 = document.getElementById("categoriesLink");
  categoriesH5.style.cursor = "pointer";
  categoriesH5.addEventListener("click", function () {
    window.location.href = "#categories";
  });

  var specialsH5 = document.getElementById("specialsLink");
  specialsH5.style.cursor = "pointer";
  specialsH5.addEventListener("click", function () {
    window.location.href = "#specials";
  });
};
document.getElementById("payment").addEventListener("change", function () {
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
