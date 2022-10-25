import {
  checkPassword,
  checkConfirmationPass,
  checkPasswordsMatch,
} from "./utils/password-validation";
import { checkUsernameLength } from "./utils/username-validation";
import { checkEmail } from "./utils/email-validation";
import { toggleInputVisibility } from "./utils/toggle-input-visibility";

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
  toggleInputVisibility(password);
  toggleInputVisibility(password2);
  togglePasswordBtn(togglePasswordVisibilityBtn);
});
