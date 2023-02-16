const cliente = {
    nome: "Leonardo",
    idade: 18,
}

cliente.endereco = [
    {
        rua: "Peixe",
        numero: 99,
        cidade: "SP",
    },
];

const chavesObjeto = Object.keys(cliente);

console.log(chavesObjeto)

if (!chavesObjeto.includes("endereco")){
    console.error("Erro. E necessario ter um endereco cadastrado!")
}