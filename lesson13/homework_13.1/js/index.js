const form = document.createElement("form");
form.id = "form";

const introText = document.createElement("p");
introText.textContent = "We would like to help you";
form.appendChild(introText);

const inputName = document.createElement("input");
inputName.type = "text";
inputName.id = "name";
inputName.name = "name";
inputName.placeholder = "Name";
inputName.required = true;
form.appendChild(inputName);

const inputMessage = document.createElement("textarea");
inputMessage.id = "message";
inputMessage.name = "message";
inputMessage.placeholder = "Message";
inputMessage.required = true;
inputMessage.minLength = 5;
form.appendChild(inputMessage);

const instructionText = document.createElement("p");
instructionText.textContent = "How to answer you?";
form.appendChild(instructionText);

const phone = document.createElement("input");
phone.type = "tel";
phone.id = "phone";
phone.name = "phone";
phone.placeholder = "Phone number";
form.appendChild(phone);

const phonePattern = new RegExp(/^(\+380)\d{9}$/);

const errorElement = document.createElement("p");
errorElement.id = "phoneError";
errorElement.style.color = "red";
form.appendChild(errorElement);

const email = document.createElement("input");
email.type = "email";
email.id = "email";
email.name = "email";
email.placeholder = "Email";
email.required = true;
form.appendChild(email);

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Send message";
form.appendChild(submitButton);

document.body.appendChild(form);

function handleSubmit(event) {
  event.preventDefault();

  const phoneInput = document.querySelector("#phone").value;
  const nameInput = document.querySelector("#name").value;
  const messageInput = document.querySelector("#message").value;
  const emailInput = document.querySelector("#email").value;

  if (!phonePattern.test(phoneInput)) {
    document.querySelector("#phoneError").textContent =
      "Phone number must start with +380 followed by 9 digits.";
  } else {
    document.querySelector("#phoneError").textContent = "";
    console.log("Name:", nameInput);
    console.log("Message:", messageInput);
    console.log("Email:", emailInput);
    console.log("Phone:", phoneInput);

    document.querySelector("#form").reset();
  }
}

form.addEventListener("submit", handleSubmit);

form.style.cssText = `
  padding: 20px;
  max-width: 400px;
  margin: 30px auto;
  background-color: #f5f5fa;
  border-radius: 8px;
`;

introText.style.cssText = `
  color: #f0195a;
  font-size: 25px;
  font-weight: bold;
`;

inputName.style.cssText = `
  display: flex;
  width: 400px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

inputMessage.style.cssText = `
  display: flex;
  width: 400px;
  box-sizing: border-box;
`;

instructionText.style.cssText = `
  color: #b8b6bb;
  text-transform: uppercase;
`;

phone.style.cssText = `
 display: flex;
  width: 400px;
  box-sizing: border-box;
`;

email.style.cssText = `
  display: flex;
  width: 400px;
  box-sizing: border-box;
  margin-bottom: 10px;
`;

submitButton.style.cssText = `
  display: flex;
  margin: 0 auto;
  width: 300px;
  justify-content: center;
  color: white;
  background-color: #24a3ff;
  border: none;
  border-radius: 10%;
  padding: 20px 0;
  font-size: 17px;
`;
