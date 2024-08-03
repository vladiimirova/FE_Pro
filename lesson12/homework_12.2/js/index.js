const wrapper = document.createElement("div"); 
wrapper.id = "wrapper"; 
document.body.appendChild(wrapper);


const btn1 = document.createElement("button");
btn1.id = "btn1";
btn1.textContent = "Button 1";
wrapper.appendChild(btn1);

const btn2 = document.createElement("button");
btn2.id = "btn2";
btn2.textContent = "Button 2";
wrapper.appendChild(btn2);

const btn3 = document.createElement("button");
btn3.id = "btn3";
btn3.textContent = "Button 3";
wrapper.appendChild(btn3);

btn1.style.cssText = `
    padding: 10px;
    border: 2px solid black;
    border-radius: 5px;
    margin-right: 10px;
`;

btn2.style.cssText = `
    padding: 10px;
    border: 2px solid black;
    border-radius: 5px;
    margin-right: 10px;
`;

btn3.style.cssText = `
    padding: 10px;
    border: 2px solid black;
    border-radius: 5px;
`;

function handleButtonClick(event) {
  if (event.target.tagName === "BUTTON") {
    const buttonText = event.target.textContent; 
    alert(`You clicked on ${buttonText}`);
  }
}

wrapper.addEventListener("click", handleButtonClick);