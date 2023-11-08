let currNum1 = "";
let currNum2 = "";
let currOperator = "";


const displayValue = document.getElementById("displayScreen");
const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
    button.addEventListener("click", function() {
        let value = button.textContent;

        if(!isNaN(value) || value ===".") {
            currNum1 += value;
            setDisplay(currNum1);
        } else if(value === "CLEAR"){
            clear();
            
        }
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

}



function setDisplay(item) {
    displayValue.value = item;
}


function clear() {
    currNum1 = "";
    currNum2 = "";
    currOperator = "";
    displayValue.value = "";
}