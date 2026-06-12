// Вводиться назва продукту, ціна одиниці та
//  кількість для 2-х видів товарів. Вивести чек про купівлю.

type Receipt = {
    productName: string | null,
    productPrice: number | null,
    productQuantiny: number | null
}
let productName:string | null = prompt("Enter name of the product")
let productPrice:number | null = Number(prompt("Enter price of the product"))
let productQuantiny:number | null = Number(prompt("Enter price of the product"))

const receipt1:Receipt = {
    productName: productName,
    productPrice: productPrice,
    productQuantiny: productQuantiny
}
console.log(receipt1);

let productName2:string | null = prompt("Enter name of the product")
let productPrice2:number | null = Number(prompt("Enter price of the product"))
let productQuantiny2:number | null = Number(prompt("Enter price of the product"))

const receipt2:Receipt = {
    productName: productName2,
    productPrice: productPrice2,
    productQuantiny: productQuantiny2
}
console.log(receipt2);