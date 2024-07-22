var prompt = require('prompt-sync')();
//
// get input from the user.
//

const SYMBOL_CONT = {
    A: 2,
    B: 5,
    C: 7,
    D: 80
};

const SYMBOL_VAL = {
    A: 10,
    B: 8,
    C: 3,
    D: 2
};

const ROWS = 3;
const COLS = 3;

const spin = () => {
    const array = [];
    for (const [symbol, count] of Object.entries(SYMBOL_CONT)) {
        for (let i = 0; i < count; i++) {
            array.push(symbol);
        }
    }
    const reals = [[], [], []]

    for (let i = 0; i < COLS; i++) {
        const arr = [...array]
        for (let j = 0; j < ROWS; j++) {
            const a = Math.floor(Math.random() * arr.length)
            const sym = arr[a]
            reals[i].push(sym);
            arr.splice(a,1)
        }
    }
    return reals;
};

const transporse = (pdden) =>{
    const rows = [[],[],[]]
    for (let i = 0; i < COLS; i++) {
        for (let j = 0; j < ROWS; j++) {
            rows[i].push(pdden[j][i])
        }
    }
        return rows;
};

const printrows = (rows) => {
    for(const row of rows){
        let string = "";
        for(const [i,symbol] of row.entries()){
            string += symbol;
            if(i != row.length-1){
                string += " | "
            }
        }
        console.log(string)
    }
};


const getWinings = (rows , riskAmount) => {
    let winings = 0;
    let a = 0;
    for(let i=0;i<rows.length;i++){
        const symbols = rows[i]
        let flag = true;
        for(let symbol of symbols){
            if(symbol != symbols[0]){
                flag = false;
                break;
            }
        }
        if(flag){
            winings += riskAmount;
        }
    }
    return winings;
    
};


const deposit = () => {
    while (true) {
        var n = prompt('amount to be deposited: ');

        const number = parseFloat(n);
        if (isNaN(number) || number <= 0) {
            console.log('try again')
        } else {
            return number
        }
    }
};



const bet = () => {
    while (true) {
        var n = prompt('total lines for bett: ');

        const bettingAmount = parseFloat(n);
        if (isNaN(bettingAmount) || bettingAmount <= 0 || bettingAmount > 3) {
            console.log('try again')
        } else {
            return bettingAmount;
        }
    }
};



const betmoney = () => {
    while (true) {
        var n = prompt('amount for bet: ');

        const betAmount = parseFloat(n);

        if (isNaN(betAmount) || betAmount <= 0 || betAmount * betline > depositAmount) {
            console.log('try again')
        } else {
            return betAmount * betline;
            }
        }
};

// const gettotal = () => {
//     return depositAmount;
// }




let depositAmount = deposit();
const betline = bet();
const riskAmount = betmoney();
const pdden = spin();
const trarray = transporse(pdden);
printrows(trarray);
const credited = getWinings(trarray,riskAmount);
console.log(riskAmount)
console.log(credited)
// const money = gettotal();
// console.log((money))


