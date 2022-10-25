import {
  checkPassword,
  checkConfirmationPass,
  checkPasswordsMatch,
} from "./utils/password-validation";
import { showError, showSuccess } from "./utils/screen-alerts";
import { checkUsernameLength } from "./utils/username-validation";

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
