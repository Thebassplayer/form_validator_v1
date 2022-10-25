// Visibility password button
export function toggleInputVisibility(element) {
  element.type === "password"
    ? (element.type = "text")
    : (element.type = "password");
}
