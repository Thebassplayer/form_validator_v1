const form = document.getElementById("form");
// Text inputs
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");
const togglePasswordVisibilityBtn = document.getElementById(
  "show-hide-password-btn"
);
const visibilityIcon = document.getElementById("visibility-icon");

const passwordValidatorRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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

// Check Password
function checkPassword(input, min) {
  if (!passwordValidatorRegExp.test(input.value)) {
    showError(
      input,
      `${getFieldName(
        input
      )} must be at least 8 characters, one uppercase letter, one lowercase letter, one number and one special character (@$!%*?&)`
    );
  } else {
    showSuccess(input);
  }
}

// Check Password Confirmation
function checkConfirmationPass(input) {
  if (input.value.trim() === "") {
    showError(input, "Password confirmation is required");
  } else {
    showSuccess(input);
  }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}

// Show input error message
function showError(input, message) {
  const formControl = input.closest(".form-control");
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

// Show success outline
function showSuccess(input) {
  const formControl = input.closest(".form-control");
  formControl.className = "form-control success";
}

// Visibility password button
function togglePasswordVisibility(element) {
  element.type === "password"
    ? (element.type = "text")
    : (element.type = "password");
}

// Toggle Visibility password button
function togglePasswordBtn(btn) {
  let icon = visibilityIcon.className;
  icon === "fa-regular fa-eye"
    ? (visibilityIcon.className = "fa-regular fa-eye-slash")
    : (visibilityIcon.className = "fa-regular fa-eye");
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
  checkPassword(password);
  checkEmail(email);
  checkPasswordsMatch(password, password2);
});

togglePasswordVisibilityBtn.addEventListener("click", (e) => {
  e.preventDefault();
  togglePasswordVisibility(password);
  togglePasswordVisibility(password2);
  togglePasswordBtn(togglePasswordVisibilityBtn);
});
