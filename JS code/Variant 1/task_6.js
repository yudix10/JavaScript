// Task 6
n = parseInt(prompt("Введите n:"));
let totalSum = 0;
for (let i = 1; i <= n; i++) {
    totalSum += 1 / i;
}
console.log(`Сумма ряда: ${totalSum}`);