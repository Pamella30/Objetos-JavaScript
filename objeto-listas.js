//um objeto

const cliente = {
    nome: "Marlene",
    idade: 63,
};

// inserindo um objeto dentro de outro objeto usando array
cliente.enderecos = [
    {
    rua: "Dos bons",
    numero: 89,
    apartamento: false
}
];

//usando um metodo array para inserir um novo endereco
cliente.enderecos.push(
    {
        rua: "dos gigantes",
        numero: 90,
        apartamento: true
    }
);

//filtrando uma propriedade atraves de um metodo do array
const listaApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

console.log(listaApartamentos)

