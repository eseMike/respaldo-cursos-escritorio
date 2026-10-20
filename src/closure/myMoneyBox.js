// function moneyBox(coins) {
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins} saving`);
// }

// moneyBox(5);


// function moneyBox() {
//     let saveCoins = 0;

//     function countCoins(coins) {
//         saveCoins += coins;
//         console.log(`MoneyBox: $${saveCoins}`);
//     }
//     return countCoins;
// }

// const myMoneyBox = moneyBox()
// myMoneyBox(10);
// myMoneyBox(5);

// const moneyBoxAna = moneyBox();
// moneyBoxAna(19);
// moneyBoxAna(20);


function cinicosSinceros() {

    let integrantes = [];
    return function(int) {
        if (int) {
            integrantes.push(int)
        }
        return integrantes
    }
    return integrantes
}