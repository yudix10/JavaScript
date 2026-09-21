// Task 8
a = parseFloat(prompt("Введите результат первого спортсмена:"));
b = parseFloat(prompt("Введите результат второго спортсмена:"));
c = parseFloat(prompt("Введите результат третьего спортсмена:"));
let best = Math.min(a, b, c);
console.log(`Лучший результат: ${best}. Это результат победителя заплыва.`);