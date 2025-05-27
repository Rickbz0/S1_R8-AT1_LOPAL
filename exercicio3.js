let numeros = [];
let contador = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º numero inteiro:`));
    numeros[i] = num;
}

let busca = parseInt(prompt("Digite um numero para verificar quantas vezes ele aparece no vetor:"));

for (let i = 0; i < 10; i++) {
    if (numeros[i] === busca) {
        contador = contador + 1;
    }
}

alert("O numero " + busca + " aparece " + contador + " vezes no vetor.");