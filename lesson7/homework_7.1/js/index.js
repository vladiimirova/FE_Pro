function createSumFunction() {
    let result = 0;
    return function addNumber(number) {
        return result += number;
    }
}

const sum = createSumFunction();

console.log(sum(4)); 
console.log(sum(6)); 
console.log(sum(10)); 
console.log(sum(7)); 
