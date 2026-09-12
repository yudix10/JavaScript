// Task 5
let n = parseInt(prompt("Введите n:"));
let resultArray = [];
for (let i = 1; i <= n; i++) {
    resultArray.push(i**2);
}
console.log(`Первые ${n} квадратов натуральных чисел: ${resultArray.join(" ")}`);