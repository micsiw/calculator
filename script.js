const displayScreen = document.querySelector(".display");
const buttonMultiply = document.getElementById("multiply");
const buttonDivide = document.getElementById("divide");
const buttonEquals = document.getElementById("equals");
const buttonClear = document.getElementById("clear");
const buttonSubtract = document.getElementById("subtract");
const buttonAdd = document.getElementById("add");
const button_1 = document.getElementById("1");
const button_2 = document.getElementById("2");
const button_3 = document.getElementById("3");
const button_4 = document.getElementById("4");
const button_5 = document.getElementById("5");
const button_6 = document.getElementById("6");
const button_7 = document.getElementById("7");
const button_8 = document.getElementById("8");
const button_9 = document.getElementById("9");
const button_0 = document.getElementById("0");

let display = "";

buttonMultiply.addEventListener("click", () => {

    display += "* "
    displayScreen.textContent = display;

})

buttonDivide.addEventListener("click", () => {

    display += "/ "
    displayScreen.textContent = display;

})

buttonEquals.addEventListener("click", () => {

    //------

})

buttonClear.addEventListener("click", () => {

    display = ""
    displayScreen.textContent = display;

})

buttonSubtract.addEventListener("click", () => {

    display += "- "
    displayScreen.textContent = display;

})

buttonAdd.addEventListener("click", () => {

    display += "+ "
    displayScreen.textContent = display;

})

button_1.addEventListener("click", () => {

    display += "1 ";
    displayScreen.textContent = display;

})

button_2.addEventListener("click", () => {

    display += "2 ";
    displayScreen.textContent = display;

})

button_3.addEventListener("click", () => {

    display += "3 ";
    displayScreen.textContent = display;

})

button_4.addEventListener("click", () => {

    display += "4 ";
    displayScreen.textContent = display;

})

button_5.addEventListener("click", () => {

    display += "5 ";
    displayScreen.textContent = display;

})

button_6.addEventListener("click", () => {

    display += "6 ";
    displayScreen.textContent = display;

})

button_7.addEventListener("click", () => {

    display += "7 ";
    displayScreen.textContent = display;

})

button_8.addEventListener("click", () => {

    display += "8 ";
    displayScreen.textContent = display;

})

button_9.addEventListener("click", () => {

    display += "9 ";
    displayScreen.textContent = display;

})

button_0.addEventListener("click", () => {

    display += "0 ";
    displayScreen.textContent = display;

})


function add (a, b) {

    return a + b

}

function subtract (a, b) {

    return a - b

}

function multiply (a, b) {

    return a * b

}

function divide (a, b) {

    return a / b

}

function operate (a, operator, b) {

    switch (operator) {
        case "+":
            return add (a, b);
            break;
        case "-":
            return subtract (a, b);
            break;
        case "*":
            return multiply (a, b);
            break;
        case "/":
            return divide (a, b)
            break;
        default: "woops";
    }

}


