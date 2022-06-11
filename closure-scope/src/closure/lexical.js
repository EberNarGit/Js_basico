const buildcount = (i) => {
    let count = i;
    const displayCount = () => {
        console.log(count++);
    };
    return displayCount;
}

const MyCount = buildcount(1);
MyCount();
MyCount();
MyCount();

const myOtherCount = buildcount(10);
myOtherCount();
myOtherCount();
myOtherCount();
