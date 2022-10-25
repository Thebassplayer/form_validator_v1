// Get fieldname by Id
export function getFieldName(input) {
  return input.id.charAt(0).toUpperCase().concat(input.id.slice(1));
}
