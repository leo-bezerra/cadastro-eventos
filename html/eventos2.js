//ATIVIDADE: CADASTRO DE EVENTOS - PFS_UC8 - LÓGICA DE PROGRAMAÇÃO - TURMA 4

function cadeventos(){

//VERIFICAR IDADE

let idadeCadastro = document.getElementById("idade").value;

if(idadeCadastro >= 18) {
    alert("Idade igual ou superior a 18 anos, cadastro permitido!")
} else {
    alert("Idade inferior a 18 anos, cadastro não permitido")
}

//NOME DO EVENTO

let nomeEvento = document.getElementById("nomeevento").value;
alert ("Nome do Evento: " + nomeEvento)

//VERIFICAR DATA

let hoje = new Date().toDateString()
//let dataEvento = new Date('30/12/2021').toDateString()
let dataEvento = document.getElementById("calendario").value;

alert("Data atual: " + hoje)

if (dataEvento > + hoje) {
  alert('Data do evento posterior a atual, cadastro  permitido!')
} else {
  alert('Data do evento inferior a atual, cadastro não permitido!')
}

//VERIFICAR QUANTIDADE PARTICIPANTES

let totalParticipantes = document.getElementById("participantes").value;

alert("Quantidade de participantes inscritos até o momento: " + totalParticipantes)

if(totalParticipantes <= 100){
    alert("Quantidade de participantes inferior ou igual a 100, cadastro permitido!")
} else {
    alert("Quantidade de participantes ultrapassada, cadastro não permitido!")
}

//VERIFICAR QUANTIDADE PALESTRANTES

let totalPalestrantes = document.getElementById("palestrantes").value;

alert("Quantidade de palestrantes inscritos até o momento: " + totalPalestrantes)

if (totalPalestrantes <= 20) {
  alert("Quantidade de palestrantes não atingida, cadastro permitido!")
} else {
  alert("Quantidade de participantes excedida, cadastro não permitido!")
}

}