const display = document.getElementById('display');
const buttons = document.querySelectorAll('button');

let currentInput = '';
let result = '';

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const buttonValue = button.textContent;

        if (buttonValue === 'C') {
            currentInput = '';
            result = '';
        } else if (buttonValue === '=') {
            try {
                result = eval(currentInput);
            } catch (error) {
                result = 'Error';
            }
        } else {
            currentInput += buttonValue;
        }

        display.value = result !== '' ? result : currentInput;
    });
});
