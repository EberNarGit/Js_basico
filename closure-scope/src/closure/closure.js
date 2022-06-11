const moneyBox = (coins) => {
    var saveCoins = 0;
    saveCoins += coins;
    console.log(`Moneybox: $${saveCoins}`);
}

moneyBox(30);
moneyBox(40);


const moneybox = () => {
    var saveCoins = 0;
    const countCoins = (coins) => {
        saveCoins += coins;
        console.log(`Moneybox: $${saveCoins}`);
    }
    return countCoins;
}

let MyMoneyBox = moneybox();
MyMoneyBox(50);
MyMoneyBox(20);
MyMoneyBox(20);
MyMoneyBox(10);
MyMoneyBox(100);