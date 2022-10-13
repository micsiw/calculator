const displayScreen = document.querySelector(".display");
const buttonMultiply = document.getElementById("multiply");
const buttonDivide = document.getElementById("divide");
const buttonEquals = document.getElementById("equals");
const buttonClear = document.getElementById("clear");
const buttonSubtract = document.getElementById("subtract");
const buttonAdd = document.getElementById("add");
const buttonDecimal = document.getElementById("decimal");
const buttonBackspace = document.getElementById("backspace");
const button_1 = document.getElementById("b1");
const button_2 = document.getElementById("b2");
const button_3 = document.getElementById("b3");
const button_4 = document.getElementById("b4");
const button_5 = document.getElementById("b5");
const button_6 = document.getElementById("b6");
const button_7 = document.getElementById("b7");
const button_8 = document.getElementById("b8");
const button_9 = document.getElementById("b9");
const button_0 = document.getElementById("b0");

let display = "";

buttonMultiply.addEventListener("click", () => {

    const arrayFromDisplay = display.split(" ");

    if (arrayFromDisplay.length === 3) {
        evaluate();
        display += " * "
    } else if (display === "") {
        display = ""
    } else {
        display += " * "
    }

    displayScreen.textContent = display;

});

buttonDivide.addEventListener("click", () => {

    const arrayFromDisplay = display.split(" ");

    if (arrayFromDisplay.length === 3) {
        evaluate();
        display += " / "
    } else if (display === "") {
        display = ""
    } else {
        display += " / "
    }

    displayScreen.textContent = display;

});

buttonEquals.addEventListener("click", (evaluate))


buttonClear.addEventListener("click", () => {

    display = ""
    displayScreen.textContent = display;

});

buttonSubtract.addEventListener("click", () => {

    const arrayFromDisplay = display.split(" ");

    if (arrayFromDisplay.length === 3) {
        evaluate();
        display += " - "
    } else if (display === "") {
        display = ""
    } else {
        display += " - "
    }

    displayScreen.textContent = display;

});

buttonAdd.addEventListener("click", () => {

    const arrayFromDisplay = display.split(" ");

    if (arrayFromDisplay.length === 3) {
        evaluate();
        display += " + "
    } else if (display === "") {
        display = ""
    } else {
        display += " + "
    }

    displayScreen.textContent = display;

});

buttonDecimal.addEventListener("click", () => {

    const arrayFromDisplay = display.split("");
    const positionOfOperator = arrayFromDisplay.indexOf(" ")
    const firstNumber = arrayFromDisplay.slice(0, positionOfOperator)
    const secondNumber = arrayFromDisplay.slice(positionOfOperator + 3)

    if (arrayFromDisplay[arrayFromDisplay.length - 1] === " " || display === "") {
        display += "0."
    } else if (firstNumber.includes(".")) {
        if (secondNumber.includes(".")) {
        return
    } else {
        display += ".";
    }
    } else {
        display += "."
    }

    displayScreen.textContent = display;

});

buttonBackspace.addEventListener("click", () => {

    let deleted = display.slice(-1);
    
    if (deleted === " ") {
        display = display.slice(0, -3)
    } else {
        display = display.slice(0, -1)
    }

    displayScreen.textContent = display;

});

button_1.addEventListener("click", () => {

    display += "1";
    displayScreen.textContent = display;

});

button_2.addEventListener("click", () => {

    display += "2";
    displayScreen.textContent = display;

});

button_3.addEventListener("click", () => {

    display += "3";
    displayScreen.textContent = display;

});

button_4.addEventListener("click", () => {

    display += "4";
    displayScreen.textContent = display;

});

button_5.addEventListener("click", () => {

    display += "5";
    displayScreen.textContent = display;

});

button_6.addEventListener("click", () => {

    display += "6";
    displayScreen.textContent = display;

});

button_7.addEventListener("click", () => {

    display += "7";
    displayScreen.textContent = display;

});

button_8.addEventListener("click", () => {

    display += "8";
    displayScreen.textContent = display;

});

button_9.addEventListener("click", () => {

    display += "9";
    displayScreen.textContent = display;

});

button_0.addEventListener("click", () => {

    display += "0";
    displayScreen.textContent = display;

});


function add (a, b) {

    display = round((a + b), 8).toString();
    displayScreen.textContent = display

}

function subtract (a, b) {

    display = round((a - b), 8).toString();
    displayScreen.textContent = display

}

function multiply (a, b) {

    display = round((a * b), 8).toString();
    displayScreen.textContent = display

}

function divide (a, b) {

    if (b === 0) {
        alert("You can't divide by zero.");
        window.location.reload();
    } else {
        display = round((a / b), 8).toString();
    }

    displayScreen.textContent = display

}

function operate (a, operator, b) {

    switch (operator) {
        case "+":
            add (a, b);
            break;
        case "-":
            subtract (a, b);
            break;
        case "*":
            multiply (a, b);
            break;
        case "/":
            divide (a, b)
            break;
        default: break;
    }

}

function evaluate () {

    const arrayFromDisplay = display.split(" ");
    
    let a = parseFloat(arrayFromDisplay[0])
    let operator = arrayFromDisplay[1]
    let b = parseFloat(arrayFromDisplay[2])

    if (isNaN(b)) {
        arrayFromDisplay.splice(2)
        display = display.slice(0, -3);
    } else {
        operate(a, operator, b)
    }
    
}

/* decimals = how many decimal places to return */

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
  }