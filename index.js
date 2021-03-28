// BUSINESS CODE
let inputResult = document.querySelector('#input-result-tabl');
inputResult.value = '0';
let firstNumber;
let lastNumber;
let mathematicalOperation;
let finalResult = '0';

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
    let theInteger = inputResult.value;
    let theNumber = e.currentTarget.value;
    if (mathematicalOperation === undefined) {
        if (theInteger != '0' ) {
            inputResult.value = theInteger + theNumber;
        } else {
            inputResult.value = theNumber;
        }
        firstNumber = inputResult.value;
    } else {
        if (theInteger != '0') {
            inputResult.value = theInteger + theNumber;
        } else {
            inputResult.value = theNumber;
        }
        lastNumber = inputResult.value;
    }
}




function operationButtonClickListener(e) {
    theOperation = e.currentTarget.value;
    inputResult.value = null;
    if (mathematicalOperation === undefined || theOperation === "C") {
        resultOperation(theOperation);
    } else {
        finalResultCalculator();
        resultOperation(theOperation);
    }
}

function resultOperation(theOperation) {
    mathematicalOperation = theOperation;
    if (theOperation === 'C') {
        resetValues();
    }
}

function finalResultCalculator() {
    if (mathematicalOperation == 'X') {
        finalResult = firstNumber * lastNumber;
    } else if (mathematicalOperation == '-') {
        finalResult = firstNumber - lastNumber;
    } else if (mathematicalOperation == '+') {
        finalResult = +firstNumber + +lastNumber;
    } else if (mathematicalOperation == '/') {
        finalResult = firstNumber / lastNumber;
    } else if (mathematicalOperation == 'C') {
        resetValues();
    } else if (mathematicalOperation == '=') {
        inputResult.value = finalResult;
    } else {
        console.log('calculator error');
    }
    inputResult.value = finalResult;
}

function resetValues() {
    inputResult.value = '0';
    firstNumber = undefined;
    lastNumber = undefined; 
    mathematicalOperation = undefined;
    finalResult = '0';
}




// UI CODE