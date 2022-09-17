let numberN;
do {
    numberN = prompt ("Введіть число N", 0);
    numberN = Number(numberN);
}
while (isNaN(numberN));
alert( 'Окі, число прийнято');
if (Number.isInteger(numberN)) {
    alert ('Число ціле');
} else {
    alert ('Число неціле'); 
}
document.writeln ('Число N: '+numberN+'</b> <br></br>');
let numberM;
number = Number(numberM);
do {
    numberM = prompt("Введіть число M, але більше за N", 0);
    numberM = Number(numberM);
}
while (isNaN(numberM)|| numberM < numberN);
alert( 'Окі, число прийнято');
if (Number.isInteger(numberM)) {
    alert ('Число ціле');
} else {
    alert ('Число неціле'); 
}
document.writeln ('Число M: '+numberM+'</b> <br></br>');
let minusEven = confirm('Пропускати парні числа?');
let sum = 0;
for (let i = numberN; i <= numberM; i++) {
    if (i%2 || !minusEven) {
        sum += i; 
    }
}
document.writeln ('Пропускати парні числа? : '+minusEven+'</b> <br></br>');
document.writeln ('Сума чисел: '+sum);