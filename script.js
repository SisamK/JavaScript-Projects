const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

let currentValue = "";
let formula = "";
let isResultDisplayed = false;

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

document.addEventListener("keydown", handleKeyboardInput);

function handleKeyboardInput(event) {
    const key = event.key;
    const allowedKeys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "=", "Enter"];

    if (allowedKeys.includes(key)) {
        event.preventDefault();
        const button = document.querySelector(`button[value="${key}"]`);
        if (button) {
            button.click();
        }
    }

    if (key === "Backspace") {
        backspace();
    }

    if (key === "Escape") {
        clearDisplay();
    }
}

function handleButtonClick(event) {
    if (isResultDisplayed) {
        clearDisplay();
        isResultDisplayed = false;
    }

    const buttonValue = event.target.value;

    if (buttonValue === "AC") {
        clearDisplay();
    } else if (buttonValue === "=") {
        calculateResult();
    } else if (buttonValue === "backspace") {
        backspace();
    } else if (buttonValue === "sqrt") {
        calculateSquareRoot();
    } else {
        updateDisplay(buttonValue);
    }
}

function clearDisplay() {
    currentValue = "";
    formula = "";
    display.textContent = "0";
}

function updateDisplay(value) {
    if (value === "." && currentValue.includes(".")) {
        return;
    }

    if (value === "0" && currentValue === "0") {
        return;
    }

    if (value === "0" && currentValue === "") {
        return;
    }

    currentValue += value;
    display.textContent = currentValue;
}

function backspace() {
    if (currentValue.length > 0) {
        currentValue = currentValue.slice(0, -1);
        display.textContent = currentValue;
    }
}

function calculateResult() {
    try {
        formula = currentValue.replace(/x/g, "*").replace(/‑/g, "-").replace(/÷/g, "/");
        currentValue = eval(formula).toString();
        display.textContent = currentValue;
        isResultDisplayed = true;
    } catch (error) {
        display.textContent = "Error";
    }
}

function calculateSquareRoot() {
    currentValue = Math.sqrt(parseFloat(currentValue)).toString();
    display.textContent = currentValue;
    isResultDisplayed = true;
}
