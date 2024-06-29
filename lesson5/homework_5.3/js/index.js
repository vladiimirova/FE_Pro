let N = prompt("Введіть ціле число N:");
let i = 1;

do {
    if (i * i <= N) {
        console.log(i);
    }
    i++;
} while (i <= 100);
