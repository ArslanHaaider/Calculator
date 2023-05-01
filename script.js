let displayScreen = document.querySelector(".calculator_display");

let firstNumber = "";
let secondNumber = "";
let operator = "";
let integers = document.querySelectorAll(".integer");
let Result = "";
let operators = document.querySelectorAll(".operator");

//Select all integers and add event listeners to them.
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

//Select all operators  buttons and add event listeners to them.
operators.forEach(operator_button => {
    operator_button.addEventListener("click", () => {
        operator = operator_button.value;
        displayScreen.textContent = oldText + operator;
        oldText = displayScreen.textContent;
    })

})

//Equals button event listener to calculate equation
let equals = document.querySelector(".equal");

equals.addEventListener("click", () => {
    switch(operator){
        case  "+":
            result = Number(firstNumber) + Number(secondNumber);
            displayScreen.textContent = result;
            break;
        case "-":
            result = Number(firstNumber) - Number(secondNumber);
            displayScreen.textContent = result;
            break;
        case "*":
            result = Number(firstNumber) * Number(secondNumber);
            displayScreen.textContent = result;
            break;
        case "/":
            if(secondNumber === "0"){
                displayScreen.textContent = "Cannot divide by zero 😢";
                break
            }
            result = Number(firstNumber) / Number(secondNumber);
            displayScreen.textContent = result;
            break;
        case "%":
            result = Number(firstNumber) % Number(secondNumber);
            displayScreen.textContent = result;
        default:
    }
})

//Clear button event listener

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    displayScreen.textContent = "Lets do some Math!"
    firstNumber = ""
    secondNumber = ""
    operator = ""
    oldText = ""
})



//Backspace button event listener

let backspace = document.querySelector(".backspace");
backspace.addEventListener("click", () => {
    if(secondNumber.length>0){
        secondNumber = secondNumber.slice(0, -1);
        displayScreen.textContent = oldText + secondNumber;
    }
    else if(operator.length>0){
        operator = "";
        oldText = oldText.slice(0, -1);
        displayScreen.textContent = oldText;
    }
    else if(firstNumber.length>0){
        firstNumber = firstNumber.slice(0, -1);
        displayScreen.textContent = firstNumber;
    }
    else if(displayScreen.textContent.length==0){
        displayScreen.textContent = "Lets do some Math!"
    }
})


//Float Answer 

let floatAnswer = document.querySelector(".answer_float");

floatAnswer.addEventListener("click", () => {
    displayScreen.textContent = result.toFixed(2);
})



