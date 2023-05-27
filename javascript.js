function add(a, b) {
    return a + b
}

function subtract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function divide (a, b) {
    if (b == "0") {
        return NaN
    }
    return a / b
}

function operate (a, b, operator) {
    let result = 0
    if (operator == "+") {
        result = add(a, b)
    } 
    else if (operator == "-") {
        result = subtract(a, b)
    } 
    else if (operator == "*") {
        result = multiply(a, b)
    } 
    else if (operator == "/") {
        result = divide(a, b)
    }
    else if (operator == "=") {
        result = b
    }

    return Math.round(result * 10000) / 10000
}

let displayValue = ""
let displayValuePrev = ""
let oprValue = ""
const numbers = document.querySelectorAll('.number')
numbers.forEach(number => number.addEventListener('click', populateDisplay))
const display = document.querySelector('.disp')

function populateDisplay(e) {
    if (e.target.textContent == "." && display.textContent.includes(".")) {
        return 0
    }
    displayValue += e.target.textContent
    display.textContent = displayValue
}

const operators = document.querySelectorAll('.opr')
operators.forEach(opr => opr.addEventListener('click', oprClick))

function oprClick(e) {
    if (oprValue == "") {
        oprValue = e.target.textContent
        displayValuePrev = displayValue
        display.textContent += oprValue
        displayValue = ""
    }
    // else if (oprValue == "=") {

    // }
    else {
        result = operate(Number(displayValuePrev), Number(displayValue), oprValue)
        display.textContent = result.toString()
        oprValue = e.target.textContent
        displayValuePrev = result.toString()
        display.textContent += oprValue
        displayValue = ""
    }
}

const equals = document.querySelector('.equals')
equals.addEventListener('click', equalsClick)

function equalsClick() {
    if (displayValue == display.textContent) {
        result = operate(Number(displayValuePrev), Number(displayValue), oprValue)
        display.textContent = result.toString()
        displayValue = result.toString()
        oprValue = "="
    }
}

const clear = document.querySelector('.clear')
clear.addEventListener('click', clearClick)
function clearClick() {
    displayValue = ""
    display.textContent = ""
}
