const helloWorld = () => {
    const hello = 'Hola mundo';
    console.log(hello);
};

helloWorld();

var scoope = 'i am global';

const functionScoope = () => {
    var scoope = 'i am just a global';
    const func = () => {
        return scoope;
    }
    console.log(func());
}

functionScoope();