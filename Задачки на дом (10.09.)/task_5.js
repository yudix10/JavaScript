// //5. Написать функцию, которая переводит целое число из десятичной системы счисления в шестнадцатеричную, 
// используя алгоритм деления на 16 (задачу решить без использования встроенных функций). 
// При решении задачи использовать оператор switch.

function getHexDigit(n) {// функция для получения шестнадцатеричной цифры по её десятичному значению
    switch (n) {
        case 0: return "0";
        case 1: return "1";
        case 2: return "2";
        case 3: return "3";
        case 4: return "4";
        case 5: return "5";
        case 6: return "6";
        case 7: return "7";
        case 8: return "8";
        case 9: return "9";
        case 10: return "A";
        case 11: return "B";
        case 12: return "C";
        case 13: return "D";
        case 14: return "E";
        case 15: return "F";
    }
}

function decimalToHex(n) {
    if (n === 0) {
        return "0";
    }

    let result = "";

    while (n > 0) {
//------------------------------------//
    }

    return result;
}

let n = Number(prompt("Введите целое число:"));

if (n < 0) {
    console.log();
} else {
    console.log(decimalToHex(n));
}