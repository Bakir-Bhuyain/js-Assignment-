//problem 1
/**
 * understanding the concept
 **/
/*function signature/sample */
function newPrice(currentPrice, discount) {
  //validation test

  if (
    typeof currentPrice !== "number" ||
    currentPrice < 0 ||
    typeof discount !== "number" ||
    discount < 0
  ) {
    return "Invalid";
  }
  let productCurrentPrice = currentPrice;
  let discountedPrice = discount / 100;
  let afterDiscountedPrice = productCurrentPrice * discountedPrice;
  let afterMinusesThePrice = productCurrentPrice - afterDiscountedPrice;
  return afterMinusesThePrice.toFixed(3);
}

// const price = newPrice("1500", 2);
// console.log(price);
