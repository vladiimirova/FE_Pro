const btn1 = document.createElement("button");
btn1.id = "btn1";
btn1.textContent = "Set Link";
document.body.appendChild(btn1);

const btn2 = document.createElement("button");
btn2.id = "btn2";
btn2.textContent = "Go to Link";
document.body.appendChild(btn2);

btn1.style.cssText = `
    background-color: blue;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-right: 10px;
`;

btn2.style.cssText = `
    background-color: green;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
`;

let storedLink = ""; 

function getLink() {
  const link = prompt('Input link');
  if (link) {
    storedLink = link; 
  }
}

btn1.addEventListener('click', getLink);

function useLink() {
  if (storedLink) {
    window.location.href = storedLink; 
  } else {
    alert("No link set!"); 
  }
}

btn2.addEventListener('click', useLink);
