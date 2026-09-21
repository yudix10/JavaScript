// Task 4
x = parseFloat(prompt("Введите x:"));
let result = Math.log(Math.abs(Math.cos(x))) / Math.log(1 + x**2);
console.log(`Значение выражения: ${result}`);