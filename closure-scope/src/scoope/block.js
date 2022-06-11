const fruit = () => {
    if (true){
        let fruit1 = 'apple';
        let fruit2 = 'orange';
        const fruit3 = 'banana';
        console.log(fruit1);
        console.log(fruit2);
        console.log(fruit3);
    }
}

fruit();

let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

const anotherFunction = () => {
    for(let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        }, 1000);
    }
}

anotherFunction();