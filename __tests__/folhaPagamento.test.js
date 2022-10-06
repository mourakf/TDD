const {
    somarHoraExtra,
    calculaDesconto
} = require('../functions/folhaPagamento')



test('Deve retornar 2.500', () => {
    expect(somarHoraExtra(2000, 500)).toBe(2500)

})

test.skip('Deve calcular o desconto de 100 reais em um salario de 1.700', () => {
    expect(calculaDesconto(1.500, 100)).toEqual(1600)
})

test('Deve retornar NAN quando o input é diferente de number', () => {
    expect(calculaDesconto(1.500, "a")).toBeNaN()
})