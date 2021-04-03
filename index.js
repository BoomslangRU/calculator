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



// this block of work with getting numbers and their negative values 

function numberButtonClickListener(e) {
    let theInteger = inputResult.value;
    let theNumber = e.currentTarget.value;
    if (mathematicalOperation === undefined || mathematicalOperation == theNumber) {
        if (theNumber === '±') {
            firstNumber = addNegativePositiveValues(theInteger)
        } else {
            firstNumber = addNumberInput(theInteger, theNumber);
        }
    } else {
        if (theNumber === '±') {
            lastNumber = addNegativePositiveValues(theInteger)
        } else {
            lastNumber = addNumberInput(theInteger, theNumber);
        }
    }
}

function addNumberInput(value, number) {
    let inputResultValue = inputResult.value;
    if (value === '0' || value == finalResult) {
        inputResult.value = number;
    } else if (value === '-0') {
        inputResultValue = (value + number);
        inputResult.value = '-' + inputResultValue.slice(2);
    } else {
        inputResult.value = value + number;
    }
    return inputResult.value;
}

function addNegativePositiveValues(value) {
    if (value.indexOf('-')) {
        inputResult.value = '-' + +value;
    } else {
        inputResult.value = value.slice(1);
    }
    return inputResult.value;
}





// this block for working with mathematical operators, resetting and getting the result 

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
    } else if (mathematicalOperation == '%') {
        finalResult = (+firstNumber / 100) * +lastNumber;
    } else {
        console.log('calculator error');
    }
    inputResult.value = finalResult;
    firstNumber = finalResult;
}

function resetValues() {
    inputResult.value = '0';
    firstNumber = undefined;
    lastNumber = undefined;
    mathematicalOperation = undefined;
    finalResult = '0';
}




// UI CODE
// since the code is very simple there is no reason to write UI code in Javascript 