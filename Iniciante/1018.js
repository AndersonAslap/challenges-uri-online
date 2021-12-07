let input = require("fs").readFileSync("stdin", "utf8");

let money_all = parseInt(input);

let [ballots_hundred, money]     = [parseInt(money_all/100), money_all - parseInt(money_all/100) * 100];
let [ballots_fifty, money2]      = [parseInt(money/50), money - parseInt(money/50) * 50];
let [ballots_twenty, money3]     = [parseInt(money2/20), money2 - parseInt(money2/20) * 20];
let [ballots_ten, money4]        = [parseInt(money3/10), money3 - parseInt(money3/10) * 10];
let [ballots_five, money5]       = [parseInt(money4/5), money4 - parseInt(money4/5) * 5];
let [ballots_two, money6]        = [parseInt(money5/2), money5 - parseInt(money5/2) * 2];
let [ballots_one, money7]        = [parseInt(money6/1), money6 - parseInt(money6/1) * 1];

console.log(`${parseInt(input)}`);
console.log(`${ballots_hundred} nota(s) de R$ 100,00`);
console.log(`${ballots_fifty} nota(s) de R$ 50,00`);
console.log(`${ballots_twenty} nota(s) de R$ 20,00`);
console.log(`${ballots_ten} nota(s) de R$ 10,00`);
console.log(`${ballots_five} nota(s) de R$ 5,00`);
console.log(`${ballots_two} nota(s) de R$ 2,00`);
console.log(`${ballots_one} nota(s) de R$ 1,00`);