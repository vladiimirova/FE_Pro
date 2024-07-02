const getString = prompt("Введіть рядок:");
const getSymbols = prompt("Введіть символи для видалення:");

function deleteSymbol(getString, getSymbols) {
  let result = "";
  for (let char of getString) {
    if (!getSymbols.includes(char)) {
      result += char;
    }
  }
  return result;
}

const result = deleteSymbol(getString, getSymbols);
console.log(result);



