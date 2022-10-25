// Toggle Visibility password button
export function toggleBtnIcon(btn, iconOne, iconTwo) {
  let iconClassName = btn.className;
  iconClassName === iconOne
    ? (btn.className = iconTwo)
    : (btn.className = iconOne);
}
