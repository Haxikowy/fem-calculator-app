const body = document.querySelector('body');

const changeTheme = (theme) => {
  const lastTheme = body.classList[0];

  if (!body.classList.contains(theme)) {
    body.classList.remove(lastTheme)
    body.classList.add(theme)
  }
}