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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function"){
        console.log(`O campo ${chave} tem o valor ${cliente[chave]}`);
    }
    
}
