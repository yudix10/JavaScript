// Task 5
let n = parseInt(prompt("Введите n:"));
let resultArray = [];
for (let i = 1; i <= n; i++) {
    resultArray.push(i**3);
}
console.log(`Первые ${n} кубов натуральных чисел: ${resultArray.join(" ")}`);