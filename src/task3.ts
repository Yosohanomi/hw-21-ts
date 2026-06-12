// Вводиться перший номер  місяця якоїсь пори року (3,6,9,12). 
// Визначити пору року. Передбачити перевірку
//  і генерувати помилку якщо некоректний місяць (1-12)
//   і генерувати помилку 
// якщо це не перший місяць пори року. Використати never.
let month:number | null = Number(prompt("Введи число першого місяця будь якої пори року"))

function returnMonthByNum(month:number):void {
    if (month < 1 || month > 12) {
        throw new Error("Помилка: некоректний місяць");
    }
    if (month !== 3 && month !== 6 && month !== 9 && month !== 12) {
        throw new Error("Помилка: це не перший місяць пори року");
    }
    switch (month) {
        case 3:
            console.log("Spring");
            break;
        case 6:
            console.log("Summer");
            break;
        case 9:
            console.log("Autumn");
            break;
        case 12:
            console.log("Winter");
            break;
        default:
            const _exhaustiveCheck:never = month
            throw new Error("error")
    }

}

returnMonthByNum(month)