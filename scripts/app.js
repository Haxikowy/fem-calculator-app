const themeSelector = document.querySelector('.themeselector');

const previousOperandElement = document.querySelector('.calc-output_prev');
const currentOperandElement = document.querySelector('.calc-output_current');
const calcKeyboard = document.querySelector('.calc-keyboard');


detectMode('theme-third');

themeSelector.addEventListener('change', e => {
  const theme = e.target.value;

  changeTheme(theme);
});

const calculator = new Calculator(previousOperandElement, currentOperandElement)

calcKeyboard.addEventListener('click', e => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;

    if (button.hasAttribute('data-number')) {
      calculator.appendDigit(button.textContent);
      calculator.updateScreen();
    }

    if (button.hasAttribute('data-operation')) {
      calculator.chooseOperation(button.textContent);
      calculator.updateScreen();
    }

    if (button.hasAttribute('data-reset')) {
      calculator.reset();
      calculator.updateScreen();
    }

    if (button.hasAttribute('data-delete')) {
      calculator.delete();
      calculator.updateScreen();
    }

    if (button.hasAttribute('data-equals')) {
      calculator.compute();
      calculator.updateScreen();
    }
  }
});