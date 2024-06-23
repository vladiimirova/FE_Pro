let userName = prompt("Введіть ім`я користувача:");
if (userName !== null && userName !== "") {
    alert(`Hello, ${userName}! How are you?`);
} else {
  alert("Ви скасували введення або не ввели ім'я.");
}
