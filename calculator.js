// Arithmetic Functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Cannot divide by zero";
    }
    return number1 / number2;
}

// Event Listener Handler
function handleCalculation(operationFunc) {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = operationFunc(number1, number2);
    document.getElementById('calculation-result').textContent = result;
}

// Attach Event Listeners
document.getElementById('add').addEventListener('click', function () {
    handleCalculation(add);
});

document.getElementById('subtract').addEventListener('click', function () {
    handleCalculation(subtract);
});

document.getElementById('multiply').addEventListener('click', function () {
    handleCalculation(multiply);
});

document.getElementById('divide').addEventListener('click', function () {
    handleCalculation(divide);
});
