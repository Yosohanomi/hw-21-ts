"use strict";
// У localStorage зберігається об’єкт
//  у форматі JSON з ключем «data».
//   Проаналізувати значення поля «field2».
//    Якщо рядок – то вивести довжину, 
//    якщо число – то визначити чи є парним.
let data = localStorage.getItem("data");
if (data) {
    let obj = JSON.parse(data);
    let f = obj.field2;
    if (typeof f === "string") {
        console.log(f.length);
    }
    if (typeof f === "number") {
        if (f % 2 === 0) {
            console.log("парне");
        }
        else {
            console.log("непарне");
        }
    }
}
