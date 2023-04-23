//colecao dinamica de pares chave/valor

const produto = new Object
produto.nome = 'Cadeira'
produto['marca do produto'] = 'Generica'
produto.preco = 4000

console.log(produto)
delete produto.preco
delete produto['marca do produto']
console.log(produto)

const carro = {
    modelo: 'G30',
    valor: 10000,
    proprietario: {
        nome: 'Julia',
        idade: 66,
        endereco: {
            logradouro: 'Rua das curupiras',
            numero: 903
        }
    },
    condutores: [{
        nome: 'Juracema',
        idade: 45
    }, {
        nome: 'Denilsa',
        idade: 56
    }],
    calcularValorSeguro: function(){
        // ...
    }
}

carro.proprietario.endereco.numero = 89
carro['proprietario']['endereco']['logradouro'] = 'Rua das Marias'

delete carro.proprietario.endereco
delete carro.calcularValorSeguro

console.log(carro)
console.log(carro.condutores)
