// Вводиться номер місяця або назва місяця. 
// Створити функцію, яка повинна повертати 
// номер пори року (1-4) якщо передаємо число,
//  або назву пори року, якщо було введено назву місяця.
//   Використати перевантаження функцій.



type Season = {
    winter: { months: number[], names: string[] },
    spring: { months: number[], names: string[] },
    summer: { months: number[], names: string[] },
    autumn: { months: number[], names: string[] }
}
const season: Season = {
    winter: { months: [12, 1, 2], names: ["грудень", "січень", "лютий"] },
    spring: { months: [3, 4, 5], names: ["березень", "квітень", "травень"] },
    summer: { months: [6, 7, 8], names: ["червень", "липень", "серпень"] },
    autumn: { months: [9, 10, 11], names: ["вересень", "жовтень", "листопад"] }
};

function getSeason(month: number): number;
function getSeason(month: string): string;
function getSeason(month: number | string): number | string {
    if (typeof month === "number") {
        if (season.winter.months.indexOf(month) !== -1) return 1;
        if (season.spring.months.indexOf(month) !== -1) return 2;
        if (season.summer.months.indexOf(month) !== -1) return 3;
        if (season.autumn.months.indexOf(month) !== -1) return 4;
    }
    
    if (typeof month === "string") {
        if (season.winter.names.indexOf(month) !== -1) return "winter";
        if (season.spring.names.indexOf(month) !== -1) return "spring";
        if (season.summer.names.indexOf(month) !== -1) return "summer";
        if (season.autumn.names.indexOf(month) !== -1) return "autumn";
    }
    
    throw new Error("Невірний місяць");
}