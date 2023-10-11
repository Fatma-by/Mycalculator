// Get the result input element

const buttons = document.querySelectorAll("button");

  // Retrieve the clicked button


const resultInput = document.getElementById("result");
// Create a function to handle button clicks 

let expression = "";

function handleClick(event) {
  const clickedButton = event.target;
  resultInput.value = clickedButton.textContent;
  if (buttonValue === "AC") {
    expression = "";
    resultInput.value = expression;
  } else if (buttonValue === "=") {
    try {
      expression = eval(expression);
      resultInput.value = expression;
    } catch (error) {
      resultInput.value = "Erreur";
    }
  } else {
    expression += buttonValue;
    resultInput.value = expression;
  }
}

  // Update the value of the result input with the text of the clicked button

document
  .querySelectorAll("button")
  .forEach((button) => button.addEventListener("click", handleClick));
