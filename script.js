const userInput = document.getElementById("user-input");
const addBtn = document.getElementById("add-btn");
const subtractBtn = document.getElementById("subtract-btn");
const multiplyBtn = document.getElementById("multiply-btn");
const divideBtn = document.getElementById("divide-btn");

const calculationHistory = document.getElementById("calculation-history");
const resultOutput = document.getElementById("result");

const defaultInputValue = 0;
let currentInputValue = defaultInputValue;

function outputResult(history, result) {
    calculationHistory.textContent = history;
    resultOutput.textContent = result;
}

function inputValueParsing() {
    return parseInt(userInput.value);
}

function addition() {
    const inputParsedValue = inputValueParsing();
    const inputHistory = `${currentInputValue} + ${inputParsedValue}`;
    currentInputValue = currentInputValue + inputParsedValue;
    outputResult(inputHistory, currentInputValue);
}

addBtn.addEventListener("click", addition);
