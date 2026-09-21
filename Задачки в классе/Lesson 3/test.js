//-----------------------------------------------------------------------------------------//
// Task 1
"use strict"
function Task1(){
    let n = Number(prompt("введите кол-во эелементов"))
    let arr = []

    for (let i = 0; i<n; i++) {
        arr.push(Math.floor(Math.random() * 21) - 10) // создаем массив 21 потому что от (-10 до 10)
    }
    let sum = arr.reduce((a,b) => a + b, 0) // находим сумму
    let average = sum / n                   // находим среднее арифметическое
    let result = arr.filter(x => Math.abs(x) > average) // находим кол-во элементов, значение которых больше ср. арифм.массива

    console.log("Массив", arr)                  // |
    console.log("Ср. арифметич", average)       // | Вывод массива, ср. арифм., Кол-ва чисел в массиве
    console.log("Кол-во", result.length)        // | 

    return result.length //(Возвращаем кол-во найд. эл.)
}

Task1()
//-----------------------------------------------------------------------------------------//

// // Task 2
// "use strict"


// console.log(TAsk2());

//-----------------------------------------------------------------------------------------//

// // Task 3
// "use strict"

// console.log(TASK3(arr));

//-----------------------------------------------------------------------------------------//

// Task 4
"use strict"

function TASk4(){
    let n = Number(prompt("Введите кол-во элеметов"))
    arr 1 = []
    arr 2 = []

    for (let i = 0; i<n; i++) {
        arr1.push(Math.floor(Math.random() * 10) + 1)
        arr2.push(Math.floor(Math.random() * 10) + 1)
    }
    for (let i = 0;)
}

console.log(TASk4(arr));

//-----------------------------------------------------------------------------------------//

// // Task 5
// "use strict"

// let lenArr1 = 3
// let arr1 = []

// for (let i = 0; i<lenArr1; i++) {
//     arr1.push(Math.floor(Math.random() * (-100-10)) + 1)
// }
// console.log(arr1);

// let lenArr2 = 5
// let arr2 = []

// for (let i = 0; i<lenArr2; i++) {
//     arr2.push(Math.floor(Math.random() * (1000-10)) + 1)
// }
// console.log(arr2);

// function TAsk5(arr1,arr2) {          // sort^ возвращает отсортированный массив

//     arr1.sort(function(a,b) {                   //|
//         return a-b                              //|
//     })                                          //|   // сортирует их по возрастанию как в в кдассной работе
//                                                 //|
//     arr2.sort(function(a,b) {                   //|
//         return a-b                              //|
//     })

//     let result = arr1.concat(arr2)      //concat(): копирует элементы нескольких массивов и сооед их
    
//     return result
// }

// console.log(TAsk5(arr1,arr2));