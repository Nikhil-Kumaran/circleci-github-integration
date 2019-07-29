const {add,sub,mul,div} = require('../src/index')

describe('Testing functions', () => {
    it('Add: should return 5', () => {
        expect(add(3,2)).toBe(5)
    })

    it('Sub: should return -1', () => {
        expect(sub(3,4)).toBe(-1)
    })

    it('Mul: should return 6', () => {
        expect(mul(3,2)).toBe(6)
    })

    it('Div: should return 3', () => {
        expect(div(6,2)).toBe(4)
    })
})