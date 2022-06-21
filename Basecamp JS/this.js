const pessoa = {
    primeiroNome: 'Gabriel',
    ultimoNome: 'Raposo',
    id: 32,
    nomeCompleto: function() {
        return `${this.primeiroNome} ${this.ultimoNome}`
    },
    getId: function() {
        return this.id
    }
}

console.log(pessoa.nomeCompleto())
console.log(pessoa.getId())

////////

//Utilizando Call

const amigo = {
    nome: 'Ronildo'
}

const gato = {
    nome: 'Babigi'
}

function getName() {
    console.log(this.nome)
}

getName.call(gato)


const numeros = {
    num1: 3,
    num2: 4
}

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b)
}

soma.call(numeros, 1, 5)

//Utilizando Apply

function getName2() {
    console.log(this.nome)
}

getName.apply(amigo)


function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b)
}

soma.apply(numeros, [1, 5])

//Utilizando Bind

const retornaNomes = function () {
    return this.nome
}

retornaNomes.apply(amigo)

let bruno = retornaNomes.bind({nome: 'Bruno'})

console.log(retornaNomes())
console.log(bruno())

