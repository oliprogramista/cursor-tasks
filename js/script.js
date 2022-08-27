let priceOrange = 15.678;
document.writeln("Ціна апельсинів: " + priceOrange + "грн." + "<br/>");
let priceApple = 123.965;
document.writeln("Ціна яблук: " + priceApple + "грн." + "<br/>");
let priceTomato = 90.2345;
document.writeln("Ціна помідор: " + priceTomato + "грн." + "<br/>");

const MAX_VALUE = Math.max(priceApple, priceOrange, priceTomato);
document.writeln("Максимальне число: " + MAX_VALUE + "<br/>");
const MIN_VALUE = Math.min(priceApple, priceOrange, priceTomato);
document.writeln("Мінімальне число: " + MIN_VALUE + "<br/>");
const SUM_VALUE = [priceApple + priceOrange + priceTomato];
document.writeln("Сума трьох чисел: " + MAX_VALUE + "<br/>");

let priceOrangeFloor = Math.floor(priceOrange);
let priceAppleFloor = Math.floor (priceApple);
let priceTomatoFloor = Math.floor (priceTomato);

const SUM_VALUE_ROUND = [priceAppleFloor + priceOrangeFloor + priceTomatoFloor];
const SUM_VALUE_ROUND_HUNDRED = Math.round ([SUM_VALUE_ROUND] /100) * 100;
document.writeln("Сума товарів округлена: " + SUM_VALUE_ROUND_HUNDRED + "грн." + "<br/>");
console.log(SUM_VALUE_ROUND);
console.log(SUM_VALUE_ROUND_HUNDRED);

let isEven = [SUM_VALUE_ROUND % 2] == 0;
if (isEven) {
    console.log("yes");
} else {
    console.log("no");   
}
document.writeln("Число парне? " + isEven + "<br/>");
let change500 = [500 - SUM_VALUE_ROUND];
console.log(change500)
document.writeln("Решта: " + change500 + "грн." + "<br/>");

const mediumPrice = [(priceApple + priceOrange + priceTomato) / 3];
const mediumPriceRound = Math.round([mediumPrice] / 0.01) * 0.01;
console.log(mediumPriceRound);
document.writeln("Середнє значення: " + mediumPriceRound + "<br/>")
const DISCOUNT_PERCENTAGE = Math.random();
const discount = [SUM_VALUE * DISCOUNT_PERCENTAGE];
console.log (discount);
document.writeln("Discount: " + [DISCOUNT_PERCENTAGE * 100] + "% " + "<br/>");
const finalPrice = Math.round([SUM_VALUE - discount] / 0.01) * 0.01;
console.log(finalPrice);
const INCOME = (SUM_VALUE - (SUM_VALUE/2)) - discount;
document.writeln("Чистий прибуток: " + INCOME + "грн." + "<br/>")
