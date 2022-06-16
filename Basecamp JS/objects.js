var bancoDeDados = {nome: 'Robson', idade: 46, nacionalidade: 'Brasil', sexo: 'Masculino'} //Um object pode armazenar inclusive arrays e outros objects
console.log(bancoDeDados)
console.log(bancoDeDados.idade)

console.log(`${bancoDeDados.nome} tem ${bancoDeDados.idade} anos, nasceu no ${bancoDeDados.nacionalidade} e é do sexo ${bancoDeDados.sexo}`)

var {idade, nacionalidade} = bancoDeDados //Seleciona apenas os atributos desejados para serem exibidos
console.log(idade, nacionalidade)
console.log(bancoDeDados)