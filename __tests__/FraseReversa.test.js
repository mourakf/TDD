const revert = require('../functions/FraseReversa')

describe("RevertString function", () => {
    test("'python' => 'nohtyp'", () => {
        expect(revert('python')).toEqual('nohtyp');
    });

    test("'javascript' => 'tpircsavaj'", () => {
        expect(revert('javascript')).toEqual('tpircsavaj');
    });
});