const container = document.querySelector('.container');
const themeSelector = document.querySelector('.themeselector')


themeSelector.addEventListener('change', e => {
  const theme = e.target.value

  changeTheme(theme)
})

const changeTheme = (theme) => {
  const lastTheme = container.classList[1];

  if (!container.classList.contains(theme)) {
    container.classList.remove(lastTheme)
    container.classList.add(theme)
  }
}