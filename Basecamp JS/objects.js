// var bancoDeDados = {nome: 'Robson', idade: 46, nacionalidade: 'Brasil', sexo: 'Masculino'} //Um object pode armazenar inclusive arrays e outros objects
// console.log(bancoDeDados)
// console.log(bancoDeDados.idade)

// console.log(`${bancoDeDados.nome} tem ${bancoDeDados.idade} anos, nasceu no ${bancoDeDados.nacionalidade} e é do sexo ${bancoDeDados.sexo}`)

// var {idade, nacionalidade} = bancoDeDados //Seleciona apenas os atributos desejados para serem exibidos
// console.log(idade, nacionalidade)
// console.log(bancoDeDados)


//Verificando palíndromo

function verificaPalindromo(string) {
    if(!string) return "string inexistente"

    stringReversa = string.split("").reverse().join("")
    stringReversa === string ? console.log('É um palíndromo') : console.log('Não é um palíndromo')
}

verificaPalindromo('natan')

function verificaPalindromo2(string) {
    if(!string) return "string inexistente"

    for (let i = 0; i < string.length / 2; i++) {
        if (string[i] !== string[string.length - 1 - i]) {
            return 'Não é um palíndromo'
        }
    }

    return 'É um palíndromo'
}

console.log(verificaPalindromo2('ovo'))