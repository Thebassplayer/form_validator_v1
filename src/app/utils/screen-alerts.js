// Show success - green input outline
export function showSuccess(input) {
  const formControl = input.closest(".form-control");
  formControl.className = "form-control success";
}

// Show error-red input outline + error message
export function showError(input, message) {
  const formControl = input.closest(".form-control");
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
