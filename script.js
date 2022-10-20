const form = document.getElementById("form");
// Text inputs
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g;

// Show input error message
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// Email validation
function checkEmail(input) {
  const re =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (!re.test(String(input.value).trim().toLocaleLowerCase())) {
    showError(input, "Email is not valid");
  } else {
    showSuccess(input);
  }
}

// Check Required Confirmation Password
function checkConfirmationPass(input) {
  if (input.value.trim() === "") {
    showError(input, "Password confirmation is required");
  } else {
    showSuccess(input);
  }
}

// Check Username length
function checkUsernameLength(input, min, max) {
  if (input.value.length <= min) {
    showError(
      input,
      `${getFieldName(input)} must be at least ${min} characters`
    );
  } else if (input.value.length >= max) {
    showError(
      input,
      `${getFieldName(input)} must be less than ${max} characters`
    );
  } else {
    showSuccess(input);
  }
}

// Check Username length
function checkPassword(input, min) {
  if (!passwordRegExp.test(input)) {
    console.log(
      "Password minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    );
    showError(
      input,
      `${getFieldName(
        input
      )} must be at least ${min} characters, one uppercase letter, one lowercase letter, one number and one special character`
    );
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Get fieldname by Id
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase().concat(input.id.slice(1));
}

// Event listeners & Validation
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkConfirmationPass(password2);
  checkUsernameLength(username, 3, 15);
  checkPassword(password, 8);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});
