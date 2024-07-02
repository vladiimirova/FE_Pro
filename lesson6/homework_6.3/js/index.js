const array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
  return array = array.filter(value => value !== item)
}

const item = 4;
const updateArray = removeElement(array, item);

console.log(updateArray)
