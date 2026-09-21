// Task 4
x = parseFloat(prompt("Введите x:"));
let result = x - 10 * Math.sin(x) + Math.abs(x**4 - x**5);
console.log(`Значение выражения: ${result}`);