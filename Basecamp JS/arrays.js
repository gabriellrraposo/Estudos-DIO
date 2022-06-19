let listaAlunos = ['Gabriel', 'Davi', 'Rebeca', 'Maria', 'Letícia', 'Eduardo']

// listaAlunos.forEach(function(item, index) {
//     console.log(`Código: ${index} | Aluno: ${item}`)
// })

listaAlunos.push('Marquinhos') // Adiciona item no fim do array

// listaAlunos.pop() //Remove item no fim do array

listaAlunos.shift() //Remove item no início do array

listaAlunos.unshift('Lara') //Adiciona item no início do array

// listaAlunos.splice(0, 3) //Remove do índice inicial ao final (no caso: 0 ao 3)
listaAlunos.splice(0, 2, 'Bernardo', 'Beatriz', 'Andreas', 'Óliver') //Apaga os intervalo de índices determinado (no caso, vai apagar 0 e 1, pois ele sempre conta um para baixo). No lugar dos itens excluídos são colocados os itens determinados
listaAlunos.forEach(function(item, index) {
    console.log(`Código: ${index} | Aluno: ${item}`)
})

console.log(listaAlunos.indexOf('Davi'))

let novoArray = listaAlunos.slice(0, 4) //Retorna os itens, no intervalo determinado, do array selecionado
console.log(novoArray)


// let array2 = ['Banana']
// let array = [[array2], 'Gabriel']
// array2.unshift('Gabriel Lucas')

// console.log(array)