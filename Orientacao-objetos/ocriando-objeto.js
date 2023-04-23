//notacao literal
const obj1 = {}
console.log(obj1)

//objeto em js
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Funcoes construtoras
function Produto(nome, preco, desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Televisao', 2000.00, 0.30)
const p2 = new Produto('Carro', 9000.00, 0.10)

console.log(p1.getPrecoComDesconto())
console.log(p2.getPrecoComDesconto())

//Funcao Factory
function criarFuncionario(nome, salarioBase, faltas){
    return {
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return(salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Claudia', 6.900, 1)
const f2 =criarFuncionario('Bianca', 5.800, 3)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Leo'
console.log(filha)

//Uma funcao famosa que retorna Objeto...
const fromJSON = JSON.parse(`{"info": "Sou um JSON"}`)
console.log(fromJSON.info)