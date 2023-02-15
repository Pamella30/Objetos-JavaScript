const cliente = {
    nome: "Gildo",
    idade: 67,
    saldo: 9000,
    efetuaPagamento: function(valor){
        if(valor > this.saldo) {
            console.log("Saldo insuficiente")
        } else {
            this.saldo -= valor;
            console.log(`Pagamento realizado com sucesso. Novo saldo ${this.saldo}`)
        }
    }
}

cliente.efetuaPagamento(100)