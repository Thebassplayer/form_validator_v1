const passwordValidatorRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

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
