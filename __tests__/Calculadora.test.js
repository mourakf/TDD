const Calculadora = require('../functions/Calculadora')

const calc = new Calculadora()
describe('Funcionalidades básicas de uma calcculadora', () => {
    test('Deve somar elementos', () => {
        const soma = calc.soma(1, 5)
        expect(soma).toEqual(6)
    })
    test('Deve multiplicar elementos', () => {
        const result = calc.multiplicacao(2, 5)
        expect(result).toEqual(10)
    })

    test('Deve retornar erro com divisao por 0', () => {
        const result = () => calc.divisao(4, 0)
        expect(result).toThrow()
    })

    test('Deve dividir elementos', () => {
        const result = calc.divisao(50, 5)
        expect(result).toEqual(10)
    })

    test('Deve subtrair elementos', () => {
        const result = calc.subtracao(50, 5)
        expect(result).toEqual(45)
    })

})