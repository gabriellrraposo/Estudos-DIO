// var jogador1 = 0
// var jogador2 = 2
// var placar

let atletico = {gols: 3, jogadores: 7}
let cruzeiro = {gols: 1, jogadores: 9}

if (atletico.jogadores < 7 || cruzeiro.jogadores < 7) {
    console.log("O jogo não pôde continuar ambos os times precisam possuir pelo menos 7 jogadores.")
    if (cruzeiro.jogadores < 7) {
        console.log("Vitória do Atlético por W.O!")
    } else if (atletico.jogadores < 7) {
        console.log("Vitória do Cruzeiro por W.O!")
    } else {
        console.log("Ambos os times terão uma derrota contabilizada, pois não compareceram com a quantidade de jogadores mínima.")
    }
} else {
    if (atletico.gols > cruzeiro.gols) {
        console.log("Vitória do Atlético!")
    } else {
        console.log("Vitória do Cruzeiro!")
    }
    console.log(`Placar: Atlético ${atletico.gols} x ${cruzeiro.gols} Cruzeiro`)
}

