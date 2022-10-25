import {
  checkPassword,
  checkConfirmationPass,
  checkPasswordsMatch,
} from "./app/utils/password-validation";
import { checkUsernameLength } from "./app/utils/username-validation";
import { checkEmail } from "./app/utils/email-validation";
import { toggleInputVisibility } from "./app/utils/toggle-input-visibility";
import { toggleBtnIcon } from "./app/utils/toggle-btn-icon";

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
