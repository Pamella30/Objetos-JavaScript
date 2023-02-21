const clientes = require("./clientes.json")

function encontrar(lista, chave, valor){
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "nome", "Olva")

console.log(encontrado)

const encontrado2 = encontrar(clientes, "telefone", "58996279799")
console.log(encontrado2)

//usado um metodo de arrays ".includes" para encontrar a informacao pesquisada