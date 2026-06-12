// Згенерувати масив нагород 
// (золота, срібна, бронзова медалі та грамота).
//  Підрахувати кількість кожної з нагород.
//  Використати enum. Можна і never якось застосувати

enum Award {
    Gold = "золота",
    Silver = "срібна",
    Bronze = "бронзова",
    Certificate = "грамота"
}

let gold:number = 0;
let silver:number = 0;
let bronze:number = 0;
let certificate:number = 0;

const allAwards = [Award.Gold, Award.Silver, Award.Bronze, Award.Certificate];

const awards: Award[] = [];
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
            const _exhaustiveCheck: never = award;
    }
}

console.log(`Золота: ${gold}`);
console.log(`Срібна: ${silver}`);
console.log(`Бронзова: ${bronze}`);
console.log(`Грамота: ${certificate}`);