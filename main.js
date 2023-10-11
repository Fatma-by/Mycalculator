

const buttons = document.querySelectorAll('button');

function handleClick(event) {
 const clickedButton = event.target;

 console.log('Bouton cliqué:', clickedButton.textContent);
}

buttons.forEach(button => button.addEventListener('click', handleClick));

const resultInput = document.getElementById('result');
function handleClick(event) {
  const clickedButton = event.target;
  resultInput.value = clickedButton.textContent;
}
document.querySelectorAll('button').forEach(button => button.addEventListener('click', handleClick));


let expression = '';

function handleClick(event) {
  const clickedButton = event.target;
  const buttonValue = clickedButton.textContent;
  if (buttonValue === 'AC') {
    expression = '';
    resultInput.value = expression;
  }

  else if (buttonValue === '=') {
    try {
      expression = eval(expression);
      resultInput.value = expression;
    } catch (error) {
      resultInput.value = 'Erreur';
    }
  } else {
    expression += buttonValue;
    resultInput.value = expression;
  }
}

buttons.forEach((button) => button.addEventListener('click', handleClick));




