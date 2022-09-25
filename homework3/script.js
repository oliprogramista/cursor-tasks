//1
function maxNumber(number){
    if(number == 0){ 
        return 0;
        }
    else{
    return Math.max(number%10, maxNumber(number/10));
    }
}
//2
function PowerOfNumber(b,e){
    var pow = 1;
    for(var i=1; i<=e; i++){
        pow = pow*b;
    }
    return pow;
}
//3
function capitalizeFirstLetter(text) {
    let textLow = text.charAt(0).toUpperCase() + text.slice(1, text.length).toLowerCase();
    return textLow; 
}
//4
function getPaid(salary) {
    const calculateSalary = salary - salary*0.195 
    return calculateSalary
}
//6 
function countLetter(word, letter){
    let str = word.toLowerCase();
    let letterLower = letter.toLowerCase();
    let pos = -1;
    let times = 0;
    while ((pos = str.indexOf(letterLower, pos + 1)) != -1) {
    times += 1;
}
    return times;
}
//9
function deleteLetters (letter, word) {
    return word.replaceAll(letter, '');
}
//output
document.writeln ("Функція №1: " + maxNumber(73489) + '<br/>');
document.writeln("Функція №2: " + PowerOfNumber(3, 5) + '<br/>');
document.writeln("Функція №3: " + capitalizeFirstLetter('spAin') + '<br/>');
document.writeln("Функція №4: " + getPaid(1000) + '<br/>');
document.writeln("Функція №6: " + countLetter('Асталавіста', 'а') + '<br/>');
document.writeln("Функція №9: " + deleteLetters('a', 'blablabla') + '<br/>');