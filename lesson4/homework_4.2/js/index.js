let number = prompt("Введіть тризначне число:");

// Перевірка чи введене значення є числом і має рівно три цифри
if (number !== null && !isNaN(number) && number.length === 3) {
    let digit1 = number.charAt(0);  // Перша цифра
    let digit2 = number.charAt(1);  // Друга цифра
    let digit3 = number.charAt(2);  // Третя цифра

    // Перевірка чи всі цифри однакові
    let allDigitsSame = digit1 === digit2 && digit2 === digit3;

    // Перевірка чи є серед цифр хоча б дві однакові
    let anyTwoDigitsSame = digit1 === digit2 || digit2 === digit3 || digit1 === digit3;

    // Виведення результатів
    if (allDigitsSame) {
        console.log("Всі цифри у числі однакові.");
    } else {
        console.log("Всі цифри у числі не однакові.");
    }

    if (anyTwoDigitsSame) {
        console.log("Серед цифр є хоча б дві однакові.");
    } else {
        console.log("Серед цифр немає хоча б дві однакові.");
    }
} else {
    console.log("Введено некоректне значення. Будь ласка, введіть тризначне число.");
}
