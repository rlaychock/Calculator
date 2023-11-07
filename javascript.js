let currNum1
let currNum2
let currOperator 

//1
function add(num1, num2) {
    return num1+num2;
}

//2
function subtract(num1, num2) {
    return num1-num2;
}

//3
function multiply(num1,num2) {
    return num1*num2;
}

//4
function divide(num1,num2) {
    if(num2 === 0) {
        return "idiot";
    } else {
        return num1/num2;
    }
    
}

function operate(num1, num2, operate) {
   switch (operate) {
        case 1:
            add(num1,num2);
            break;
        case 2:
            subtract(num1,num2);
            break;
        case 3:
            multiply(num1,num2);
            break;
        case 4: 
            divide(num1,num2);
            break;
   } 
}

