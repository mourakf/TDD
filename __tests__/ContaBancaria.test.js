const ContaBancaria = require('../functions/ContaBancaria')

let conta1 = new ContaBancaria()

describe('Criar uma conta bancaria com atributos nome, saldo e limite e operações de saque e uso de limite', () => {
    test('Conta bancaria tem atributos nome, saldo e limite inicializadas como null', () => {
        expect(conta1).toHaveProperty('__name', null)
        expect(conta1).toHaveProperty('_saldo', null)
        expect(conta1).toHaveProperty('_limite', null)
    })

    test.skip('Conta bancaria tem atributos nome, saldo e limite inicializadas como null', () => {
        expect(conta1).toEqual()
    })

    test('Getters e setters do nome', () => {
        expect(conta1.fullName).toBeNull()
    })
    test('Getters e setters do saldo', () => {
        expect(conta1.saldo).toBeNull()
    })
    test('Getters e setters do limite', () => {
        expect(conta1.limite).toBeNull()
    })

    test('Input de saldo e retorno do saldo', () => {
        const result = conta1.saldo = 500
        expect(result).toBe(500)
    })
    test('Input e retorno de limite', () => {
        const result = conta1.limite = 100
        expect(result).toBe(100)
    })

    test('Input e retorno do nome', () => {
        const result = conta1.fullName = 'Agata Cristina'
        expect(typeof result).toEqual('string')
    })
    test('Retirada de saque com saldo insuficiente', () => {
        const conta2 = new ContaBancaria()
        expect(() => {
            conta2.saque(500)
        }).toThrow(new Error('Saldo insuficiente'))
    })

    test('Retirada de saque com saldo positivo retorna o novo saldo', () => {
        conta1.saldo = 1000
        const result = conta1.saque(120)
        expect(result).toEqual(880)
    })

    test('Funcao Desativar limite seta o limite como -1', () => {
        conta1.desativarLimite()
        const result = conta1.limite
        expect(result).toEqual(-1)

    })

    test('Limite desativado não permite colocar limite sem ativa-lo', () => {
        conta1.desativarLimite()
        const result = () => conta1.limite = 200
        expect(result).toThrowError('Limite desativado. Necessário habilitar limite')
    })
    test('Ativar limite seta limite como null conforme inicialização', () => {
        const result = conta1.ativarLimite()
        expect(result).toBeUndefined()
        expect(conta1.limite).toBeNull()

    })


})