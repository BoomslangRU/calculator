
let numberButtons = document.querySelectorAll('.number-button');

for (let i = 0; i < numberButtons.length; i++) {
    let numberButtonsResult = numberButtons[i];
        numberButtonsResult.addEventListener('click', numberButtonClickListener);
}

function numberButtonClickListener(e) {
    let inputResult = document.querySelector('#input-result-tabl');
    inputResult.value = e.currentTarget.value;
}


