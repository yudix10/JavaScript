// Task 2
a = parseFloat(prompt("Введите катет a:"));
b = parseFloat(prompt("Введите катет b:"));
let c_side = Math.sqrt(a**2 + b**2);
let P = a + b + c_side;
let S = 0.5 * a * b;
console.log(`Периметр: ${P}, Площадь: ${S}`);