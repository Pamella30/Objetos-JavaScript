const leitura = require("./objeto-json.json")

console.log(leitura);
console.log(typeof leitura)

//operacoes com JSON - transformando um objeto em string
const clienteString = JSON.stringify(leitura);
console.log(clienteString)
console.log(typeof clienteString)

//transformando string de volta para objeto
const objeto = JSON.parse(clienteString)
console.log(objeto)
console.log(typeof objeto)