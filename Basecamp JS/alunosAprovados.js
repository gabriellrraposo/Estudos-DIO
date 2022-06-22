const alunos = [
    {
        nome: 'João',
        nota: 5,
        turma: '1B'
    },
    {
        nome: 'Maria',
        nota: 8,
        turma: '3A'
    },
    {
        nome: 'Angélica',
        nota: 7,
        turma: '2B'
    },
    {
        nome: 'Miguel',
        nota: 2,
        turma: '1B'
    }
]

function alunosAprovados(arr, media) {
    let aprovados = []
    for (i = 0; i < arr.length; i++) {
        const {nota, nome} = arr[i]
        
        if (nota >= media) {
            aprovados.push(nome)
        }
    }

    return aprovados
}

console.log(alunosAprovados(alunos, 5))