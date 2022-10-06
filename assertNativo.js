// import {
//     strict as assert
// } from 'assert'

const assert = require('assert/strict')
const somarHoraExtra = (salario, valorExtra) => salario + valorExtra

const calculaDesconto = (salario, desconto) => salario - desconto

assert.strictEqual(2, 4) === true
assert.deepEqual([], []) === true

// module.exports = {
//     somarHoraExtra,
//     calculaDesconto
// }