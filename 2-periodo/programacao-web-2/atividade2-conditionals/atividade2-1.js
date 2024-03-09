let weight = prompt("Digite seu peso em kg:");
let height = prompt("Digite sua altura em metros:");

weight = parseFloat(weight);
height = parseFloat(height);

const imc = weight / (height * height);

if (imc < 18.5) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está abaixo do peso.");
} else if (imc >= 18.5 && imc <= 24.9) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está com peso normal.");
} else if (imc >= 25.0 && imc <= 29.9) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está com excesso de peso.");
} else if (imc >= 30.0 && imc <= 34.9) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está com obesidade grau I.");
} else if (imc >= 35.0 && imc <= 39.9) {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está com obesidade grau II.");
} else {
    console.log("Seu IMC é " + imc.toFixed(2) + ". Você está com obesidade grau III.");
}