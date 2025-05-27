let numeros = [];
let soma = 0;
let media = 0;
let acimaDaMedia = "";

for (let i = 0; i < 8; i++) {
    let num = parseFloat(prompt(`Digite o ${i + 1}º numero real:`));
    numeros[i] = num;
    soma = soma + num;
}

media = soma / 8;

for (let i = 0; i < 8; i++) {
    if (numeros[i] > media) {
        acimaDaMedia = acimaDaMedia + numeros[i] + "\n";
    }
}

alert("A media é: " + media + "\nNumeros acima da media:\n" + acimaDaMedia);