
const add = (a, b) => {
    return a + b;
};

const subtract = (a, b) => {
    return a - b;
};

const multiply = (a, b) => {
    return a * b;
};

const divide = (a, b) => {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }

    return a / b;
};

const calculate = (a, b, operationCallback) => {
    return operationCallback(a, b);
};

const num1 = 20;
const num2 = 10;

console.log("Addition:", num1, "+", num2, "=", calculate(num1, num2, add));

console.log("Subtraction:", num1, "-", num2, "=", calculate(num1, num2, subtract));

console.log("Multiplication:", num1, "*", num2, "=", calculate(num1, num2, multiply));

console.log("Division:", num1, "/", num2, "=", calculate(num1, num2, divide));

// Testing division by zero
console.log("Division by zero:", calculate(20, 0, divide));
