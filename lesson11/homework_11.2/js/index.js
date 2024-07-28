const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
let isRed = false;

btn.addEventListener('click', function newColor() {
  if (isRed) {
    text.style.color = "black"; 
  } else {
    text.style.color = "red";
  }
  isRed = !isRed;
})

