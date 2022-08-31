const { sum } = require('./app.js');


test('adds 14 + 9 to equal 23', () => {
    
    let total = sum(14, 9);
    expect(total).toBe(23);
});

test("One euro should be 1.206 dollars", function(){
    // importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro son 1.2 dolares, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})

test("One dollar should be 106.54 yenes", function(){
    // importo la funcion desde app.js
    const { fromDollarToYen } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromDollarToYen(1)).toBe(106.54); //1 dolar son 106.54 yenes, entonces 3.5 euros deberian ser = (3.5 * 1.2)
})
test("One Yen should be 0.0062 Pounds", function(){
    // importo la funcion desde app.js
    const { fromYenToPound } = require('./app.js')
    
    // hago mi comparacion (la prueba)
    expect(fromYenToPound(1)).toBe(0.0062); //1 yen son 0.0062 libras
})