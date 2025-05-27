let numeros = [];
let somaPares = 0;

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt(`Digite o ${i + 1}º numero inteiro:`));
    numeros[i] = num;
}

for (let i = 0; i < 10; i++) {
    if (numeros[i] % 2 === 0) {
        somaPares = somaPares + numeros[i];
    }
}

alert("A soma dos numeros pares é: " + somaPares);