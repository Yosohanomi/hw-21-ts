"use strict";
// Згенерувати масив нагород 
// (золота, срібна, бронзова медалі та грамота).
//  Підрахувати кількість кожної з нагород.
//  Використати enum. Можна і never якось застосувати
var Award;
(function (Award) {
    Award["Gold"] = "\u0437\u043E\u043B\u043E\u0442\u0430";
    Award["Silver"] = "\u0441\u0440\u0456\u0431\u043D\u0430";
    Award["Bronze"] = "\u0431\u0440\u043E\u043D\u0437\u043E\u0432\u0430";
    Award["Certificate"] = "\u0433\u0440\u0430\u043C\u043E\u0442\u0430";
})(Award || (Award = {}));
let gold = 0;
let silver = 0;
let bronze = 0;
let certificate = 0;
const allAwards = [Award.Gold, Award.Silver, Award.Bronze, Award.Certificate];
const awards = [];
for (let i = 0; i < 15; i++) {
    const randomAward = Math.floor(Math.random() * 4);
    awards.push(allAwards[randomAward]);
}
for (const award of awards) {
    switch (award) {
        case Award.Gold:
            gold++;
            break;
        case Award.Silver:
            silver++;
            break;
        case Award.Bronze:
            bronze++;
            break;
        case Award.Certificate:
            certificate++;
            break;
        default:
            const _exhaustiveCheck = award;
    }
}
console.log(`Золота: ${gold}`);
console.log(`Срібна: ${silver}`);
console.log(`Бронзова: ${bronze}`);
console.log(`Грамота: ${certificate}`);
