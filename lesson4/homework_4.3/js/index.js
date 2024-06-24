let year = prompt("Якого ви року народження?")
let city = prompt("В якому місті ви живете?")
let sport = prompt("Який ваш улюблений вид спорту?")

const capital1 = "Київ";
const capital2 = "Вашингтон"
const capital3 = "Лондон"

const sport1 = "футбол";
const sport2 = "баскетбол";
const sport3 = "плавання";

if (year !== null && year !== "" && !isNaN(year)) {
    alert(`Ваш рік народження: ${year}`);
} else {
  alert("Шкода, що Ви не захотіли ввести свoю дату народження)");
}

if (city !== null && city !== "") {
    if (city == capital1) {
        alert("Ти живеш у столиці України - Київ.");
    } else if (city == capital2) {
        alert("Ти живеш у столиці США - Вашингтон.");
    } else if (city == capital3 ){
        alert("Ти живеш у столиці Великої Британії - Лондон.");
    } else {
        alert(`Ти живеш у місті ${city}.`);
    } 
} else {
        alert("Шкода, що Ви не захотіли ввести своє місто проживання.");
    }

if (sport !== null && sport !== "") {
    if (sport == sport1) {
        alert("Круто! Хочеш стати Криштиану Роналду?");
    } else if (sport == sport2) {
        alert("Круто! Хочеш стати Майклом Джорданом?");
    } else if (sport == sport3) {
        alert("Круто! Хочеш стати Майклом Фелпсом?");
    } else {
        alert(`Круто! Твій улюблений вид спорту ${sport}.`);
    }
} else {
    alert("Шкода, що Ви не захотіли ввести свій улюблений вид спорту.");
    }



