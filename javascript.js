const validOperators = ["+", "*", "/", "-"];
let currNum1 = "";
let result = 0;
let currOperator = "";


const displayValue = document.getElementById("displayScreen");
const buttons = document.querySelectorAll("button");


buttons.forEach((button) => {
    button.addEventListener("click", function() {
        buttonClicked(button.textContent);    
    });
});


function add(num1, num2) {
    return num1+num2;
}


function subtract(num1, num2) {
    return num1-num2;
}


function multiply(num1,num2) {
    return num1*num2;
}


function divide(num1,num2) {
    if(num2 === 0) {
        return "idiot";
    } else {
        return num1/num2;
    }
    
}

function operate(num1, num2, operate) {
    switch(operate) {
        case "+": 
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
    }
}



function setDisplay(item) {
    displayValue.value = item;
}


function clear() {
    currNum1 = "";
    result = 0;
    currOperator = "";
    displayValue.value = "";
}


function buttonClicked(value) {

    if(value === "CLEAR") {clear(); return;} 

    //If value is a number, add it to current number
    if(!isNaN(value) || value ===".") {
        currNum1 += value;
        setDisplay(currNum1);

    }  else if (validOperators.includes(value)){
        currOperator = value;
        setDisplay(currOperator);
        result = currNum1;
        currNum1 = "";
    } else {
        if(currNum1==="") {return};
        setDisplay(operate(parseInt(result),parseInt(currNum1),currOperator));
    }
}