function handleUserInput() {
  let lastValidInput;

  for (let i = 0; i < 10; i++) {
    const getNum = prompt(`Введіть число більше ста (ітерація ${i + 1}):`);

    if (getNum === null) {
      break; 
    }

    const num = Number(getNum); 

    if (!isNaN(num) && num > 100) {
      lastValidInput = num;
      break; 
    } else {
      console.log(`Неправильне введення: ${getNum}`);
    }
  }

  if (lastValidInput !== undefined) {
    console.log("Останнє введення: " + lastValidInput);
  } else {
    console.log("Користувач вийшов або не ввів число більше 100.");
  }
}

handleUserInput();
