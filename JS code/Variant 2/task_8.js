// Task 8
let cost = parseFloat(prompt("Введите стоимость книг:"));
let paid = parseFloat(prompt("Введите внесенную сумму:"));
if (paid < cost) {
    console.log(`Недостаточно денег. Не хватает: ${cost - paid}`);
} else if (paid === cost) {
    console.log("Спасибо");
} else {
    console.log(`Возьмите сдачу: ${paid - cost}`);
}