let inputResult = document.querySelector('#input-result-tabl');
inputResult.value = '0';
let numberOne;
let numberTwo;

let numberButtons = document.querySelectorAll('.number-button');
for (let i = 0; i < numberButtons.length; i++) {
    const numberButtonsArray = numberButtons[i];
    numberButtonsArray.addEventListener('click', numberButtonClickListener);
}

let operationButtons = document.querySelectorAll('.operation-button');
for (let i = 0; i < operationButtons.length; i++) {
    const operationButtonsArray = operationButtons[i];
    operationButtonsArray.addEventListener('click', operationButtonClickListener);
}

function numberButtonClickListener(e) {
    let integer = inputResult.value
    numberOne = e.currentTarget.value;
    inputResult.value = numberOne;
    if (integer != '0') { 
        inputResult.value = integer + numberOne; 
    }else{
        inputResult.value = numberOne;
    }
    
}

