// Task 1
let a = parseFloat(prompt("Введите a:"));
let b = parseFloat(prompt("Введите b:"));
let c = parseFloat(prompt("Введите c:"));
if (c === 0) {
    console.log("На ноль делить нельзя!");
} else {
    console.log(Math.round(a - b / c));
}