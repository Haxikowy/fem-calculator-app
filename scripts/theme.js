const container = document.querySelector('.container');

const changeTheme = (theme) => {
  const lastTheme = container.classList[1];

  if (!container.classList.contains(theme)) {
    container.classList.remove(lastTheme)
    container.classList.add(theme)
  }
}