// Task 6
n = parseInt(prompt("Введите n:"));
let prod = 1.0;
for (let i = 1; i <= n; i++) {
    prod *= 1 / i;
}
console.log(`Значение выражения: ${prod}`);