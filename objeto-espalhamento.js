const cliente = {
    nome: "Pamella",
    idade: 33,
    telefone: [11559713500, 0833456543]
}

cliente.endereco = [
    {
        rua: "Peixe",
        numero: 99,
        cidade: "SP",
    },
];

// espalhamento em um funcao
function Ligando(telefoneComercial, telefoneResidencial){
    console.log(`Ligando para ${telefoneComercial}`)
    console.log(`Ligando para ${telefoneResidencial}`)
}

Ligando(...cliente.telefone)

//espalhamento em um objeto
const encomenda = {
    destinatario: cliente.nome,
    ...cliente.endereco[0],
}

console.log(encomenda);
