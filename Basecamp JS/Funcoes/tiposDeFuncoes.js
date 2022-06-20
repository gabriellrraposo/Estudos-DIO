// Função Autoinvocável --precisa estar entre parenteses e ter parenteses no final para já invocá-la

(
    function(num1, num2) {
        let res = num1 * num2
        console.log(res)
        return
    }
) (2, 5);


//Parâmetro padrão
function soma(array, n2 = 0) {
    const result = []
    
    for (let i = 0; i < array.length; i++) {
        result.push(array[i] + n2)
    }
    console.log(result)
} 

const array = [2, 4, 5, 1, 2, 0]
soma(array)

//Objeto arguments

function findMax() {
    let max = -Infinity
    
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i]
        }
    }

    return max;
}

function showArgs() {
    return arguments
}

let array2 = [54, 21, 5, 2, 65, 8, 654, 42, 11, 2]

console.log(findMax(2, 6, 653, 90, 34, 321, 342, 67, 3, 12))

console.log(findMax(...array2)) //Técnica de Spread --lida separadamente com cada item do array, como se cada um deles fosse um parâmetro

console.log(showArgs(2, 5, 54, 542, 12))

//Rest
function confereTamanho(...itens) {
    console.log(itens.length)
    let arrayArgumentos = arguments
    return arrayArgumentos
}

console.log(confereTamanho(2, 5, 6, 1, 4))

//Object Destructuring
const user = {
    id: 23,
    displayName: 'stilete',
    fullname: {
        firstName: 'Gabriel',
        lastName: 'Raposo'
    }
}

function userId({id}) {
    return id
}

function getFullName({fullname: {firstName: primeiroNome, lastName: ultimoNome}}) {
    return `${primeiroNome} ${ultimoNome}`
}

console.log(userId(user))
console.log(getFullName(user))