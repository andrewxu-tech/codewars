function group(arr) {
  const sortedArr = [...arr].sort();
  const unsortedResults = [];
  const results = [];
  sortedArr.forEach((n, i) => {
    if (n === sortedArr[i - 1]) {
      unsortedResults[unsortedResults.length - 1].push(n);
    } else {
      unsortedResults.push([n]);
    }
  });
  arr.forEach(n => {
    unsortedResults.forEach(m => {
      let numberAlreadyExists = false;
      results.forEach(item => {
        item[0] === m[0] ? numberAlreadyExists = true : null;
      });
      n === m[0] && !numberAlreadyExists ? results.push(m) : null;
    });
  });
  return results;
}
