// Solicita ao usuário os comprimentos dos três lados do triângulo
let lado1 = parseFloat(prompt("Digite o comprimento do primeiro lado do triângulo:"));
let lado2 = parseFloat(prompt("Digite o comprimento do segundo lado do triângulo:"));
let lado3 = parseFloat(prompt("Digite o comprimento do terceiro lado do triângulo:"));

if (lado1 + lado2 > lado3 && lado1 + lado3 > lado2 && lado2 + lado3 > lado1) {
    if (lado1 === lado2 && lado2 === lado3) {
        console.log("É um triângulo equilátero.");
    } else if (lado1 === lado2 || lado1 === lado3 || lado2 === lado3) {
        console.log("É um triângulo isósceles.");
    } else {
        console.log("É um triângulo escaleno.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo válido.");
}
