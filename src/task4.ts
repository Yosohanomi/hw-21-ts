// Створити функцію, яка дозволяє знайти
//  або останню цифру числа, або останній символ числа.

function getLast(input: number | string): string {
    let str = String(input);
    return str[str.length - 1];
}

console.log(getLast(12345));   
console.log(getLast("Hello"));  