function unique(array) {
    return Array.from(new Set(array));
  }
  const result = unique([2, 1, 1, 3, 2]);
  console.log(result);