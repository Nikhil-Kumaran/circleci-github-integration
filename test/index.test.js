const {add,sub,mul} = require('../src/index')

describe('Testing functions', () => {
    it('Add: should return 5', async () => {
        expect(add(3,2)).toBe(5)
    })

    it('Sub: should return -1', async () => {
        expect(sub(3,4)).toBe(-1)
    })

    it('Mul: should return 6', async () => {
        expect(mul(3,2)).toBe(6)
    })
})