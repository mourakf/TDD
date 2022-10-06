class Calculadora {

    soma(val1, val2) {
        return val1 + val2
    }

    multiplicacao(val1, val2) {
        return val1 * val2
    }

    divisao(val1, val2) {
        if (!val1 || !val2) {
            throw Error("Não é possível dividir por zero");
        }
        return val1 / val2
    }

    subtracao(val1, val2) {
        return val1 - val2
    }
}

module.exports = Calculadora