class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.reset();
  }
  reset() {
    this.currentOperand = '';
    this.previousOperand = '';
    this.operation = undefined;
  }
  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }
  appendDigit(digit) {
    if (digit === '.' && this.currentOperand.includes('.')) return;
    this.currentOperand = this.currentOperand.toString() + digit.toString();
  }
  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }
  negate() {
    if (this.currentOperand === '' || this.currentOperand === '.' || this.currentOperand === '0') return;
    this.currentOperand = this.currentOperand - (this.currentOperand * 2)
  }
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
      case '+':
        computation = prev + current;
        break

      case '-':
        computation = prev - current;
        break

      case 'x':
        computation = prev * current;
        break

      case '/':
        computation = prev / current;
        break
      default:
        return
    }
    this.currentOperand = computation;
    this.operation = undefined;
    this.previousOperand = '';
  }
  updateScreen() {
    this.currentOperandElement.innerText = this.currentOperand;
    this.previousOperandElement.innerText = this.previousOperand;
    if (this.operation != undefined) {
      this.previousOperandElement.innerHTML = `${this.previousOperand} <span class="calc-output_operation">${this.operation.toString()}</span>`;
    }
  }
}