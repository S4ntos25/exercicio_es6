const alunos = [
    {nome: 'jeferson', nota: 9.5},
    { nome: 'Bruno', nota: 7.2 },
    { nome: 'Carlos', nota: 5.9 },
    { nome: 'Daniela', nota: 6.8 },
    { nome: 'Eduardo', nota: 5.4 }
]

const alunosAprovados = alunos.filter(aprovados => aprovados.nota >= 6)


console.log(alunosAprovados)
