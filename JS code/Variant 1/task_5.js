// Task 5
let n = parseInt(prompt("Введите n:"));
let resultArray = [];
for (let i = 1; i < 2 * n; i += 2) {
    resultArray.push(i);
}
console.log(`Первые ${n} нечетных чисел: ${resultArray.join(" ")}`);