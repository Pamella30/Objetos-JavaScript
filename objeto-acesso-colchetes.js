const cliente = {
    nome: "Ana",
    idade: 35,
    cpf: "123445753"
}

chaves = ["nome", "idade", "cpf"]

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`)
});

//metodo usado para descobrir o valor dentro de cada chave