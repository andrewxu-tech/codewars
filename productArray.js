function productArray(numbers){
  return numbers.map((n, i) => {
    let currentProduct = 1;
    numbers.forEach((m, j) => {
      if (i !== j) {
        currentProduct *= m;
      }
    });
    return currentProduct;
  });
}
