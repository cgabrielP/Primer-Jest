let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
console.log(oneEuroIs[JPY]);
// declaramos una funcion con el mismo nombre "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = (valueInDollar) => {
    // convertimos el valor a dolares
    let dollarAmount = valueInDollar / 1.2;
    let valueInYen = valueInDollar * 1.2;
    // retornamos el valor
    return valueInYen;

}


/*const fromYenToPound = (valueInYen)=>{
    // convertimos el valor a dolares
    let valueInPound = valueInYen * 1.2;
    // retornamos el valor
    return valueInPound;
}

const sum = (a, b) =>{
    return a+b
}
console.log(sum(7, 3))
*/

module.exports = { sum , fromEuroToDollar, fromDollarToYen, fromYenToPound};