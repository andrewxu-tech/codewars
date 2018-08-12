function tidyNumber(n){
  const numbersArray = n.toString().split('');
  let isTidy = true;
  for (let i = 1; i <= numbersArray.length; i++) {
    if (numbersArray[i] < numbersArray[i - 1]) {
      isTidy = false;
    }
  }
  return isTidy;
}
