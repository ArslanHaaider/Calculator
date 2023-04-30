let displayScreen = document.querySelector(".calculator_display");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let integers = document.querySelectorAll(".integer");

// let operators = document.querySelectorAll(".operator");

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


