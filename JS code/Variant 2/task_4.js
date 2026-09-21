// Task 4
x = parseFloat(prompt("Введите x:"));
let y = parseFloat(prompt("Введите y:"));
let result = (3 + Math.exp(y - 1)) / (1 + x**2 * Math.abs(y - Math.tan(x)));
console.log(`Значение выражения: ${result}`);