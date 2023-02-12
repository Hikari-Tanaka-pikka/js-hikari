function sum (from, to) {
  let sum = 0;
  if (from < to) {
    for (let i = from; i <= to ; i++) {
      sum += i
    }
  }
  else {
    for (let i = from; i >= to ; i--) {
      sum += i
    }
  }

  return sum;
}


module.exports = { sum };
