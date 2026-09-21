// Task 6
n = parseInt(prompt("Введите n:"));
let totalSum = 1.0;
for (let i = 2; i <= n; i++) {
    totalSum -= 1 / i;
}
console.log(`Значение выражения: ${totalSum}`);