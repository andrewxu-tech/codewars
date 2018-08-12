function findUniq(arr) {
  let result;
  arr.forEach(function(element) {
    let timesAppeared = 0;
    arr.forEach(function(elements) {
      if (element === elements) {
        timesAppeared++;
      }
    });
    if (timesAppeared === 1) {
      return result = element;
    }
  });
  return result;
}
