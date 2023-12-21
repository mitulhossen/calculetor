let expression = '';

function clearScreen() {
  document.getElementById('result').value = '';
  expression = '';
}

function deleteChar() {
  const currentExpression = document.getElementById('result').value;
  document.getElementById('result').value = currentExpression.slice(0, -1);
  expression = currentExpression.slice(0, -1);
}

function appendChar(char) {
  document.getElementById('result').value += char;
  expression += char;
}

function calculate() {
  const result = eval(expression);
  document.getElementById('result').value = result;
}