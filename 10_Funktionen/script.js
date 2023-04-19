function addition(a,b){
    return a + b;
}
console.log(addition(10, 5));

function subtraktion(a,b){
    return a - b;
}
console.log(subtraktion(10, 5));

function multiplikation(a,b){
    return a * b;
}
console.log(multiplikation(10, 5));

function supercalculation(a,b){
    return (a+b)/2 * a;
}
console.log(supercalculation(10, 5));

function printEasterDate(year){
    n = year - 1900
    a = n % 19
    b = ((7 * a + 1) / 19)
    m = (11 * a * 4 - b) % 29
    q = Math.floor (n/4)
    w = (n + q + 31 - m) % 7
    p = Math.floor (25 - m - w)

    if (p > 0){
        console.log("Ostersonntag ist der " + p + ". April")
    } else{
        console.log("Ostersonntag ist der " + (p + 31) + ". März")
    }
}

printEasterDate(1843);