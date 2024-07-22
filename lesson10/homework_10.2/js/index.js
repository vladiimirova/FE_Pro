const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const paired = numbers.reduce(function(accumulator, number) {
  if (number % 2 === 0) {
    accumulator.push(number);
  }
  return accumulator;
}, []);

console.log(paired);