"use strict";
// Вводиться назва продукту, ціна одиниці та
//  кількість для 2-х видів товарів. Вивести чек про купівлю.
let productName = prompt("Enter name of the product");
let productPrice = Number(prompt("Enter price of the product"));
let productQuantiny = Number(prompt("Enter price of the product"));
const receipt1 = {
    productName: productName,
    productPrice: productPrice,
    productQuantiny: productQuantiny
};
console.log(receipt1);
let productName2 = prompt("Enter name of the product");
let productPrice2 = Number(prompt("Enter price of the product"));
let productQuantiny2 = Number(prompt("Enter price of the product"));
const receipt2 = {
    productName: productName2,
    productPrice: productPrice2,
    productQuantiny: productQuantiny2
};
console.log(receipt2);
