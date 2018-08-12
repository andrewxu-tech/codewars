function twoSum(numbers, target) {
  let results;
  numbers.forEach((n, i) => {
    numbers.forEach((m, j) => {
      n + m === target && i !== j ? results = [i, j] : null;
    });
  });
  return results;
}
