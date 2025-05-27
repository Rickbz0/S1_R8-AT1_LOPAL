// Programa para calculo de media para verificar a maior e a menor nota utilizando vetores

let notas = [];
let quantidade;

// validação da quantidadede notas
do {
    quantidade = parseInt(prompt("quantas notas voce deseja armazenar?"));

    if (isNaN(quantidade) || quantidade <= 0) {
        alert("Valor invalido! digite um numero maior que zero.")
    }

} while (isNaN(quantidade) || quantidade <= 0);

let nota;

for (let i = 0; i < quantidade; i++) {

    //validação da nota
    do {
        nota = parseFloat(prompt(`Digite a nota ${i + 1}:`));

        if (isNaN(nota) || nota < 0 || nota > 10) {
            alert("Nota invalida! digite um numero de 0 a 10");
        }

    } while (isNaN(nota) || nota < 0 || nota > 10);

    notas[i] = nota;

}

//calculo da media das notas e descobrir qual é a maior e a menor nota.

let soma = 0;
let maiorNota = notas[0];
let menorNota = notas[0];


for (let i = 0; i < quantidade; i++) {
    soma += notas[i];

    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
    }
    if (notas[i] > maiorNota) {
        maiorNota = notas[i];
    }

}

let media = soma / quantidade;

alert(`A media das notas é: ${media.toFixed(2)}\n A maior nota foi: ${maiorNota.toFixed(2)}\n A menor nota foi: ${menorNota.toFixed(2)}`);
