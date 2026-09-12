// Task 3
let x = parseInt(prompt("Введите трехзначное число x:"));
let prod = 1;
for (let char of String(x)) {
    prod *= parseInt(char);
}
if (prod < 10) {
    console.log(`Произведение цифр равно ${prod} и оно является однозначным числом`);
} else {
    console.log(`Произведение цифр равно ${prod} и оно является двузначным числом`);
}