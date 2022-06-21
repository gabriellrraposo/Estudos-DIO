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