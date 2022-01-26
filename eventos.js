//ATIVIDADE: CADASTRO DE EVENTOS - PFS_UC8 - LÓGICA DE PROGRAMAÇÃO - TURMA 4

//VERIFICAR IDADE

let idadeCadastro = 18

if(idadeCadastro >= 18) {
    console.log("Idade igual ou superior a 18 anos, cadastro permitido!")
} else {
    console.log("Idade inferior a 18 anos, cadastro não permitido")
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

let totalParticipantes = 5

console.log("Quantidade de participantes inscritos até o momento:", totalParticipantes)

if(totalParticipantes <= 100){
    console.log("Quantidade de participantes inferior ou igual a 100, cadastro permitido!")
} else {
    console.log("Quantidade de participantes ultrapassada, cadastro não permitido!")
}

//VERIFICA QUEM SÃO OS PARTICIPANTES

let listaParticipantes = ["Participante 1", "Participante 2", "Participante 3", "Participante 4" , "Participante 5"]

console.log ("Relação dos participantes inscritos até o momento:")

for (let contador = 0; contador < listaParticipantes.length; contador++) {
  console.log (listaParticipantes[contador])
}

//VERIFICAR QUANTIDADE PALESTRANTES

let totalPalestrantes = 20

console.log("Quantidade de palestrantes inscritos até o momento:", totalPalestrantes)

if (totalPalestrantes <= 20) {
  console.log("Quantidade de palestrantes não atingida, cadastro permitido!")
} else {
  console.log("Quantidade de participantes excedida, cadastro não permitido!")
}

//VERIFICA QUEM SÃO OS PARTICIPANTES

let listaPalestrantes= ["Palestrante 1", "Palestrante 2", "Palestrante 3", "Palestrante 4" , "Palestrante 5"]

console.log ("Relação dos palestrantes inscritos até o momento:")

for (let contador = 0; contador < listaPalestrantes.length; contador++) {
  console.log (listaPalestrantes[contador])
}