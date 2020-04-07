const name = document.getElementById("name");
const password = document.getElementById("password");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  const message = [];
  if (name.value === "" || name.value == null) {
    message.push("Name is required");
  }

  if (password.value.length <= 6) {
    message.push("password must be longer then 6 char");
  }

  if (password.value.length > 20) {
    message.push("password must not be more than 20 char");
  }

  if (password.value === "Password") {
    message.push("Password cannot be Password");
  }

  if (age.value <= 0) {
    message.push("Age cannot be Zero or less then Zero");
  }

  if (message.length > 0) {
    e.preventDefault();
    errorElement.innerText = message.join(",");
  }
});

// form.addEventListener("submit", (e) => {
//   e.preventDefault();
// });
