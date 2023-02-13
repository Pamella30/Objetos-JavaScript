const cliente = {
    nome: "Ana",
    idade: 35,
    cpf: "123445753"
}

console.log(`A cliente ${cliente.nome} tem ${cliente.idade} anos.`)
console.log(`Os 3 primeiros digitos do cpf sao ${cliente.cpf.substring(0, 3)}.`)