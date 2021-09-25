// VAT exercises

const calcVAT = function (base, percentage) {
    return base * (percentage / 100);
}

const baseToVAT = function (base, percentage) {
    return base + calcVAT(base, percentage);
}

console.log(baseToVAT(5.00, 9));

// ----------------------------------------------

const totalToBase = function (total, factor) {
    return total / factor;
}

const breakdown = function (total, percentage) {
    let factor = (100 + percentage) / 100;
    let base = totalToBase(total, factor);
    let vatAmount = total - base;
    return [base, vatAmount]
}

results = breakdown(1210, 21);

console.log('Basisprijs: ', results[0]);
console.log('BTW-bedrag: ', results[1]);