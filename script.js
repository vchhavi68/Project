
const email = document.getElementById("email");
const password = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const success = document.getElementById("success");
const form = document.getElementById("form");

email.addEventListener("change", function () {
  if (
    email.value.length > 3 &&
    email.value.includes("@") &&
    email.value.includes(".")
  ) {
    emailError.textContent = "";
  } else {
    emailError.textContent =
      "Make sure email is more than 3 characters and includes @ and .";
  }
  checkSuccess();
});

password.addEventListener("change", function () {
  if (password.value.length > 8) {
    passwordError.textContent = "";
  } else {
    passwordError.textContent =
      "Make sure password is more than 8 characters.";
  }
  checkSuccess();
});

function checkSuccess() {
  if (emailError.textContent === "" && passwordError.textContent === "") {
    success.textContent = "All good to go!";
  } else {
    success.textContent = "";
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const result = confirm("Do you want to submit?");

  if (result) {
    alert("Successful signup!");
  } else {
    form.reset();
    success.textContent = "";
  }
});