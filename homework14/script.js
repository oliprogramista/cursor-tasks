function getNumber(n) {
    return (n += 1);
}

let idGenerator = createIdGenerator();

function* createIdGenerator() {
    let num = 0;
    while (true) {
        num = getNumber(num);
        yield num;
    }
} 

console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);