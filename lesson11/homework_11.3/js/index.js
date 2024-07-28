const imagesArray = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg'
];

const img = document.querySelector('.img');
const btnRandom = document.querySelector('.random');

function getRandomImage(imagesArray) {
    const randomIndex = Math.floor(Math.random() * imagesArray.length);
    return imagesArray[randomIndex];
}

function setRandomImage() {
    img.src = getRandomImage(imagesArray);
}

window.onload = setRandomImage;

btnRandom.addEventListener('click', setRandomImage);

const btnSubmit = document.querySelector('#submitButton');
const numberInput = document.querySelector('#numberInput');

function handleSubmit() {
    const number = parseInt(numberInput.value, 10);
    if (number >= 1 && number <= 9) {
        img.src = imagesArray[number - 1];
    } else {
        alert('Input number from 1 to 9');
    }
}

btnSubmit.addEventListener('click', handleSubmit);
