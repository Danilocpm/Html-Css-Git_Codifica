class ContaBancaria {
    constructor () {
        this.saldo = 0
    }

    consultarSaldo() {
        return this.saldo
    }

    adicionarSaldo(num) {
        if(num <= 0) {
            throw new Error('Valores negativos ou nulos nao podem ser adicionados')
        }

        this.saldo += num
    }

    retirarSaldo(num) {
        if(num > this.saldo) {
            throw new Error("O valor e acima do que possui na conta");
            
        } else if(num <= 0) {
            throw new Error("Valor nulo ou negativo nao pode ser retirado")
            
        } else {
            this.saldo -= num
        }
    }
}

module.exports = ContaBancaria