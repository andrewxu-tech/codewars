function extraPerfect(n){
  const results = [];
  for (let i = 1; i <= n; i++) {
    i % 2 ? results.push(i) : null;
  }
  return results;
}
