//variáveis

let Wins = 158
let Loses = 83

//funções

let saldoDeVitorias = calculadora (Wins, Loses)

function calculadora (numA, numB) {
    let resultadoSoma = numA - numB
    return resultadoSoma
}


//estrutura de decisão

let nivelRanking;

if (saldoDeVitorias <= 10) {
    nivelRanking = "Ferro";
} else if (saldoDeVitorias > 10 && saldoDeVitorias <= 20) {
    nivelRanking = "Bronze";
} else if (saldoDeVitorias > 20 && saldoDeVitorias <= 50) {
    nivelRanking = "Prata";
} else if (saldoDeVitorias > 50 && saldoDeVitorias <= 80) {
    nivelRanking = "Ouro";
} else if (saldoDeVitorias > 80 && saldoDeVitorias <= 90) {
    nivelRanking = "Diamante";
} else if (saldoDeVitorias > 90 && saldoDeVitorias <= 100) {
    nivelRanking = "Lendário";
}  else if (saldoDeVitorias > 100) {
    nivelRanking = "Imortal";
} else {
    nivelRanking = "Iniciante";
}


console.log ("O Herói possui " + Wins + " vitorias e " + Loses + " derrotas, com saldo de " + saldoDeVitorias + " vitorias, e está no ranking " + nivelRanking + ".")