const firstname = document.querySelector("#first-name-input");
const lastname = document.querySelector("#last-name-input");
const email = document.querySelector("#email-input");
const password = document.querySelector("#password-input");
const submitbtn = document.querySelector("#submit-btn");

//simple email validation
function validateEmail(email) {
  var atPos = email.indexOf("@");
  var dotPos = email.lastIndexOf(".");
  return atPos > 0 && dotPos > atPos + 1 && dotPos < email.length - 1;
}

firstname.onkeyup = () => {
  firstname.classList.remove("is-invalid");
  firstname.classList.remove("is-valid");
};

lastname.onkeyup = () => {
  lastname.classList.remove("is-invalid");
  lastname.classList.remove("is-valid");
};

email.onkeyup = () => {
  email.classList.remove("is-invalid");
  email.classList.remove("is-valid");
};

password.onkeyup = () => {
  password.classList.remove("is-invalid");
  password.classList.remove("is-valid");
};

submitbtn.onclick = () => {
  let isFirstNameOk = false;
  let isLastNameOk = false;
  let isEmailOk = false;
  let isPasswordOk = false;

  if (firstname.value === "") {
    firstname.classList.add("is-invalid");
  } else {
    firstname.classList.add("is-valid");
    isFirstNameOk = true;
  }

  if (lastname.value === "") {
    lastname.classList.add("is-invalid");
  } else {
    lastname.classList.add("is-valid");
    isLastNameOk = true;
  }

  if (validateEmail(email.value)) {
    email.classList.add("is-valid");
    isEmailOk = true;
  } else {
    email.classList.add("is-invalid");
  }

  if (password.value.length < 6) {
    password.classList.add("is-invalid");
  } else {
    password.classList.add("is-valid");
    isPasswordOk = true;
  }

  if (isFirstNameOk && isLastNameOk && isEmailOk && isPasswordOk) {
    alert("Registered successfully");
  }
};
