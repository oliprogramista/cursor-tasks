//масив випадкових чисел
function getRandomArray(length, min, max) {
    let arr = [];
    for (let i = 0; i < length; i++) {
        arr.push(Math.floor(Math.random() * (max - min) + min));
    }
    return arr;
}
const getArray = getRandomArray(15, 1, 100);
//середнє арифметичне чисел заданих як параметри
function getAverage(...numbers) {
    const result = numbers.filter(x => Number.isInteger(x));
    let element = 0;
    for (let index = 0; index < result.length; index++) {
        element += result[index];
    }
    return element/result.length;
}
console.log(getAverage(1, 5, 10, 12));
//вибрати парні числа
function filterEvenNumbers(...numbers){
    let evenNumbers = numbers.filter(x => !(x%2));
    return evenNumbers;
}
console.log(filterEvenNumbers(1, 5, 6, 8, 9, 10));
//числа, які діляться на 5
function getDividedByFive(...numbers) {
    let divideFive = numbers.filter(x => Number.isInteger(x/5));
    return divideFive;
}
console.log(getDividedByFive(5, 10, 36, 58, 70));

function countPositiveNumbers(...numbers){
    const positive = numbers.filter(x => (x >= 0));
    return positive.length;
}
console.log(countPositiveNumbers(-5, 3, -7, -9, 8));