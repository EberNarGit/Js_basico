var a = 'Hello';

function hello(){
    let b = 'Hello World';
    const c = 'Hello World!';
    if (true){
        let d = 'Hello World!!';
    }
}

hello();

const moneybox = () => {
    debugger
    var saveCoins = 0;
    const countCoins = (coins) => {
        debugger
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