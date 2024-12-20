console.log("%cTask 1", "color: #12ff00; font-weight: bold;");

function isEnoughCapacity(products, containerSize) {
    const productValues = Object.values(products);
    
    let totalProducts = 0;
    
  for (let i = 0; i < productValues.length; i++) {
    totalProducts += productValues[i];
  }
  let isCapacityEnough = totalProducts <= containerSize;
  return isCapacityEnough;
}

console.log(
  isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)
); // true
console.log(
  isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)
); // false
console.log(
  isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)
); // true
console.log(
  isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)
); // false
