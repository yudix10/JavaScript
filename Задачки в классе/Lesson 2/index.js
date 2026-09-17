//-----------------------------------------------------------------------------------------//
// // Task 1
// "use strict"

// let lenArr = 10
// let arr = []

// for (let i = 0; i<lenArr; i++) {
//     arr.push(Math.floor(Math.random() * (100-50)) + 1)
// }
// console.log(arr);

// function getErger(arr, n) {           //splice(): добавляет, удаляет или заменяет элементы из любой части массива
//     arr.splice(n-1, 1)
//     return arr              // возвращаем массив
// }
// console.log(getErger(arr, 3));

//-----------------------------------------------------------------------------------------//

// Task 2
"use strict"

let lenArr = 10
let arr = []

for (let i = 0; i<lenArr; i++) {
    arr.push(Math.floor(Math.random() * (10-1)) + 1)
}
console.log(arr);

function TAsk2(arr){
    for (let k = 0; k< arr.length - 1; k++){
        if (arr[k] == arr[k+1]) {
            return true                                 //проверка на 2 эл-та совпадают)
        }
    }
    
    return false
}

console.log(TAsk2(arr));

//-----------------------------------------------------------------------------------------//

// // Task 3
// "use strict"

// let lenArr = 10
// let arr = []

// for (let i = 0; i<lenArr; i++) {
//     arr.push(Math.floor(Math.random() * (100-10)) + 1)
// }
// console.log(arr);

// function TASK3(arr) {                            //filter(): возвращает массив по условию
//     return arr.filter(function(number){
//         return number % 5 != 0                  //e,bhftv dct числа, кратные 5.
//     })
// }
// console.log(TASK3(arr));

//-----------------------------------------------------------------------------------------//

// // Task 4
// "use strict"

// let lenArr = 10
// let arr = []

// for (let i = 0; i<lenArr; i++) {
//     arr.push(Math.floor(Math.random() * (20-10)) + 1)
// }
// console.log(arr);

// function TASk4()

// console.log(TASk4(arr));

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