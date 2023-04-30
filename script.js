let displayScreen = document.querySelector(".calculator_display");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let integers = document.querySelectorAll(".integer");

let operators = document.querySelectorAll(".operator");

integers.forEach(integer => {
    integer.addEventListener("click", () => {
        if (operator === ""){
            firstNumber = firstNumber + integer.value;
            displayScreen.textContent = firstNumber;
            oldText = displayScreen.textContent;
        }
        else{
            secondNumber = secondNumber + integer.value;
            displayScreen.textContent = oldText + secondNumber;
        }
    })
})


operators.forEach(operator_sign => {
    operator_sign.addEventListener("click", () => {
        operator = operator_sign.value;
        displayScreen.textContent = oldText + operator;
        oldText = displayScreen.textContent;
    })

})