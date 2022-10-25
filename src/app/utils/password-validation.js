import { showError, showSuccess } from "./screen-alerts";
import { getFieldName } from "./get-field-name";

const passwordValidatorRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Check valid password
export function checkPassword(input, min) {
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
export function checkConfirmationPass(input) {
  if (input.value.trim() === "") {
    showError(input, "Password confirmation is required");
  } else {
    showSuccess(input);
  }
}

// Check passwords match
export function checkPasswordsMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match");
  }
}
