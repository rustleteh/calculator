let calculation = localStorage.getItem('calculation') || '';

displayAndSave();

function activateLightUp(button) {
  const buttonElement = document.querySelector(`.js-number-button-${button}`);
  if (!buttonElement.classList.contains('activated-number-button')) { 
  buttonElement.classList.add('activated-number-button');
  }
}

function deactivateLightUp(button) {

  const buttonElement = document.querySelector(`.js-number-button-${button}`);
  if (buttonElement.classList.contains('activated-number-button')) { 
    buttonElement.classList.remove('activated-number-button');
  }
}

function evaluateCalculation() {
  calculation = eval(calculation);
  displayAndSave();
}

function updateCalculation(value) {
  calculation += value;
  displayAndSave();
}

function backspace() {
  calculation = String(calculation);
  calculation = calculation.slice(0, -1);
  displayAndSave();
}

function displayAndSave() {
  if (calculation === '') {
    document.querySelector('.js-screen').innerHTML = '0';
  }
  else if (calculation === '.') {
    calculation = '0.';
  }
  else {
    document.querySelector('.js-screen').innerHTML = calculation;
  }
  localStorage.setItem('calculation', calculation);
}
