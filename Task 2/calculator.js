let displayValue = '';

function append(value) {
  displayValue += value;
  updateDisplay();
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function deleteDigit() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
  } catch (error) {
    displayValue = 'Error';
  }
  
  updateDisplay();
}

function updateDisplay() {
  const display = document.getElementById('result');
  display.value = displayValue;
}
