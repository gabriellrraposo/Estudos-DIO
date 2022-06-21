function forIn(obj) {
    for (prop in obj) {
        console.log(prop)
    }
}

function forIn2(obj) {
    for (prop in obj) {
        console.log(obj[prop])
    }
}

const meuObjeto = {
    nome: 'João',
    idade: 20,
    cidade: 'Salvador'
}

forIn(meuObjeto)
forIn2(meuObjeto)


function logLetras(palavra) {
    for (letra of palavra) {
        console.log(letra)
    }
}

function logNumeros(array) {
    for (items of array) {
        console.log(items)
    }
}

const palavra = 'Abacaxi'
logLetras(palavra)

const array = [1, 2, 26, 0.43, 99]
logNumeros(array)