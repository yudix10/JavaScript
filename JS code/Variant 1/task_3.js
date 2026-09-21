// Task 3
let x = parseInt(prompt("Введите трехзначное число x:"));
let sum = 0;
for (let char of String(x)) {
    sum += parseInt(char);
}
if (sum % 2 === 0) {
    console.log(`Сумма цифр равна ${sum} и она является четным числом`);
} else {
    console.log(`Сумма цифр равна ${sum} и она является нечетным числом`);
}