class ContaBancaria {
    constructor() {
        this.__name = null
        this._saldo = null
        this._limite = null
    }

    set fullName(valor) {
        this.__name = valor
    }

    get fullName() {
        return this.__name
    }

    set saldo(valor) {
        this._saldo = valor
    }

    get saldo() {
        return this._saldo
    }
    set limite(valor) {
        if (this._limite === -1) {
            throw new Error('Limite desativado. Necessário habilitar limite')
        }
        this._limite = valor
        this.saldo += this.limite
    }

    get limite() {
        return this._limite
    }

    saque(valor) {
        try {
            if (this._saldo < valor || !this._saldo) {
                throw new Error('Saldo insuficiente')
            }
            this._saldo -= valor
            return this._saldo
        } catch (error) {
            throw new Error('Saldo insuficiente')
        }

    }
    desativarLimite() {
        this._limite = -1
    }

    ativarLimite() {
        this._limite = null
    }
}

// conta1 = new ContaBancaria()
// a = conta1.saque(500)
// console.log(a)

module.exports = ContaBancaria