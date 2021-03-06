// Even Fibonacci numbers
// Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
// 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.

function getFibonacci(target) {
  const fibo = [1, 2];
  const lastIndex = fibo.length - 1;

  for (let i = fibo.length; fibo[i - 1] < target; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }

  if (fibo[lastIndex] > target) {
    return sumEvenFibonacci(fibo.slice(0, lastIndex));
  }
  return sumEvenFibonacci(fibo);
}

function sumEvenFibonacci(array) {
  return array
    .filter(num => num % 2 === 0)
    .reduce((sum, num) => sum + num);
}

console.log(getFibonacci(4000000));
