const {add,sub} = require('../src/index')

describe('Testing functions', () => {
    it('Add: should return 5', async () => {
        expect(add(3,2)).toBe(5)
    })

    it('Sub: should return -1', async () => {
        expect(sub(3,4)).toBe(-1)
    })
})