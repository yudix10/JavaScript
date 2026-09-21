// Task 3
let x = parseInt(prompt("Введите четырехзначное число x:"));
let prod = 1;
for (let char of String(x)) {
    prod *= parseInt(char);
}
if (prod % 2 === 0) {
    console.log(`Произведение цифр равно ${prod} и оно является четным числом`);
} else {
    console.log(`Произведение цифр равно ${prod} и оно является нечетным числом`);
}