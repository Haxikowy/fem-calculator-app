const themeSelector = document.querySelector('.themeselector');
const previousOperandElement = document.querySelector('.calc-output_prev');
const currentOperandElement = document.querySelector('.calc-output_current');
const calcKeyboard = document.querySelector('.calc-keyboard');

// Theme detection & changing part
detectMode('theme-third');

// calculator obj initialization
const calculator = new Calculator(previousOperandElement, currentOperandElement);


// handle event listeners section
const handleThemeChange = e => changeTheme(e.target.value);

const handleInput = (e) => {
  if (e.target.tagName === "BUTTON") {
    const button = e.target;

    if (button.hasAttribute('data-number')) {
      calculator.appendDigit(button.textContent);
    }else if (button.hasAttribute('data-operation')) {
      calculator.chooseOperation(button.textContent);
    }else if (button.hasAttribute('data-reset')) {
      calculator.reset();
    }else if (button.hasAttribute('data-delete')) {
      calculator.delete();
    }else if (button.hasAttribute('data-equals')) {
      calculator.compute();
    }else if (button.hasAttribute('data-negate')) {
      calculator.negate();
    }
    calculator.updateScreen();
  }
}


themeSelector.addEventListener('change', handleThemeChange);
calcKeyboard.addEventListener('click', handleInput);