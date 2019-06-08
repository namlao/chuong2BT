function getNumber1() {
    let numberOne = document.getElementById("value1").value;
    return parseInt(numberOne);
}
function getNumber2() {
    let numberTwo = document.getElementById("value2").value;
    return parseInt(numberTwo);
}
function addition(numberOne,numberTwo) {
   document.getElementById('result').innerText = numberOne+numberTwo;
}

function subtraction(numberOne,numberTwo) {
    document.getElementById('result').innerText = numberOne-numberTwo;
}

function Multiplication(numberOne,numberTwo) {
    document.getElementById('result').innerText = numberOne*numberTwo;
}

function division(numberOne,numberTwo) {
    document.getElementById('result').innerText = numberOne/numberTwo;
}


