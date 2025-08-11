const ContaBancaria = require('./contaBanc')

describe('Testes da classe conta bancaria:', () => {
    let conta

    beforeEach(() => {
        conta = new ContaBancaria()
    })

    test("Saldo inicial deve ser zero:", () => {
        expect(conta.consultarSaldo()).toBe(0)
    })

    test("Depositar valor inteiro positivo", () => {
        conta.adicionarSaldo(100)
        expect(conta.consultarSaldo()).toBe(100)
    })

    test("Sacar dinheiro que nao possui na conta", () => {
        expect(() => conta.retirarSaldo(100)).toThrow("O valor e acima do que possui na conta")
    })
})