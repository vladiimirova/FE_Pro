const getMixedArray = [1, 'a', true, 'b', 2, 'c', false, 3, NaN, 4, 'sun'];

function calculateAverage(array) {
  const numbers = array.filter(element => typeof element === 'number' && !isNaN(element));
  
  if (numbers.length === 0) {
    return 0;
  }

  const sum = numbers.reduce((acc, num) => acc + num, 0);
  
  const average = sum / numbers.length;
  
  return average;
}

const average = calculateAverage(getMixedArray);
console.log(average);



