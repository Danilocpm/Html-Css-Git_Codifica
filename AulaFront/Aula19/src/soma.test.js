const soma = require('./soma')

test('Soma de 5 + 1 deve ser: 6:', () => {
    expect(soma(5, 1)).toBe(6)
})