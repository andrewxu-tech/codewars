function balancedNum(number) {
  const stringNumber = number.toString();
  const splitNumber = [];
  if (stringNumber.length === 1){
    return 'Balanced';
  } else if (stringNumber.length % 2) {
    splitNumber.push(stringNumber.substring(0, (stringNumber.length / 2) - 0.5));
    splitNumber.push(stringNumber.substring((stringNumber.length / 2) + 0.5, stringNumber.length));
  } else if (stringNumber.length) {
    splitNumber.push(stringNumber.substring(0, (stringNumber.length/2) - 1));
    splitNumber.push(stringNumber.substring((stringNumber.length/2) + 1, stringNumber.length));
  }
  const sums = [0, 0];
  splitNumber[0].split('').forEach(digit => {
    sums[0] += Number(digit);
  });
  splitNumber[1].split('').forEach(digit => {
    sums[1] += Number(digit);
  });
  console.log(sums);
  console.log(splitNumber);
  if (sums[0] === sums[1]) {
    return 'Balanced';
  }
  return 'Not Balanced';
}
