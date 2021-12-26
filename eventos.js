//ATIVIDADE: CADASTRO DE EVENTOS - PFS_UC8 - LÓGICA DE PROGRAMAÇÃO - TURMA 4

//VERIFICAR IDADE

let idadeCadastro = 17

if(idadeCadastro >= 18) {
    console.log("Maior que 18, cadastro permitido!")
} else {
    console.log("Idade inferior a 18, cadastro não permitido")
}

//VERIFICAR DATA

let hoje = new Date().toDateString()
let dataEvento = new Date('30/12/2021').toDateString()

console.log(hoje)

if (dataEvento < hoje) {
  console.log('Data do evento posterior a atual, cadastro  permitido!')
} else {
  console.log('Data do evento inferior a atual, cadastro não permitido!')
}

//VERIFICAR QUANTIDADE PARTICIPANTES

let totalParticipantes = 101

console.log("Quantidade de participantes inscritos até o momento:", totalParticipantes)

if(totalParticipantes <= 100){
    console.log("Quantidade de participantes inferior ou igual a 100, cadastro permitido!")
} else {
    console.log("Quantidade de participantes ultrapassada, cadastro não permitido!")
}
