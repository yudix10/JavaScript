// Task 3
let x = parseInt(prompt("Введите четырехзначное число x:"));
let sum = 0;
for (let char of String(x)) {
    sum += parseInt(char);
}
if (sum < 10) {
    console.log(`Сумма цифр равна ${sum} и она является однозначным числом`);
} else {
    console.log(`Сумма цифр равна ${sum} и она является двузначным числом`);
}