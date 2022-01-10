"use strict";
console.log("hi there");
let state;
document.addEventListener("DOMContentLoaded", function () {
  state = document.getElementById("s-state");
  document
    .getElementById("cart-hplus")
    .addEventListener("submit", estimateTotal);
  var btnEstimate = document.getElementById("btn-estimate");
btnEstimate.disabled=true;
  state.addEventListener("change", function () {
    if (state.value === "") {
      btnEstimate.disabled = true;
    } else {
      btnEstimate.disabled = false;
    }
  });
});

function estimateTotal(event) {
  event.preventDefault();
  console.log("You submitted the form");
  let bookalg = document.getElementById("txt-q-algorit").value;
  let bookclean = document.getElementById("txt-q-clean").value;
  let bookprogram = document.getElementById("txt-q-program").value;

  let shippingMethod = document.querySelector("[name=r_method]:checked").value;
  let totalqty = parseInt(bookalg)+parseInt(bookclean)+parseInt(bookprogram);
  console.log(totalqty);

  let shippingCost;
  switch(shippingMethod){
      case "usps":
          shippingCost = 2;
          break;
    case "ups":
        shippingCost =3;
        break;
    default:
        shippingCost = 0;
        break;
  }

  let totalShippingCost = shippingCost * totalqty;

  let shippingState = state.value;
  let taxFactor
  if(shippingState === "Sbw"){
      taxFactor= 1.17
  }else if(shippingState === "Btu"){
      taxFactor= 1.50
  }else{
      taxFactor= 2.00
  }

  let totalItemPrice = 90 * bookalg + 25 * bookclean + 30 *bookprogram

  let totalwithGST = totalItemPrice + totalShippingCost

  let result= document.getElementById("result");
  result.innerHTML = "total price RM" + totalItemPrice;
  result.innerHTML += " total shipping RM" + totalShippingCost;
  result.innerHTML += " GST (0%) RM" + totalwithGST;
}