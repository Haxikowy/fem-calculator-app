const body = document.body;
const themeDot = document.querySelector('.themeselector-dot');

const detectMode = (theme) => {
  if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
    changeTheme(theme);
    themeDot.style.transform = 'translateX(50px)'
  } else {
    changeTheme('theme-second');
    themeDot.style.transform = 'translateX(25px)'
  }
};

const changeTheme = (theme) => {
  const lastTheme = body.classList[0];

  if (!body.classList.contains(theme)) {
    body.classList.remove(lastTheme)
    themeDot.style.transform = '';
    body.classList.add(theme)
  }
}