const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return salary * this.tax;
}
console.log(getMyTaxes.call(ukraine, 2500));

function getMiddleTaxes() {
    return this.tax*this.middleSalary;
}
console.log("Середній податок в Україні:"+getMiddleTaxes.call(ukraine));
console.log("Середній податок в Латвії:"+getMiddleTaxes.call(latvia));
console.log("Середній податок в Литві:"+getMiddleTaxes.call(litva));

function getTotalTaxes() {
    return this.tax * this.middleSalary * this.vacancies;
} 
console.log(getTotalTaxes.call(litva));

function getMySalary(country) {
    const min = 1000;
    const max = 2000;
    const  salary = Math.round(Math.random() * (max - min) + min);
    const profit = {
    salary: salary,
    taxes: this.tax,
    profit: salary - this.tax
}
    console.log(profit)
}
setInterval(()  => getMySalary.call(ukraine), 6000);