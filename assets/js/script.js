let mainDiv = document.getElementById("buttons");
let result = document.querySelector(".result");
let firstNum = 0;
let secondNum = 0;
let operator;
let res = 0;

const buttons = [
    'C', 'D', '(', ')',
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+'
];

buttons.forEach((button) => {
    const btn = document.createElement("button")
    btn.textContent = button
    switch (button) {
        case '+': case '-': case '*': case '/': case '=': case 'C': case 'D': case '(': case ')':
            btn.classList.add('opr-btn')
            break;

        default:
            btn.classList.add('num-btn')
            break;
    }
    mainDiv.appendChild(btn)
    btn.onclick = () => handleClick(button);
})


function handleClick(value) {
    switch (value) {
        case 'C':
            clear()
            break;

        case 'D':
            deleteLastValue()
            break;

        case '=':
            calculateResult(firstNum, secondNum, operator)
            break;

        default:
            writeAndStoreValue(value)
    }
}


function writeAndStoreValue(value) {
    result.textContent += value
    if (value == '+' || value == '-' || value == '*' || value == '/') {
        operator = value;
    }
    else if (operator) {
        secondNum += value;
    }
    else {
        firstNum += value;
    }
}

function deleteLastValue() {
    let newvalue = result.innerHTML.substring(0, result.textContent.length-1)
    result.textContent = newvalue
    if(secondNum != 0){
        secondNum = Math.floor(secondNum/10)
    }else if(operator){
        operator = null 
    }else {
        firstNum = Math.floor(firstNum/10)
    }
}

function clear() {
    result.textContent = '';
    firstNum = 0;
    secondNum = 0;
    operator = null
}

function calculateResult(fNum, sNum, operator) {

    switch (operator) {
        case '+':
            res = Number(fNum) + Number(sNum);
            break;

        case '-':
            res = Number(fNum) - Number(sNum);
            break;

        case '*':
            res = Number(fNum) * Number(sNum);
            break;

        case '/':
            res = Number(fNum) / Number(sNum);
    }

    result.textContent += ' = ' + res;
    firstNum = res 
    operator = null
    secondNum = 0
}
