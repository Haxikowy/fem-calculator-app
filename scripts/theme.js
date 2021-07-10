const body = document.querySelector('body');
const themeDot = document.querySelector('.themeselector-dot');

const detectMode = (theme) => {
  if (window.matchMedia(`(prefers-color-scheme: dark)`).matches) {
    changeTheme(theme);
    themeDot.style.transform = 'translate3d(50px, 0, 0)'
  } else {
    changeTheme('theme-second');
    themeDot.style.transform = 'translate3d(25px, 0, 0)'
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