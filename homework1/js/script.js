let priceOrange = 15.678;
let priceApple = 123.965;
let priceTomato = 90.2345;

const MAX_VALUE = Math.max(priceApple, priceOrange, priceTomato);
const MIN_VALUE = Math.min(priceApple, priceOrange, priceTomato);
const SUM_VALUE = [priceApple + priceOrange + priceTomato];

console.log(SUM_VALUE);
document.writeln("SUM_VALUE:" + SUM_VALUE);

let priceOrangeFloor = Math.floor(priceOrange);
let priceAppleFloor = Math.floor (priceApple);
let priceTomatoFloor = Math.floor (priceTomato);

const SUM_VALUE_ROUND = [priceAppleFloor + priceOrangeFloor + priceTomatoFloor];
const SUM_VALUE_ROUND_HUNDRED = Math.round ([SUM_VALUE_ROUND] /100) * 100;

console.log(SUM_VALUE_ROUND);
console.log(SUM_VALUE_ROUND_HUNDRED);

let isEven = [SUM_VALUE_ROUND % 2] == 0;
if (isEven) {
    console.log("even");
} else {
    console.log("odd");   
}

let change500 = [500 - SUM_VALUE_ROUND];
console.log(change500)

const mediumPrice = [(priceApple + priceOrange + priceTomato) / 3];
console.log(mediumPrice);
const mediumPrice1 = Math.round([mediumPrice] / 0.01) * 0.01;
console.log (mediumPrice1);

const discount = [SUM_VALUE * Math.random()];
console.log (discount);
const finalPrice = Math.round([SUM_VALUE - discount] / 0.01) * 0.01;
console.log(finalPrice);

