import {
  checkPassword,
  checkConfirmationPass,
  checkPasswordsMatch,
} from "./utils/password-validation";
import { checkUsernameLength } from "./utils/username-validation";
import { checkEmail } from "./utils/email-validation";
import { toggleInputVisibility } from "./utils/toggle-input-visibility";
import { toggleBtnIcon } from "./utils/toggle-btn-icon";

const form = document.getElementById("form");

// Text inputs
const username = document.getElementById("username"),
  email = document.getElementById("email"),
  password = document.getElementById("password"),
  password2 = document.getElementById("password2"),
  togglePasswordVisibilityBtn = document.getElementById(
    "show-hide-password-btn"
  );
const visibilityIcon = document.getElementById("visibility-icon");
const showTextIcon = "fa-regular fa-eye",
  hideTextIcon = "fa-regular fa-eye-slash";

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
  toggleBtnIcon(visibilityIcon, showTextIcon, hideTextIcon);
});
