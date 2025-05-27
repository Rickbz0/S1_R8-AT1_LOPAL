let idades = [];
let maiorVC; // variavel para armazenar a posição das pessoas maiores de 25 anos 

for (let i = 0; i < 7; i++) {
    idades[i] = parseInt(prompt(`Digite a sua idade:`));

    if (isNaN(idades[i]) || idades[i] < 0 || idades[i] > 120) {
        i--;
        alert(`Sua idade é invalida!!`)

    }

}

let j=0

for (let i = 0; i < 7; i++) {

if (idades[i]>25){
    maiorVC = i;
    j++;
}

}

for(let i = 0; i < j; i++){

    alert(`A posição ${maiorVC[i]} é maior de 25 anos`);

}